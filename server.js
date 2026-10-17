const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webp': 'image/webp',
  '.csv': 'text/csv; charset=utf-8',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
};

const XLSX = require('xlsx');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const EXCEL_CSV_FILE = path.join(DATA_DIR, 'miraz_orders_excel.csv');
const EXCEL_XLSX_FILE = path.join(DATA_DIR, 'miraz_orders.xlsx');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const CATEGORIES_FILE = path.join(DATA_DIR, 'categories.json');

function readJsonFile(filePath, defaultVal = []) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultVal, null, 2), 'utf8');
      return defaultVal;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content || '[]');
  } catch (err) {
    console.error('Error reading file:', filePath, err);
    return defaultVal;
  }
}

function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing file:', filePath, err);
    return false;
  }
}

// ── Automatic Excel Sheet (.CSV) Sync with UTF-8 BOM ────────
function syncOrdersToCsv(orders) {
  try {
    const BOM = '\uFEFF'; // UTF-8 BOM enables Excel on PC/Mac to display Bengali cleanly
    const headers = [
      'ক্রমিক',
      'অর্ডার আইডি',
      'তারিখ ও সময়',
      'গ্রাহকের নাম',
      'মোবাইল নম্বর',
      'সম্পূর্ণ ঠিকানা',
      'ডেলিভারি এরিয়া',
      'পণ্যের নাম',
      'পরিমাণ',
      'একক মূল্য (৳)',
      'সাবটোটাল (৳)',
      'ডেলিভারি চার্জ (৳)',
      'সর্বমোট প্রদেয় (৳)',
      'পেমেন্ট পদ্ধতি',
      'অর্ডার স্ট্যাটাস'
    ];

    const escapeCsv = (val) => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = (orders || []).map((o, idx) => {
      const serial = idx + 1;
      const id = o.id || ('#MRZ-' + (1000 + idx));
      const date = o.date || (o.timestamp ? new Date(o.timestamp).toLocaleString('bn-BD') : '');
      const name = o.name || '';
      // Prefix with tab so Excel keeps phone number as literal string without dropping leading 0
      const phone = o.phone ? `\t${o.phone}` : '';
      const address = (o.address || '').replace(/[\r\n]+/g, ', ');
      const area = o.area || '';
      const product = o.product || '';
      const qty = o.qty || 1;
      const price = o.price || 0;
      const subtotal = o.subtotal || (price * qty);
      const delivery = o.delivery !== undefined ? o.delivery : 60;
      const total = o.total || (subtotal + delivery);
      const payment = o.paymentMethod || 'ক্যাশ অন ডেলিভারি';
      const status = o.status || 'পেন্ডিং';

      return [
        escapeCsv(serial),
        escapeCsv(id),
        escapeCsv(date),
        escapeCsv(name),
        escapeCsv(phone),
        escapeCsv(address),
        escapeCsv(area),
        escapeCsv(product),
        escapeCsv(qty),
        escapeCsv(price),
        escapeCsv(subtotal),
        escapeCsv(delivery),
        escapeCsv(total),
        escapeCsv(payment),
        escapeCsv(status)
      ].join(',');
    });

    const csvContent = BOM + headers.map(escapeCsv).join(',') + '\r\n' + rows.join('\r\n');
    fs.writeFileSync(EXCEL_CSV_FILE, csvContent, 'utf8');
    return true;
  } catch (err) {
    console.error('Error generating Excel CSV:', err);
    return false;
  }
}

// ── Native Styled Microsoft Excel Workbook (.XLSX) Generator ──
const ExcelJS = require('exceljs');

