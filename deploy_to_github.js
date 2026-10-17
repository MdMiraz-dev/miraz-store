const fs = require('fs');
const path = require('path');
const https = require('https');

// Read token from .env
function getEnvConfig() {
  if (!fs.existsSync('.env')) return {};
  const content = fs.readFileSync('.env', 'utf8');
  const env = {};
  content.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const idx = trimmed.indexOf('=');
    if (idx !== -1) {
      const key = trimmed.slice(0, idx).trim();
      const val = trimmed.slice(idx + 1).trim();
      env[key] = val;
    }
  });
  return env;
}

const env = getEnvConfig();
const TOKEN = env.GITHUB_TOKEN;
const OWNER = 'MdMiraz-dev';
const REPO = 'miraz-store';

if (!TOKEN || TOKEN.trim() === '' || TOKEN.includes('YOUR_TOKEN_HERE')) {
  console.log('ERROR: GITHUB_TOKEN is not set in .env file!');
  console.log('Please open .env file and add your token:');
  console.log('GITHUB_TOKEN=ghp_your_actual_token_here');
  process.exit(1);
}

function githubRequest(method, endpoint, data = null) {
  return new Promise((resolve, reject) => {
    const postData = data ? JSON.stringify(data) : null;
    const req = https.request({
      hostname: 'api.github.com',
      port: 443,
      path: endpoint,
      method: method,
      headers: {
        'User-Agent': 'MIRAZ-Deploy-Bot',
        'Authorization': `token ${TOKEN.trim()}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        ...(postData ? { 'Content-Length': Buffer.byteLength(postData) } : {})
      }
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = body ? JSON.parse(body) : {};
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            reject({ status: res.statusCode, body: parsed });
          }
        } catch (e) {
          reject({ status: res.statusCode, error: e.message, body });
        }
      });
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

function getAllFiles(dir, baseDir = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const item of list) {
    if (item === 'node_modules' || item === '.git' || item === 'legacy_site' || item === '_backup_react' || item === '.env' || item === '.env.local' || item.endsWith('.log')) {
      continue;
    }
    const fullPath = path.join(dir, item);
    const relPath = path.join(baseDir, item).replace(/\\/g, '/');
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, relPath));
    } else {
      results.push({ fullPath, relPath, size: stat.size });
    }
  }
  return results;
}

async function runDeploy() {
  console.log(`🚀 Starting GitHub Deployment for ${OWNER}/${REPO}...`);

  // 1. Check or create repository
  let repoData;
  try {
    console.log(`Checking if repository ${REPO} exists...`);
    repoData = await githubRequest('GET', `/repos/${OWNER}/${REPO}`);
    console.log(`✓ Repository ${REPO} already exists.`);
  } catch (err) {
    if (err.status === 404) {
      console.log(`Creating new repository ${REPO} on GitHub...`);
      repoData = await githubRequest('POST', '/user/repos', {
        name: REPO,
        description: 'MIRAZ Luxury Store – Live E-commerce Website',
        private: false,
        auto_init: true
      });
      console.log(`✓ Repository created successfully!`);
      // Wait 3 seconds for GitHub to initialize branch
      await new Promise(r => setTimeout(r, 3000));
    } else {
      console.error('Failed to access GitHub repository:', err);
      process.exit(1);
    }
  }

  // 2. Scan local files
  const files = getAllFiles(__dirname);
  console.log(`Found ${files.length} production files to upload.`);

  // 3. Upload Blobs
  console.log('Uploading blobs to GitHub...');
  const treeItems = [];
  let count = 0;

  for (const file of files) {
    const fileContent = fs.readFileSync(file.fullPath);
    const base64Content = fileContent.toString('base64');
    
    try {
      const blob = await githubRequest('POST', `/repos/${OWNER}/${REPO}/git/blobs`, {
        content: base64Content,
        encoding: 'base64'
      });
      treeItems.push({
        path: file.relPath,
        mode: '100644',
        type: 'blob',
        sha: blob.sha
      });
      count++;
      if (count % 15 === 0 || count === files.length) {
        console.log(`Uploaded ${count}/${files.length} files...`);
      }
    } catch (e) {
      console.error(`Failed to upload blob for ${file.relPath}:`, e);
    }
  }

  // 4. Create Git Tree
  console.log('Creating Git tree...');
  const tree = await githubRequest('POST', `/repos/${OWNER}/${REPO}/git/trees`, {
    tree: treeItems
  });

  // 5. Get default branch ref
  let parentCommitSha = null;
  const branch = repoData.default_branch || 'main';
  try {
    const ref = await githubRequest('GET', `/repos/${OWNER}/${REPO}/git/refs/heads/${branch}`);
    parentCommitSha = ref.object.sha;
  } catch(e) {
    // If empty repo, no parents
  }

  // 6. Create Commit
  console.log('Creating Git commit...');
  const commitPayload = {
    message: 'Deploy MIRAZ Luxury Store v2.0 Production Ready',
    tree: tree.sha,
    parents: parentCommitSha ? [parentCommitSha] : []
  };
  const commit = await githubRequest('POST', `/repos/${OWNER}/${REPO}/git/commits`, commitPayload);

  // 7. Update branch ref
  console.log(`Updating ${branch} branch pointer...`);
  try {
    await githubRequest('PATCH', `/repos/${OWNER}/${REPO}/git/refs/heads/${branch}`, {
      sha: commit.sha,
      force: true
    });
  } catch(e) {
    await githubRequest('POST', `/repos/${OWNER}/${REPO}/git/refs`, {
      ref: `refs/heads/${branch}`,
      sha: commit.sha
    });
  }

  console.log('\n======================================================');
  console.log(`🎉 SUCCESS! All ${files.length} files pushed to GitHub:`);
  console.log(`👉 https://github.com/${OWNER}/${REPO}`);
  console.log('======================================================\n');
}

runDeploy().catch(err => {
  console.error('Deployment error:', err);
});