async function syncOrdersToXlsx(orders) {
  try {
    const wb = new ExcelJS.Workbook();
    wb.creator = 'MIRAZ Luxury Store';
    wb.created = new Date();

    const ws = wb.addWorksheet('কাস্টমার অর্ডারসমূহ', {
      views: [{ showGridLines: true }]
    });

    // Title Row
    ws.mergeCells('A1:O1');
    const titleCell = ws.getCell('A1');
    titleCell.value = '✦ MIRAZ LUXURY STORE — কাস্টমার অর্ডার রেজিস্টার ✦';
    titleCell.font = { name: 'Segoe UI', size: 14, bold: true, color: { argb: 'FFD4A847' } };
    titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0D111A' } };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    ws.getRow(1).height = 36;

    // Subtitle Row
    ws.mergeCells('A2:O2');
    const subCell = ws.getCell('A2');
    const nowStr = new Date().toLocaleString('bn-BD');
    subCell.value = `সর্বমোট অর্ডার: ${(orders || []).length}টি | ওয়েবসাইট: miraz.com | হেল্পলাইন: 01339564967 | লাইভ আপডেট: ${nowStr}`;
    subCell.font = { name: 'Segoe UI', size: 9.5, italic: true, color: { argb: 'FF94A3B8' } };
    subCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF161B26' } };
    subCell.alignment = { vertical: 'middle', horizontal: 'center' };
    ws.getRow(2).height = 22;

    // Blank row 3
    ws.getRow(3).height = 10;

    // Headers Row 4
    const headers = [
      'ক্রমিক', 'অর্ডার আইডি', 'তারিখ ও সময়', 'গ্রাহকের নাম', 'মোবাইল নম্বর',
      'সম্পূর্ণ ঠিকানা', 'ডেলিভারি এরিয়া', 'পণ্যের নাম', 'পরিমাণ', 'একক মূল্য (৳)',
      'সাবটোটাল (৳)', 'ডেলিভারি চার্জ (৳)', 'সর্বমোট প্রদেয় (৳)', 'পেমেন্ট পদ্ধতি', 'অর্ডার স্ট্যাটাস'
    ];
    const headerRow = ws.getRow(4);
    headerRow.values = headers;
    headerRow.height = 30;
    headerRow.eachCell((cell) => {
      cell.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: 'FFFFFFFF' } };
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF107C41' } };
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      cell.border = {
        top: { style: 'thin', color: { argb: 'FF0D5A30' } },
        left: { style: 'thin', color: { argb: 'FF0D5A30' } },
        bottom: { style: 'medium', color: { argb: 'FF093E20' } },
        right: { style: 'thin', color: { argb: 'FF0D5A30' } }
      };
    });

    (orders || []).forEach((o, idx) => {
      const serial = idx + 1;
      const id = o.id || ('#MRZ-' + (1000 + idx));
      const date = o.date || (o.timestamp ? new Date(o.timestamp).toLocaleString('bn-BD') : '');
      const name = o.name || '';
      const phone = o.phone || '';
      const address = (o.address || '').replace(/[\r\n]+/g, ', ');
      const area = o.area || '';
      const product = o.product || '';
      const qty = o.qty || 1;
      const price = o.price || 0;
      const subtotal = o.subtotal || (price * qty);
      const delivery = o.delivery !== undefined ? o.delivery : 60;
      const total = o.total || (subtotal + delivery);
      const payment = o.paymentMethod || 'ক্যাশ অন ডেলিভারি';
      const status = o.status || 'পেন্ডিং';

      const r = ws.addRow([
        serial,
        id,
        date,
        name,
        phone,
        address,
        area,
        product,
        qty,
        price,
        subtotal,
        delivery,
        total,
        payment,
        status
      ]);
      r.height = 24;
      const isEven = idx % 2 === 0;

      r.eachCell((cell, colNum) => {
        cell.font = { name: 'Segoe UI', size: 10.5, color: { argb: 'FF1E293B' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: isEven ? 'FFFFFFFF' : 'FFF8FAFC' }
        };
        cell.border = {
          top: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          left: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          right: { style: 'thin', color: { argb: 'FFE2E8F0' } }
        };

        // Column Alignments
        if ([1, 2, 3, 5, 7, 9, 14, 15].includes(colNum)) {
          cell.alignment = { vertical: 'middle', horizontal: 'center' };
        } else if ([10, 11, 12, 13].includes(colNum)) {
          cell.alignment = { vertical: 'middle', horizontal: 'right' };
          if (colNum === 13) {
            cell.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: 'FF059669' } };
          }
        } else {
          cell.alignment = { vertical: 'middle', horizontal: 'left' };
        }

        // Status badge styling
        if (colNum === 15) {
          const val = String(cell.value);
          if (val === 'কনফার্ম' || val === 'ডেলিভার্ড') {
            cell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: 'FF059669' } };
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFDCFCE7' } };
          } else if (val === 'পেন্ডিং') {
            cell.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: 'FFD97706' } };
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFEF3C7' } };
          }
        }
      });
    });

    // Set column widths
    ws.columns = [
      { width: 8 },  // ক্রমিক
      { width: 14 }, // আইডি
      { width: 22 }, // তারিখ
      { width: 18 }, // নাম
      { width: 16 }, // ফোন
      { width: 28 }, // ঠিকানা
      { width: 16 }, // এরিয়া
      { width: 32 }, // পণ্য
      { width: 10 }, // পরিমাণ
      { width: 14 }, // মূল্য
      { width: 14 }, // সাবটোটাল
      { width: 16 }, // ডেলিভারি
      { width: 18 }, // সর্বমোট
      { width: 18 }, // পেমেন্ট
      { width: 15 }  // স্ট্যাটাস
    ];

    await wb.xlsx.writeFile(EXCEL_XLSX_FILE);
    return true;
  } catch (err) {
    console.error('Error generating ExcelJS file:', err);
    return false;
  }
}

// ── Google Sheets Live Auto-Forwarder ───────────────────────
function forwardToGoogleSheet(order) {
  try {
    const settings = readJsonFile(SETTINGS_FILE, {});
    if (!settings.googleSheetWebhook) return;
    const webhookUrl = settings.googleSheetWebhook.trim();
    if (!webhookUrl.startsWith('http')) return;

    const parsed = new URL(webhookUrl);
    const client = parsed.protocol === 'https:' ? require('https') : require('http');
    const postData = JSON.stringify({
      id: order.id,
      date: order.date,
      name: order.name,
      phone: order.phone,
      address: order.address,
      area: order.area,
      product: order.product,
      qty: order.qty,
      price: order.price,
      subtotal: order.subtotal,
      delivery: order.delivery,
      total: order.total,
      paymentMethod: order.paymentMethod || 'ক্যাশ অন ডেলিভারি',
      status: order.status || 'পেন্ডিং'
    });

    const req = client.request({
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      path: parsed.pathname + parsed.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, res => {
      // response ignored
    });

    req.on('error', err => {
      console.log('Google Sheets forward note:', err.message);
    });
    req.write(postData);
    req.end();
  } catch(e) {
    console.log('Google Sheets forward notice:', e.message);
  }
}

// Initialize files if not exists
readJsonFile(MESSAGES_FILE, []);
const initialOrders = readJsonFile(ORDERS_FILE, []);
readJsonFile(SETTINGS_FILE, { googleSheetWebhook: '' });
// Sync CSV and native XLSX immediately on server start
syncOrdersToCsv(initialOrders);
syncOrdersToXlsx(initialOrders);

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // ── API: Messages ──────────────────────────────────────────
  if (pathname === '/api/messages') {
    if (req.method === 'GET') {
      const msgs = readJsonFile(MESSAGES_FILE, []);
      sendJson(res, 200, msgs);
      return;
    }
    if (req.method === 'POST') {
      const body = await parseBody(req);
      const msgs = readJsonFile(MESSAGES_FILE, []);
      const newMsg = {
        id: body.id || ('#MSG-' + Date.now().toString().slice(-4)),
        date: body.date || new Date().toLocaleString('bn-BD', { dateStyle: 'medium', timeStyle: 'short' }),
        timestamp: body.timestamp || Date.now(),
        name: body.name || 'সম্মানিত ভিজিটর',
        phone: body.phone || '—',
        email: body.email || 'প্রযোজ্য নয়',
        subject: body.subject || 'সাধারণ বার্তা',
        message: body.message || ''
      };
      msgs.unshift(newMsg);
      writeJsonFile(MESSAGES_FILE, msgs);
      sendJson(res, 201, { success: true, message: newMsg });
      return;
    }
  }

  if (pathname === '/api/messages/delete' && req.method === 'POST') {
    const body = await parseBody(req);
    let msgs = readJsonFile(MESSAGES_FILE, []);
    msgs = msgs.filter(m => m.id !== body.id);
    writeJsonFile(MESSAGES_FILE, msgs);
    sendJson(res, 200, { success: true, messages: msgs });
    return;
  }

  if (pathname === '/api/messages/clear' && req.method === 'POST') {
    writeJsonFile(MESSAGES_FILE, []);
    sendJson(res, 200, { success: true });
    return;
  }

  // ── API: Products (Sync with Admin & Storefront) ───────────
  if (pathname === '/api/products') {
    if (req.method === 'GET') {
      const prods = readJsonFile(PRODUCTS_FILE, { custom: [], deleted: [] });
      sendJson(res, 200, prods);
      return;
    }
    if (req.method === 'POST') {
      const body = await parseBody(req);
      const prods = {
        custom: Array.isArray(body.custom) ? body.custom : [],
        deleted: Array.isArray(body.deleted) ? body.deleted : []
      };
      writeJsonFile(PRODUCTS_FILE, prods);
      sendJson(res, 200, { success: true, products: prods });
      return;
    }
  }

  // ── API: Categories ────────────────────────────────────────
  if (pathname === '/api/categories') {
    if (req.method === 'GET') {
      const cats = readJsonFile(CATEGORIES_FILE, []);
      sendJson(res, 200, cats);
      return;
    }
    if (req.method === 'POST') {
      const body = await parseBody(req);
      const cats = Array.isArray(body) ? body : (body.categories || []);
      writeJsonFile(CATEGORIES_FILE, cats);
      sendJson(res, 200, { success: true, categories: cats });
      return;
    }
  }

  // ── API: Orders ────────────────────────────────────────────
  if (pathname === '/api/orders') {
    if (req.method === 'GET') {
      const orders = readJsonFile(ORDERS_FILE, []);
      sendJson(res, 200, orders);
      return;
    }
    if (req.method === 'POST') {
      const body = await parseBody(req);
      const orders = readJsonFile(ORDERS_FILE, []);
      const newOrder = {
        id: body.id || ('#MRZ-' + Date.now().toString().slice(-4)),
        date: body.date || new Date().toLocaleString('bn-BD', { dateStyle: 'medium', timeStyle: 'short' }),
        timestamp: body.timestamp || Date.now(),
        name: body.name || '',
        phone: body.phone || '',
        address: body.address || '',
        area: body.area || '',
        product: body.product || '',
        qty: body.qty || 1,
        price: body.price || 0,
        subtotal: body.subtotal || 0,
        delivery: body.delivery !== undefined ? body.delivery : 60,
        total: body.total || 0,
        paymentMethod: body.paymentMethod || 'ক্যাশ অন ডেলিভারি',
        status: body.status || 'পেন্ডিং'
      };
      orders.unshift(newOrder);
      writeJsonFile(ORDERS_FILE, orders);

      // 1. Automatically update Excel CSV and XLSX spreadsheet files on computer
      syncOrdersToCsv(orders);
      await syncOrdersToXlsx(orders);

      // 2. Automatically forward to Google Sheet if Webhook is configured
      forwardToGoogleSheet(newOrder);

      sendJson(res, 201, { success: true, order: newOrder });
      return;
    }
  }

  if (pathname === '/api/orders/update' && req.method === 'POST') {
    const body = await parseBody(req);
    const orders = readJsonFile(ORDERS_FILE, []);
    const target = orders.find(o => o.id === body.id);
    if (target) {
      if (body.status) target.status = body.status;
      writeJsonFile(ORDERS_FILE, orders);
      syncOrdersToCsv(orders);
      await syncOrdersToXlsx(orders);
    }
    sendJson(res, 200, { success: true, orders });
    return;
  }

  if (pathname === '/api/orders/delete' && req.method === 'POST') {
    const body = await parseBody(req);
    let orders = readJsonFile(ORDERS_FILE, []);
    orders = orders.filter(o => o.id !== body.id);
    writeJsonFile(ORDERS_FILE, orders);
    syncOrdersToCsv(orders);
    await syncOrdersToXlsx(orders);
    sendJson(res, 200, { success: true, orders });
    return;
  }

  // ── API: Daily Orders & Customer Summary ───────────────────
  if (pathname === '/api/orders/daily-summary' && req.method === 'GET') {
    const orders = readJsonFile(ORDERS_FILE, []);
    
    // Group orders by date
    const dayMap = {};
    orders.forEach(o => {
      let dayKey = 'অজ্ঞাত তারিখ';
      if (o.timestamp) {
        const d = new Date(o.timestamp);
        dayKey = d.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });
      } else if (o.date) {
        dayKey = o.date.split(',')[0].trim();
      }
      if (!dayMap[dayKey]) {
        dayMap[dayKey] = { date: dayKey, count: 0, total: 0, pending: 0, confirmed: 0, delivered: 0, customers: [] };
      }
      dayMap[dayKey].count++;
      dayMap[dayKey].total += (o.total || 0);
      if (o.status === 'ডেলিভার্ড') dayMap[dayKey].delivered++;
      else if (o.status === 'কনফার্ম') dayMap[dayKey].confirmed++;
      else dayMap[dayKey].pending++;
      if (o.name && !dayMap[dayKey].customers.includes(o.name)) {
        dayMap[dayKey].customers.push(o.name);
      }
    });

    const dailyList = Object.values(dayMap);
    const totalRevenue = orders.reduce((s, o) => s + (o.total || 0), 0);
    const uniqueCustomers = new Set(orders.map(o => o.phone || o.name)).size;

    sendJson(res, 200, {
      totalOrders: orders.length,
      totalRevenue,
      uniqueCustomers,
      dailyList
    });
    return;
  }

  // ── API: 1-Click Native Microsoft Excel (.XLSX) Download ──
  if ((pathname === '/api/orders/download-excel' || pathname === '/api/orders/download-xlsx') && req.method === 'GET') {
    const orders = readJsonFile(ORDERS_FILE, []);
    await syncOrdersToXlsx(orders);
    syncOrdersToCsv(orders);
    if (!fs.existsSync(EXCEL_XLSX_FILE)) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Excel XLSX file not ready yet');
      return;
    }
    const stat = fs.statSync(EXCEL_XLSX_FILE);
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    res.writeHead(200, {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Length': stat.size,
      'Content-Disposition': `attachment; filename="MIRAZ_Customer_Orders_${dateStr}.xlsx"`,
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(EXCEL_XLSX_FILE).pipe(res);
    return;
  }

  // ── API: CSV Download ──────────────────────────────────────
  if ((pathname === '/api/orders/download-csv' || pathname === '/api/orders/export-csv') && req.method === 'GET') {
    const orders = readJsonFile(ORDERS_FILE, []);
    syncOrdersToCsv(orders);
    if (!fs.existsSync(EXCEL_CSV_FILE)) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Excel CSV file not ready yet');
      return;
    }
    const stat = fs.statSync(EXCEL_CSV_FILE);
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    res.writeHead(200, {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Length': stat.size,
      'Content-Disposition': `attachment; filename="MIRAZ_Orders_CSV_${dateStr}.csv"`,
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(EXCEL_CSV_FILE).pipe(res);
    return;
  }

  // ── API: Settings (Google Sheets Webhook) ───────────────────
  if (pathname === '/api/settings') {
    if (req.method === 'GET') {
      const settings = readJsonFile(SETTINGS_FILE, { googleSheetWebhook: '' });
      sendJson(res, 200, settings);
      return;
    }
    if (req.method === 'POST') {
      const body = await parseBody(req);
      const settings = readJsonFile(SETTINGS_FILE, {});
      if (body.googleSheetWebhook !== undefined) {
        settings.googleSheetWebhook = body.googleSheetWebhook.trim();
      }
      writeJsonFile(SETTINGS_FILE, settings);
      sendJson(res, 200, { success: true, settings });
      return;
    }
  }

  // ── Static Files ───────────────────────────────────────────
  let file = decodeURIComponent(pathname);
  if (file === '/' || file === '') file = '/index.html';
  const filePath = path.join(__dirname, file);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`MIRAZ Store server running with API support on port ${PORT}`);
});
