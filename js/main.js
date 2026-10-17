/* =========================================================
   MIRAZ – main.js v2.0
   Premium E-commerce Interactions
   ========================================================= */
'use strict';

// ── DOM Ready ─────────────────────────────────────────────
  // ── Global Reveal on Scroll ────────────────────────────────
  function observeReveal() {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
  }
  window.observeReveal = observeReveal;

// ── Multi-Language Translation System (বাংলা, English, العربية) ──
const STORE_I18N = {
  bn: {
    topBarDelivery: '৳৫০০+ অর্ডারে ফ্রি ডেলিভারি',
    topBarTagline: '✦ বাংলাদেশের ১ নম্বর লাক্সারি ব্র্যান্ড ✦',
    fbPage: 'ফেসবুক পেজ',
    brandTag: 'LUXURY STORE',
    selectLanguage: 'ভাষা নির্বাচন করুন',
    allCategories: 'সকল ক্যাটাগরি',
    catFragrance: 'সুগন্ধি কালেকশন',
    catPerfume: 'পারফিউম কালেকশন',
    catAttar: 'আতর (Arabian Ittar)',
    catFreshener: 'রুম ফ্রেশনার ও ডিফিউজার',
    catClothing: 'পোশাক ও ফ্যাশন',
    catLadies: 'লেডিস ফ্যাশন (থ্রি-পিস, শাড়ি)',
    catGents: 'জেন্টস পাঞ্জাবি ও পোশাক',
    catKids: 'কিডস কালেকশন',
    catCosmetics: 'কসমেটিক ও বিউটি',
    catMakeup: 'প্রিমিয়াম কসমেটিক',
    catSkincare: 'স্কিনকেয়ার ট্রিটমেন্ট',
    catHaircare: 'হেয়ারকেয়ার প্রোডাক্ট',
    catGifts: 'গিফট ও শোপিস',
    catShowpiece: 'লাক্সারি শোপিস',
    catGiftSet: 'লাক্সারি গিফট বক্স সেট',
    catJewelry: 'এক্সক্লুসিভ জুয়েলারি',
    quickLinks: 'কুইক মেনু',
    navHome: 'হোম পেজ',
    navCategory: 'ক্যাটাগরি',
    navNew: 'নতুন',
    navReels: 'ভিডিও রিলস (শর্ট ভিডিও)',
    navOffers: 'স্পেশাল অফার ও ডিসকাউন্ট',
    navAbout: 'আমাদের সম্পর্কে',
    navContact: 'যোগাযোগ ও হেল্পলাইন',
    drawerHelp: 'প্রয়োজনে সরাসরি যোগাযোগ',
    heroEyebrow1: '✦ আতর ও পারফিউম কালেকশন ✦',
    heroTitleMain1: 'সুগন্ধির',
    heroTitleSub1: 'রাজকীয় জগৎ',
    heroDesc1: 'বিশ্বের সেরা আরবি আতর ও ফরাসি পারফিউম এখন আপনার হাতের কাছে। MIRAZ-এ পাবেন সেরা সংগ্রহ — সুলভ ও সাশ্রয়ী দামে।',
    heroCtaPrimary1: 'আতর ও পারফিউম দেখুন',
    heroCtaGhost1: '৩০% ছাড় পান',
    heroStat1: 'পারফিউম & আতর',
    heroStat2: 'সন্তুষ্ট গ্রাহক',
    heroStat3: 'পজিটিভ রিভিউ',
    searchPlaceholder: 'পারফিউম, আতর, কাপড়, কসমেটিক...',
    toastLangChanged: 'ভাষা পরিবর্তন করা হয়েছে: বাংলা'
  },
  en: {
    topBarDelivery: 'Free Delivery on Orders ৳500+',
    topBarTagline: '✦ Bangladesh\'s #1 Luxury Brand ✦',
    fbPage: 'Facebook Page',
    brandTag: 'LUXURY STORE',
    selectLanguage: 'Select Language',
    allCategories: 'All Categories',
    catFragrance: 'Fragrance Collection',
    catPerfume: 'Perfume Collection',
    catAttar: 'Attar (Arabian Ittar)',
    catFreshener: 'Room Fresheners & Diffusers',
    catClothing: 'Clothing & Fashion',
    catLadies: 'Ladies Fashion (Three-piece, Saree)',
    catGents: 'Men\'s Panjabi & Wear',
    catKids: 'Kids Collection',
    catCosmetics: 'Beauty & Cosmetics',
    catMakeup: 'Premium Cosmetics',
    catSkincare: 'Skincare Treatments',
    catHaircare: 'Haircare Products',
    catGifts: 'Gifts & Showpieces',
    catShowpiece: 'Luxury Showpieces',
    catGiftSet: 'Luxury Gift Box Sets',
    catJewelry: 'Exclusive Jewelry',
    quickLinks: 'Quick Menu',
    navHome: 'Home',
    navCategory: 'Categories',
    navNew: 'New In',
    navReels: 'Video Reels (Shorts)',
    navOffers: 'Special Offers & Discounts',
    navAbout: 'About Us',
    navContact: 'Contact & Helpline',
    drawerHelp: 'Direct Contact & Helpline',
    heroEyebrow1: '✦ Attar & Perfume Collection ✦',
    heroTitleMain1: 'Royal World',
    heroTitleSub1: 'of Fragrance',
    heroDesc1: 'Discover world-class Arabian attars and French perfumes at your fingertips. MIRAZ brings you the finest luxury at affordable prices.',
    heroCtaPrimary1: 'Explore Perfumes',
    heroCtaGhost1: 'Get 30% Off',
    heroStat1: 'Perfumes & Attars',
    heroStat2: 'Happy Customers',
    heroStat3: 'Positive Reviews',
    searchPlaceholder: 'Search perfumes, attars, dresses, cosmetics...',
    toastLangChanged: 'Language switched to English'
  },
  ar: {
    topBarDelivery: 'توصيل مجاني للطلبات فوق 500 تيكا',
    topBarTagline: '✦ العلامة التجارية الفاخرة رقم 1 في بنغلاديش ✦',
    fbPage: 'صفحة فيسبوك',
    brandTag: 'متجر المنتجات الفاخرة',
    selectLanguage: 'اختر اللغة المفضلة',
    allCategories: 'جميع الفئات والأقسام',
    catFragrance: 'تشكيلة العطور والعود',
    catPerfume: 'العطور الفاخرة',
    catAttar: 'دهن العود الملكي والمعتق',
    catFreshener: 'معطرات الجو الفاخرة',
    catClothing: 'الملابس والأزياء الراقية',
    catLadies: 'أزياء نسائية (ساري وثلاث قطع)',
    catGents: 'البنجابي والأزياء الرجالية',
    catKids: 'تشكيلة ملابس الأطفال',
    catCosmetics: 'مستحضرات التجميل والعناية',
    catMakeup: 'مكياج وتجميل فاخر',
    catSkincare: 'منتجات العناية بالبشرة',
    catHaircare: 'منتجات العناية بالشعر',
    catGifts: 'الهدايا والتحف الفاخرة',
    catShowpiece: 'تحف ومجسمات راقية',
    catGiftSet: 'أطقم وبوكسات هدايا فاخرة',
    catJewelry: 'مجوهرات وحلي استثنائية',
    quickLinks: 'القائمة السريعة',
    navHome: 'الرئيسية',
    navCategory: 'الفئات',
    navNew: 'وصل حديثاً',
    navReels: 'ريلز الفيديو المباشر',
    navOffers: 'عروض وتخفيضات حصرية',
    navAbout: 'من نحن',
    navContact: 'اتصل بنا وخدمة العملاء',
    drawerHelp: 'تواصل مباشر مع خدمة العملاء',
    heroEyebrow1: '✦ تشكيلة العطور والعود الملكي ✦',
    heroTitleMain1: 'عالم العطور',
    heroTitleSub1: 'الملكي الفاخر',
    heroDesc1: 'أرقى أنواع دهن العود العربي والعطور الفرنسية العالمية بين يديك الآن. تقدم لك ميراز أفضل تشكيلة بأسعار مميزة وجودة عالية.',
    heroCtaPrimary1: 'استكشف العطور والعود',
    heroCtaGhost1: 'احصل على خصم 30%',
    heroStat1: 'عطور ودهن عود',
    heroStat2: 'عميل سعيد',
    heroStat3: 'تقييمات إيجابية',
    searchPlaceholder: 'ابحث عن العطور، العود، الملابس، مستحضرات التجميل...',
    toastLangChanged: 'تم تغيير اللغة إلى العربية بنجاح'
  }
};

window.setStoreLanguage = function(lang, notify = true) {
  if (!STORE_I18N[lang]) lang = 'bn';
  try {
    localStorage.setItem('miraz_lang', lang);
  } catch(e) {}

  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.classList.add('rtl-mode');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.classList.remove('rtl-mode');
  }

  // Update button active state
  document.querySelectorAll('.lang-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Apply translations to all matching DOM elements
  const dict = STORE_I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Search input placeholder
  const searchInput = document.getElementById('searchInput');
  if (searchInput && dict.searchPlaceholder) {
    searchInput.placeholder = dict.searchPlaceholder;
  }

  // Toast notice
  if (notify && typeof window.showToast === 'function') {
    window.showToast(dict.toastLangChanged, 'success');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language from storage or default bn
  try {
    const savedLang = localStorage.getItem('miraz_lang') || 'bn';
    window.setStoreLanguage(savedLang, false);
  } catch(e) {}

  // ── Preloader ────────────────────────────────────────────
  const hidePreloader = () => {
    const pre = document.getElementById('preloader');
    if (pre) {
      pre.classList.add('gone');
      setTimeout(() => { pre.style.display = 'none'; }, 600);
    }
  };
  hidePreloader();
  window.addEventListener('load', hidePreloader);
  setTimeout(hidePreloader, 400);

  // ── Header Scroll ────────────────────────────────────────
  const header = document.getElementById('header');
  const btt    = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 60);
    btt.classList.toggle('show', y > 400);
  }, { passive: true });

  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ── Mobile Drawer (Top-Level Independent Component) ────────
  const ham         = document.getElementById('hamburger');
  const drawer      = document.getElementById('mobileDrawer') || document.getElementById('mainNav');
  const drawerClose = document.getElementById('drawerClose') || document.getElementById('navClose');
  const overlay     = document.getElementById('mobileOverlay');

  const toggleNav = (open) => {
    const d = document.getElementById('mobileDrawer') || document.getElementById('mainNav');
    const h = document.getElementById('hamburger');
    const o = document.getElementById('mobileOverlay');
    const isOpen = (open !== undefined) ? open : (d ? !d.classList.contains('open') : false);
    if (h) h.classList.toggle('open', isOpen);
    if (d) d.classList.toggle('open', isOpen);
    if (o) o.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  window.closeMobileDrawer = () => toggleNav(false);
  window.openMobileDrawer  = () => toggleNav(true);
  window.toggleMobileDrawer= () => toggleNav();

  if (ham) {
    ham.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleNav();
    });
  }
  if (drawerClose) {
    drawerClose.addEventListener('click', (e) => {
      e.preventDefault();
      toggleNav(false);
    });
  }
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      e.preventDefault();
      toggleNav(false);
    });
  }

  // ── Category Mega Dropdown (Click-to-Toggle & Click-Outside) ──
  const catDropdown = document.getElementById('catNavDropdown') || document.querySelector('.has-dropdown');
  const catTrigger  = document.getElementById('catNavTrigger');

  if (catTrigger && catDropdown) {
    catTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const willOpen = !catDropdown.classList.contains('open');
      catDropdown.classList.toggle('open', willOpen);
      catTrigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  }

  // Close dropdown when clicked outside
  document.addEventListener('click', (e) => {
    if (catDropdown && catDropdown.classList.contains('open')) {
      if (!catDropdown.contains(e.target)) {
        catDropdown.classList.remove('open');
        if (catTrigger) catTrigger.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Close dropdown on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && catDropdown && catDropdown.classList.contains('open')) {
      catDropdown.classList.remove('open');
      if (catTrigger) catTrigger.setAttribute('aria-expanded', 'false');
    }
  });

  // ── Search Overlay ────────────────────────────────────────
  const searchOverlay = document.getElementById('searchOverlay');
  const searchToggle  = document.getElementById('searchToggle');
  const closeSearch   = document.getElementById('closeSearch');
  const searchInput   = document.getElementById('searchInput');

  const openSearch = () => {
    searchOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput?.focus(), 200);
  };
  const closeSearchFn = () => {
    searchOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };
  searchToggle?.addEventListener('click', openSearch);
  closeSearch?.addEventListener('click', closeSearchFn);
  searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearchFn();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearchFn();
  });

  // Search tags
  document.querySelectorAll('.search-tags span').forEach(tag => {
    tag.addEventListener('click', () => {
      if (searchInput) searchInput.value = tag.textContent;
      searchInput?.focus();
    });
  });

  // ── Hero Slider ───────────────────────────────────────────
  const slides   = document.querySelectorAll('.hero-slide');
  const dots     = document.querySelectorAll('.snav-dot');
  let   current  = 0;
  let   timer;

  const goTo = (n) => {
    if (!slides.length) return; // guard: no hero slides in DOM
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  };
  const nextSlide = () => goTo(current + 1);
  const prevSlide = () => goTo(current - 1);
  const startTimer = () => {
    if (!slides.length) return; // guard: skip timer if no slides
    clearInterval(timer);
    timer = setInterval(nextSlide, 5500);
  };

  document.getElementById('heroNext')?.addEventListener('click', () => { nextSlide(); startTimer(); });
  document.getElementById('heroPrev')?.addEventListener('click', () => { prevSlide(); startTimer(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.i); startTimer(); }));
  startTimer();

  // ── Products Data (Synced with Admin Panel) ───────────────
  const defaultProducts = [
    // ════════════ 1. সুগন্ধি ও পারফিউম ════════════
    {
      id: 1,
      name: 'MIRAZ Royal Collection - Extrait De Parfum',
      cat: 'perfume',
      subcat: 'perfume',
      price: 4200,
      old: 5500,
      badge: 'sale',
      image: 'images/perfume-royal-1.jpg',
      rating: 5.0,
      reviews: 184
    },
    {
      id: 2,
      name: 'MIRAZ The Edge - Extrait De Parfum',
      cat: 'perfume',
      subcat: 'perfume',
      price: 3800,
      old: 4800,
      badge: 'hot',
      image: 'images/perfume-the-edge.jpg',
      rating: 4.9,
      reviews: 142
    },
    {
      id: 3,
      name: 'MIRAZ The Edge of Night',
      cat: 'perfume',
      subcat: 'perfume',
      price: 3900,
      old: 4900,
      badge: 'new',
      image: 'images/perfume-edge-night.jpg',
      rating: 5.0,
      reviews: 96
    },
    {
      id: 4,
      name: 'MIRAZ Marble Reserve - Royal Oud',
      cat: 'perfume',
      subcat: 'perfume',
      price: 4500,
      old: 6000,
      badge: 'sale',
      image: 'images/perfume-royal-marble.jpg',
      rating: 5.0,
      reviews: 118
    },
    {
      id: 5,
      name: 'MIRAZ Waterfall Bloom - Royal Extrait',
      cat: 'perfume',
      subcat: 'perfume',
      price: 4300,
      old: 5200,
      badge: 'new',
      image: 'images/perfume-royal-waterfall.jpg',
      rating: 4.9,
      reviews: 82
    },
    // ════════════ 2. খাঁটি আতর কালেকশন (৬টি এক্সক্লুসিভ আতর) ════════════
    {
      id: 11,
      name: 'MIRAZ অ্যারাবিয়ান রয়েল উদ আতর (১২মিলি)',
      cat: 'perfume',
      subcat: 'attar',
      price: 1850,
      old: 2200,
      badge: 'royal',
      image: 'images/attar-1-royal-oud.jpg',
      rating: 5.0,
      reviews: 94
    },
    {
      id: 12,
      name: 'MIRAZ জান্নাতুল ফিরদাউস প্রিমিয়াম আতর (১২মিলি)',
      cat: 'perfume',
      subcat: 'attar',
      price: 1450,
      old: 1800,
      badge: 'hot',
      image: 'images/attar-4-jannat-firdaus.jpg',
      rating: 4.9,
      reviews: 73
    },
    {
      id: 31,
      name: 'MIRAZ রয়েল হোয়াইট উদ ও আম্বার আতর',
      cat: 'perfume',
      subcat: 'attar',
      price: 2100,
      old: 2600,
      badge: 'royal',
      image: 'images/attar-2-white-oud.jpg',
      rating: 5.0,
      reviews: 68
    },
    {
      id: 32,
      name: 'MIRAZ তায়েফি খাঁটি গোলাপ আতর (১২মিলি)',
      cat: 'perfume',
      subcat: 'attar',
      price: 1650,
      old: 2100,
      badge: 'new',
      image: 'images/attar-3-taif-rose.jpg',
      rating: 4.9,
      reviews: 82
    },
    {
      id: 33,
      name: 'MIRAZ কাশ্মীরি কস্তূরী ব্ল্যাক মাস্ক আতর',
      cat: 'perfume',
      subcat: 'attar',
      price: 1950,
      old: 2400,
      badge: 'hot',
      image: 'images/attar-5-kasturi.jpg',
      rating: 5.0,
      reviews: 57
    },
    {
      id: 34,
      name: 'MIRAZ মুখাল্লাত আল-খলিজ লাক্সারি আতর',
      cat: 'perfume',
      subcat: 'attar',
      price: 1750,
      old: 2250,
      badge: 'royal',
      image: 'images/attar-6-mukhallat.jpg',
      rating: 4.8,
      reviews: 64
    },
    // ════════════ 3. এয়ার ও রুম ফ্রেশনার স্প্রে কালেকশন ════════════
    {
      id: 13,
      name: 'MIRAZ রোজ অ্যান্ড বেরি লাক্সারি রুম ফ্রেশনার স্প্রে',
      cat: 'perfume',
      subcat: 'freshener',
      price: 850,
      old: 1100,
      badge: 'new',
      image: 'images/freshener-1-mist.jpg',
      rating: 4.8,
      reviews: 58
    },
    {
      id: 14,
      name: 'MIRAZ ওশান প্যারাডাইস ফ্রেশ এয়ার রুম স্প্রে',
      cat: 'perfume',
      subcat: 'freshener',
      price: 890,
      old: 1150,
      badge: 'hot',
      image: 'images/freshener-2-ocean.jpg',
      rating: 4.9,
      reviews: 62
    },
    {
      id: 35,
      name: 'MIRAZ ভায়োলেট ও ল্যাভেন্ডার রিল্যাক্সিং রুম মিস্ট',
      cat: 'perfume',
      subcat: 'freshener',
      price: 920,
      old: 1200,
      badge: 'sale',
      image: 'images/freshener-3-lavender.jpg',
      rating: 4.9,
      reviews: 46
    },
    // ════════════ 3. লেডিস ফ্যাশন (থ্রি-পিস, শাড়ি, লেহেঙ্গা) ════════════
    {
      id: 6,
      name: 'MIRAZ এক্সক্লুসিভ জর্জেট এমব্রয়ডারি থ্রি-পিস',
      cat: 'ladies',
      subcat: 'ladies',
      price: 3600,
      old: 4500,
      badge: 'hot',
      image: 'images/clothing-threepiece-silk.jpg',
      rating: 4.9,
      reviews: 112
    },
    {
      id: 7,
      name: 'MIRAZ প্রিমিয়াম বেনারসি কাতান শাড়ি',
      cat: 'ladies',
      subcat: 'ladies',
      price: 5800,
      old: 7500,
      badge: 'royal',
      image: 'images/clothing-saree-katan.jpg',
      rating: 5.0,
      reviews: 89
    },
    {
      id: 8,
      name: 'MIRAZ ডিজাইনার ব্রাইডাল পার্টি লেহেঙ্গা',
      cat: 'ladies',
      subcat: 'ladies',
      price: 8500,
      old: 11000,
      badge: 'royal',
      image: 'images/clothing-lehenga-party.jpg',
      rating: 5.0,
      reviews: 64
    },
    {
      id: 9,
      name: 'MIRAZ প্রিমিয়াম কটন কুর্তি ও পালাজো সেট',
      cat: 'ladies',
      subcat: 'ladies',
      price: 2400,
      old: 3000,
      badge: 'new',
      image: 'images/clothing-kurti-cotton.jpg',
      rating: 4.8,
      reviews: 57
    },
    // ════════════ 4. জেন্টস পোশাক ও কিডস কালেকশন ════════════
    {
      id: 15,
      name: 'MIRAZ রয়েল জেন্টস কাবলি পাঞ্জাবি সেট',
      cat: 'clothing',
      subcat: 'gents',
      price: 3800,
      old: 4800,
      badge: 'hot',
      image: 'images/clothing-panjabi-royal.jpg',
      rating: 4.9,
      reviews: 135
    },
    {
      id: 16,
      name: 'MIRAZ প্রিমিয়াম সেমি-লং সুতি পাঞ্জাবি',
      cat: 'clothing',
      subcat: 'gents',
      price: 2600,
      old: 3200,
      badge: 'sale',
      image: 'images/clothing-panjabi-semilong.jpg',
      rating: 4.8,
      reviews: 98
    },
    {
      id: 17,
      name: 'MIRAZ এক্সক্লুসিভ লাক্সারি ফরমাল শার্ট',
      cat: 'clothing',
      subcat: 'gents',
      price: 1950,
      old: 2500,
      badge: 'new',
      image: 'images/clothing-gents-shirt.jpg',
      rating: 4.8,
      reviews: 68
    },
    {
      id: 18,
      name: 'MIRAZ কিডস ফেস্টিভ্যাল পার্টি ফ্রক',
      cat: 'clothing',
      subcat: 'kids',
      price: 1650,
      old: 2100,
      badge: 'new',
      image: 'images/clothing-kids-party.jpg',
      rating: 4.9,
      reviews: 42
    },
    {
      id: 19,
      name: 'MIRAZ কিডস প্রিন্স পাঞ্জাবি ও পায়জামা সেট',
      cat: 'clothing',
      subcat: 'kids',
      price: 1550,
      old: 1950,
      badge: 'hot',
      image: 'images/clothing-kids-kurta.jpg',
      rating: 4.9,
      reviews: 39
    },
    // ════════════ 5. কসমেটিক ও স্কিনকেয়ার ════════════
    {
      id: 20,
      name: 'ম্যাট ভেলভেট লিপস্টিক গিফট বক্স (১২ শেডস)',
      cat: 'cosmetics',
      subcat: 'cosmetics',
      price: 1450,
      old: 1850,
      badge: 'hot',
      image: 'images/cosmetics-lipstick-set.jpg',
      rating: 4.9,
      reviews: 176
    },
    {
      id: 21,
      name: 'লাক্সারি গোল্ডেন আইশ্যাডো প্যালেট কালেকশন',
      cat: 'cosmetics',
      subcat: 'cosmetics',
      price: 1350,
      old: 1700,
      badge: 'new',
      image: 'images/cosmetics-eyeshadow.jpg',
      rating: 4.8,
      reviews: 84
    },
    {
      id: 22,
      name: 'ভিটামিন সি গ্লো ফেস সিরাম ও ক্রিম সেট',
      cat: 'cosmetics',
      subcat: 'skincare',
      price: 1150,
      old: 1500,
      badge: 'hot',
      image: 'images/cosmetics-face-serum.jpg',
      rating: 4.9,
      reviews: 210
    },
    {
      id: 23,
      name: 'অ্যালোভেরা ডিপ হাইড্রেটিং স্কিন টোনার',
      cat: 'cosmetics',
      subcat: 'skincare',
      price: 750,
      old: 950,
      badge: 'new',
      image: 'images/cosmetics-toner.jpg',
      rating: 4.8,
      reviews: 65
    },
    {
      id: 24,
      name: 'হারবাল অ্যান্টি-হেয়ারফল গ্রোথ সিরাম ও অয়েল',
      cat: 'cosmetics',
      subcat: 'haircare',
      price: 1250,
      old: 1600,
      badge: 'sale',
      image: 'images/cosmetics-hair-serum.jpg',
      rating: 4.9,
      reviews: 128
    },
    // ════════════ 6. শোপিস, গিফট ও জুয়েলারি ════════════
    {
      id: 25,
      name: 'ক্রিস্টাল গোল্ডেন ফুলদানি লাক্সারি শোপিস',
      cat: 'showpiece',
      subcat: 'showpiece',
      price: 2200,
      old: 2800,
      badge: 'new',
      image: 'images/showpiece-crystal-vase.jpg',
      rating: 4.8,
      reviews: 45
    },
    {
      id: 26,
      name: 'গোল্ডেন রয়েল পিকক আর্ট লাক্সারি শোপিস',
      cat: 'showpiece',
      subcat: 'showpiece',
      price: 2850,
      old: 3600,
      badge: 'royal',
      image: 'images/showpiece-golden-peacock.jpg',
      rating: 5.0,
      reviews: 52
    },
    {
      id: 27,
      name: 'MIRAZ সিগনেচার পারফিউম কম্বো গিফট বক্স',
      cat: 'showpiece',
      subcat: 'gift',
      price: 5200,
      old: 6800,
      badge: 'hot',
      image: 'images/gift-perfume-box.jpg',
      rating: 5.0,
      reviews: 134
    },
    {
      id: 28,
      name: 'প্রিমিয়াম গোল্ড-প্লেটেড কুন্দন নেকলেস সেট',
      cat: 'showpiece',
      subcat: 'jewelry',
      price: 3600,
      old: 4800,
      badge: 'sale',
      image: 'images/jewelry-kundan-set.jpg',
      rating: 4.9,
      reviews: 78
    },
    {
      id: 29,
      name: 'রয়েল সলিটায়ার ডায়মন্ড ক্রিস্টাল রিং',
      cat: 'showpiece',
      subcat: 'jewelry',
      price: 1850,
      old: 2400,
      badge: 'new',
      image: 'images/jewelry-diamond-ring.jpg',
      rating: 4.9,
      reviews: 62
    },
    {
      id: 30,
      name: 'ট্রেডিশনাল গোল্ড-প্লেটেড ঝুমকা ইয়াররিংস',
      cat: 'showpiece',
      subcat: 'jewelry',
      price: 1450,
      old: 1900,
      badge: 'hot',
      image: 'images/jewelry-earrings-gold.jpg',
      rating: 4.8,
      reviews: 91
    }
  ];

  window.getMergedProducts = () => {
    const custom = JSON.parse(localStorage.getItem('miraz_custom_products') || '[]');
    const deleted = JSON.parse(localStorage.getItem('miraz_deleted_product_ids') || '[]');
    const base = defaultProducts.filter(p => !deleted.includes(p.id));
    return [...custom, ...base];
  };

  let products = window.getMergedProducts();

  // Live server sync for products added/removed in Admin Panel
  (async function syncProductsFromBackend() {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        if (data && (Array.isArray(data.custom) || Array.isArray(data.deleted))) {
          if (Array.isArray(data.custom)) localStorage.setItem('miraz_custom_products', JSON.stringify(data.custom));
          if (Array.isArray(data.deleted)) localStorage.setItem('miraz_deleted_product_ids', JSON.stringify(data.deleted));
          products = window.getMergedProducts();
          if (typeof renderProducts === 'function') renderProducts();
        }
      }
    } catch(e) {}
  })();

  const catLabels = {
    perfume: 'পারফিউম',
    attar: 'আতর',
    freshener: 'রুম ফ্রেশনার',
    ladies: 'লেডিস ফ্যাশন',
    clothing: 'পোশাক',
    gents: 'জেন্টস পোশাক',
    kids: 'কিডস কালেকশন',
    cosmetics: 'কসমেটিক',
    skincare: 'স্কিনকেয়ার',
    haircare: 'হেয়ারকেয়ার',
    showpiece: 'শোপিস',
    gift: 'গিফট সেট',
    jewelry: 'জুয়েলারি'
  };

  // Merge custom categories added by admin
  const loadCustomCatsIntoLabels = () => {
    try {
      const customCats = JSON.parse(localStorage.getItem('miraz_custom_categories') || '[]');
      customCats.forEach(c => {
        if (c.id && c.name) catLabels[c.id] = c.name;
      });
      return customCats;
    } catch(e) { return []; }
  };
  const activeCustomCats = loadCustomCatsIntoLabels();

  const badgeLabels = { sale: 'সেল', new: 'নতুন', hot: 'হট', royal: 'রয়্যাল' };

  const renderProducts = (filter = 'all', displayName = '') => {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    products = window.getMergedProducts();

    let list = [];
    if (filter === 'all') {
      list = products;
    } else {
      list = products.filter(p => {
        if (p.subcat === filter || p.cat === filter) return true;
        if (filter === 'perfume' && (p.cat === 'perfume' || ['perfume', 'attar', 'freshener'].includes(p.subcat))) return true;
        if (filter === 'ladies' && (p.cat === 'ladies' || p.subcat === 'ladies')) return true;
        if (filter === 'clothing' && (p.cat === 'clothing' || ['clothing', 'gents', 'kids'].includes(p.subcat))) return true;
        if (filter === 'cosmetics' && (p.cat === 'cosmetics' || ['cosmetics', 'skincare', 'haircare'].includes(p.subcat))) return true;
        if (filter === 'showpiece' && (p.cat === 'showpiece' || ['showpiece', 'gift', 'jewelry'].includes(p.subcat))) return true;
        return false;
      });
      if (list.length === 0) {
        list = products.filter(p => p.cat === filter);
      }
      if (list.length === 0) {
        list = products;
      }
    }

    grid.innerHTML = list.map(p => `
      <div class="pcard visible">
        <div class="pcard-img">
          ${p.image ? `
            <img src="${p.image}" alt="${p.name}" class="pcard-real-img" onclick="openQuickView(${p.id})"/>
          ` : `
            <div class="pcard-placeholder" style="background:${p.bg || '#17172b'}" onclick="openQuickView(${p.id})">
              <span class="pcard-emoji">${p.emoji || '✨'}</span>
              <span class="pcard-brand">MIRAZ</span>
            </div>
          `}
          ${p.badge ? `<span class="pcard-badge badge-${p.badge}">${badgeLabels[p.badge] || p.badge.toUpperCase()}</span>` : ''}
          <div class="pcard-actions">
            <button class="pcard-action" title="উইশলিস্ট" onclick="showToast('❤️ উইশলিস্টে যুক্ত হয়েছে!', 't-success')"><i class="fas fa-heart"></i></button>
            <button class="pcard-action" title="🔍 কুইক ভিউ" onclick="openQuickView(${p.id})"><i class="fas fa-eye"></i></button>
          </div>
        </div>
        <div class="pcard-info">
          <div class="pcard-cat">${catLabels[p.subcat] || catLabels[p.cat] || p.cat}</div>
          <div class="pcard-name" onclick="openQuickView(${p.id})" style="cursor:pointer;">${p.name}</div>
          <div class="pcard-rating">
            <span class="pcard-stars">${'★'.repeat(Math.round(p.rating || 5))}${'☆'.repeat(5 - Math.round(p.rating || 5))}</span>
            <span>${p.rating || '৫.০'} (${p.reviews || 48} রিভিউ)</span>
          </div>
          <div class="pcard-row">
            <div class="pcard-price">
              <strong>৳${p.price.toLocaleString('bn-BD')}</strong>
              ${p.old ? `<s>৳${p.old.toLocaleString('bn-BD')}</s>` : ''}
            </div>
            <button class="pcard-cart" onclick="addToCart(${p.id})" title="কার্টে যোগ করুন">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div class="pcard-quick-actions">
            <button class="btn-pcard-instant" onclick="openInstantOrder(${p.id})">
              <i class="fas fa-bolt"></i> ⚡ সরাসরি অর্ডার করুন
            </button>
            <button class="btn-pcard-wa" onclick="orderProductWhatsApp(${p.id})" title="WhatsApp-এ অর্ডার করুন">
              <i class="fab fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
    observeReveal();
  };

  window.filterProductsFromNav = (filterKey, displayName = '') => {
    // 0. Close mobile nav and mega dropdown if open
    if (typeof window.closeMobileDrawer === 'function') {
      window.closeMobileDrawer();
    }
    const mDrawer = document.getElementById('mobileDrawer');
    const mNav = document.getElementById('mainNav');
    const mOver = document.getElementById('mobileOverlay');
    const ham = document.getElementById('hamburger');
    if (mDrawer) mDrawer.classList.remove('open');
    if (mNav) mNav.classList.remove('open');
    if (mOver) mOver.classList.remove('active');
    if (ham) ham.classList.remove('open');
    document.body.style.overflow = '';
    const cDropdown = document.getElementById('catNavDropdown') || document.querySelector('.has-dropdown');
    if (cDropdown) {
      cDropdown.classList.remove('open');
      const cTrig = document.getElementById('catNavTrigger');
      if (cTrig) cTrig.setAttribute('aria-expanded', 'false');
    }

    // 1. Smooth scroll to products section
    const target = document.getElementById('new');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // 2. Determine parent filter tab mapping
    let parentTab = filterKey;
    if (['perfume', 'attar', 'freshener'].includes(filterKey)) parentTab = 'perfume';
    else if (['ladies'].includes(filterKey)) parentTab = 'ladies';
    else if (['clothing', 'gents', 'kids'].includes(filterKey)) parentTab = 'clothing';
    else if (['cosmetics', 'skincare', 'haircare'].includes(filterKey)) parentTab = 'cosmetics';
    else if (['showpiece', 'gift', 'jewelry'].includes(filterKey)) parentTab = 'showpiece';

    // 3. Highlight corresponding tab
    document.querySelectorAll('.ftab').forEach(t => {
      if (t.dataset.filter === parentTab || (filterKey === 'all' && t.dataset.filter === 'all')) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    // 4. Update section tag & title
    const prodSecTag = document.getElementById('prodSecTag');
    const prodSecTitle = document.getElementById('prodSecTitle');
    const prodSecDesc = document.getElementById('prodSecDesc');

    if (prodSecTag) {
      prodSecTag.innerHTML = filterKey === 'all' ? 'বেস্টসেলার' : `✨ ফিল্টার: ${displayName || filterKey}`;
    }
    if (prodSecTitle && displayName && filterKey !== 'all') {
      prodSecTitle.innerHTML = `${displayName} <em>কালেকশন</em>`;
    } else if (prodSecTitle) {
      prodSecTitle.innerHTML = `সবচেয়ে বেশি <em>পছন্দের পণ্য</em>`;
    }
    if (prodSecDesc) {
      prodSecDesc.innerHTML = filterKey === 'all'
        ? 'MIRAZ-এর প্রিমিয়াম কোয়ালিটি লাইফস্টাইল পণ্য কালেকশন'
        : `"${displayName}" ক্যাটাগরির বাছাইকৃত পণ্যসমূহ নিচে প্রদর্শিত হচ্ছে`;
    }

    // 5. Render products
    renderProducts(filterKey, displayName);

    // 6. Show toast notification
    if (displayName && typeof showToast === 'function') {
      showToast(`📁 "${displayName}" ক্যাটাগরির প্রোডাক্ট লোড হয়েছে`, 't-gold');
    }
  };

  // ── Render Signature Showcase Box ─────────────────────────
  const defaultShowcase = {
    tag: '👑 প্রধান কালেকশন',
    title: 'আতর ও পারফিউম',
    desc: 'বিশ্বের সেরা আরবি আতর, উদ ও ফরাসি পারফিউম — MIRAZ-এর সিগনেচার কালেকশন। দীর্ঘস্থায়ী সুগন্ধ, অসাধারণ প্যাকেজিং।',
    features: ['১০০% অরিজিনাল', 'দীর্ঘস্থায়ী', 'হালাল সার্টিফাইড'],
    btnText: 'পারফিউম কালেকশন দেখুন',
    productIds: [1, 2, 3, 4]
  };

  window.renderSignatureShowcase = function() {
    let sc = defaultShowcase;
    try {
      const stored = JSON.parse(localStorage.getItem('miraz_signature_showcase') || 'null');
      if (stored) sc = { ...defaultShowcase, ...stored };
    } catch(e) {}

    const tagEl = document.getElementById('pfbTag');
    const titleEl = document.getElementById('pfbTitle');
    const descEl = document.getElementById('pfbDesc');
    const featEl = document.getElementById('pfbFeatures');
    const btnTextEl = document.getElementById('pfbBtnText');
    const gridEl = document.getElementById('pfbProductsGrid');

    if (tagEl) tagEl.innerHTML = `<i class="fas fa-crown"></i> <span>${sc.tag || 'প্রধান কালেকশন'}</span>`;
    if (titleEl) titleEl.textContent = sc.title || 'আতর ও পারফিউম';
    if (descEl) descEl.textContent = sc.desc || '';
    if (btnTextEl) btnTextEl.textContent = sc.btnText || 'পারফিউম কালেকশন দেখুন';

    if (featEl && Array.isArray(sc.features)) {
      featEl.innerHTML = sc.features.map(f => `<span><i class="fas fa-check-circle"></i> ${f.trim()}</span>`).join('');
    }

    if (gridEl && Array.isArray(sc.productIds)) {
      const allProds = window.getMergedProducts ? window.getMergedProducts() : [];
      const cardsHtml = sc.productIds.map(pid => {
        const p = allProds.find(item => String(item.id) === String(pid));
        if (!p) return '';
        return `
          <div class="pfb-prod-card" onclick="openQuickView(${p.id})" style="cursor:pointer;" title="${p.name} - বিস্তারিত দেখুন">
            <div class="pfpp">
              <img src="${p.image}" alt="${p.name}"/>
            </div>
            <span>${p.name}</span>
            <strong>৳${p.price.toLocaleString('bn-BD')}</strong>
          </div>
        `;
      }).filter(Boolean).join('');

      if (cardsHtml) {
        gridEl.innerHTML = cardsHtml;
      }
    }
  };

  renderProducts();
  window.renderSignatureShowcase();

  // ── 🔄 Dynamic 4-Card Category & Products Showcase (30-Second Rotation) ──
  window.initCatCardShowcase = function() {
    const grid = document.getElementById('catsGrid');
    if (!grid) return;

    const getCatMeta = (p) => {
      const cat = (p.cat || '').toLowerCase();
      const subcat = (p.subcat || '').toLowerCase();

      if (cat === 'ladies' || subcat === 'ladies') {
        return {
          catKey: 'ladies',
          catTitle: 'লেডিস ফ্যাশন',
          icon: 'fas fa-person-dress',
          themeClass: 'cat-ladies'
        };
      }
      if (cat === 'clothing' || ['gents', 'clothing'].includes(subcat)) {
        return {
          catKey: 'clothing',
          catTitle: subcat === 'kids' ? 'কিডস কালেকশন' : 'ছেলেদের পোশাক',
          icon: subcat === 'kids' ? 'fas fa-child' : 'fas fa-vest',
          themeClass: 'cat-clothing'
        };
      }
      if (cat === 'cosmetics' || ['skincare', 'haircare', 'cosmetics'].includes(subcat)) {
        return {
          catKey: 'cosmetics',
          catTitle: subcat === 'skincare' ? 'স্কিনকেয়ার ট্রিটমেন্ট' : (subcat === 'haircare' ? 'হেয়ারকেয়ার' : 'কসমেটিক ও স্কিনকেয়ার'),
          icon: subcat === 'skincare' ? 'fas fa-spa' : 'fas fa-wand-sparkles',
          themeClass: 'cat-cosmetics'
        };
      }
      if (cat === 'showpiece' || ['gift', 'jewelry', 'showpiece'].includes(subcat)) {
        return {
          catKey: 'showpiece',
          catTitle: subcat === 'jewelry' ? 'এক্সক্লুসিভ জুয়েলারি' : (subcat === 'gift' ? 'লাক্সারি গিফট সেট' : 'শোপিস & লাক্সারি গিফট'),
          icon: subcat === 'jewelry' ? 'fas fa-ring' : 'fas fa-gem',
          themeClass: 'cat-showpiece'
        };
      }
      if (cat === 'perfume' || ['attar', 'freshener', 'perfume'].includes(subcat)) {
        return {
          catKey: 'perfume',
          catTitle: subcat === 'attar' ? 'খাঁটি আতর কালেকশন' : (subcat === 'freshener' ? 'রুম ফ্রেশনার স্প্রে' : 'আতর ও পারফিউম'),
          icon: subcat === 'attar' ? 'fas fa-bottle-droplet' : (subcat === 'freshener' ? 'fas fa-wind' : 'fas fa-spray-can-sparkles'),
          themeClass: 'cat-perfume'
        };
      }
      return {
        catKey: cat || 'all',
        catTitle: 'প্রিমিয়াম কালেকশন',
        icon: 'fas fa-crown',
        themeClass: 'cat-perfume'
      };
    };

    const buildShowcaseItems = () => {
      const allProds = (typeof window.getMergedProducts === 'function') 
        ? window.getMergedProducts() 
        : (window.products || []);
      if (!allProds || allProds.length === 0) return [];

      // Initial batch matches the screenshot, followed by all remaining products
      const pSaree = allProds.find(p => p.id === 7 || p.id === 6) || allProds[0];
      const pPanjabi = allProds.find(p => p.id === 15 || p.id === 16) || allProds[1];
      const pEyeshadow = allProds.find(p => p.id === 21 || p.id === 20) || allProds[2];
      const pPeacock = allProds.find(p => p.id === 26 || p.id === 25) || allProds[3];

      const initialBatch = [pSaree, pPanjabi, pEyeshadow, pPeacock].filter(Boolean);
      const usedIds = new Set(initialBatch.map(p => p.id));
      const remainingProds = allProds.filter(p => !usedIds.has(p.id));

      const fullList = [...initialBatch, ...remainingProds];
      return fullList.map(p => {
        const meta = getCatMeta(p);
        return {
          id: p.id,
          name: p.name,
          price: p.price,
          image: p.image || 'images/logo-full.jpg',
          catKey: meta.catKey,
          catTitle: meta.catTitle,
          icon: meta.icon,
          themeClass: meta.themeClass
        };
      });
    };

    let items = buildShowcaseItems();
    if (items.length < 4) return;

    const itemsPerSlice = 4;
    const totalSlices = Math.ceil(items.length / itemsPerSlice);
    let currentSlice = 0;
    let rotateTimer = null;

    const renderSlice = (sliceIdx) => {
      items = buildShowcaseItems();
      const start = (sliceIdx * itemsPerSlice) % items.length;
      const slice = [];
      for (let i = 0; i < itemsPerSlice; i++) {
        slice.push(items[(start + i) % items.length]);
      }

      grid.innerHTML = slice.map(item => `
        <div class="cat-card-v2 ${item.themeClass}" onclick="if(window.openQuickView){openQuickView(${item.id});}" style="cursor:pointer;" title="${item.name} — ক্লিক করে বিস্তারিত দেখুন">
          <div class="cat-bg-layer" style="background: linear-gradient(180deg, rgba(13, 13, 24, 0.15) 0%, rgba(13, 13, 24, 0.55) 50%, rgba(10, 10, 20, 0.95) 100%), url('${item.image}') center/cover no-repeat;"></div>
          <div class="cat-content">
            <div class="cat-icon-v2"><i class="${item.icon}"></i></div>
            <h3>${item.catTitle}</h3>
            <p>${item.name} <strong style="color:var(--gold-light); display:inline-block; margin-left:4px;">৳${(item.price || 0).toLocaleString('bn-BD')}</strong></p>
            <div class="cat-cta" onclick="event.stopPropagation(); if(window.filterProductsFromNav){filterProductsFromNav('${item.catKey}', '${item.catTitle}');}">কালেকশন দেখুন <i class="fas fa-arrow-right"></i></div>
          </div>
          <div class="cat-glow"></div>
        </div>
      `).join('');

      if (typeof window.observeReveal === 'function') {
        window.observeReveal();
      }
    };

    const nextSlice = () => {
      const cards = grid.querySelectorAll('.cat-card-v2');
      cards.forEach(c => c.classList.add('slice-fading'));

      setTimeout(() => {
        currentSlice = (currentSlice + 1) % totalSlices;
        renderSlice(currentSlice);
        setTimeout(() => {
          const newCards = grid.querySelectorAll('.cat-card-v2');
          newCards.forEach(c => c.classList.remove('slice-fading'));
        }, 50);
      }, 500);
    };

    const startTimer = () => {
      if (rotateTimer) clearInterval(rotateTimer);
      rotateTimer = setInterval(nextSlice, 30000); // 30-second interval
    };

    grid.addEventListener('mouseenter', () => {
      if (rotateTimer) clearInterval(rotateTimer);
    });
    grid.addEventListener('mouseleave', () => {
      startTimer();
    });

    startTimer();
  };

  window.initCatCardShowcase();
  const fTabsWrap = document.querySelector('.filter-tabs');
  if (fTabsWrap && activeCustomCats.length > 0) {
    activeCustomCats.forEach(c => {
      if (!fTabsWrap.querySelector(`[data-filter="${c.id}"]`)) {
        const btn = document.createElement('button');
        btn.className = 'ftab';
        btn.dataset.filter = c.id;
        btn.innerHTML = `<i class="${c.icon || 'fas fa-tag'}"></i> ${c.name}`;
        fTabsWrap.appendChild(btn);
      }
    });
  }

  document.querySelectorAll('.ftab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      renderProducts(this.dataset.filter, this.textContent.trim());
    });
  });

  // ── New Arrivals ──────────────────────────────────────────
  const arrivals = [
    {
      name: 'MIRAZ The Edge of Night (Extrait)',
      price: 3900,
      image: 'images/perfume-edge-night.jpg',
      badge: 'নতুন'
    },
    {
      name: 'MIRAZ এক্সক্লুসিভ জর্জেট এমব্রয়ডারি থ্রি-পিস',
      price: 3600,
      image: 'images/clothing-threepiece-silk.jpg',
      badge: 'হট'
    },
    {
      name: 'MIRAZ রয়েল জেন্টস কাবলি পাঞ্জাবি সেট',
      price: 3800,
      image: 'images/clothing-panjabi-royal.jpg',
      badge: 'রয়্যাল'
    },
    {
      name: 'প্রিমিয়াম গোল্ড-প্লেটেড কুন্দন নেকলেস সেট',
      price: 3600,
      image: 'images/jewelry-kundan-set.jpg',
      badge: 'নতুন'
    }
  ];
  const arrivalsGrid = document.getElementById('arrivalsGrid');
  if (arrivalsGrid) {
    arrivalsGrid.innerHTML = arrivals.map(p => `
      <div class="pcard reveal">
        <div class="pcard-img">
          <img src="${p.image}" alt="${p.name}" class="pcard-real-img" onclick="openQuickViewByName('${p.name}', ${p.price}, '${p.image}')"/>
          <span class="pcard-badge badge-new">${p.badge}</span>
          <div class="pcard-actions">
            <button class="pcard-action" title="🔍 কুইক ভিউ" onclick="openQuickViewByName('${p.name}', ${p.price}, '${p.image}')"><i class="fas fa-eye"></i></button>
          </div>
        </div>
        <div class="pcard-info">
          <div class="pcard-name" onclick="openQuickViewByName('${p.name}', ${p.price}, '${p.image}')" style="cursor:pointer;">${p.name}</div>
          <div class="pcard-row">
            <div class="pcard-price"><strong>৳${p.price.toLocaleString('bn-BD')}</strong></div>
            <button class="pcard-cart" onclick="addToCartByName('${p.name}', ${p.price}, '${p.image}')" title="কার্টে যোগ করুন">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div class="pcard-quick-actions">
            <button class="btn-pcard-instant" onclick="openInstantOrderByName('${p.name}', ${p.price}, '${p.image}')">
              <i class="fas fa-bolt"></i> ⚡ সরাসরি অর্ডার করুন
            </button>
            <button class="btn-pcard-wa" onclick="orderCustomWhatsApp('${p.name}', ${p.price})" title="WhatsApp-এ অর্ডার করুন">
              <i class="fab fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
    observeReveal();
  }

  // ── Cart ──────────────────────────────────────────────────
  let cart = [];

  window.toggleCart = () => {
    const drawer  = document.getElementById('cartSidebar');
    const drawerO = document.getElementById('cartOverlay');
    const isOpen  = drawer.classList.toggle('open');
    drawerO.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  document.getElementById('cartBtn')?.addEventListener('click', toggleCart);
  document.getElementById('closeCart')?.addEventListener('click', toggleCart);
  document.getElementById('cartOverlay')?.addEventListener('click', toggleCart);

  window.addToCart = (id) => {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const ex = cart.find(x => x.id === id);
    if (ex) ex.qty++;
    else cart.push({ ...p, qty: 1 });
    updateCart();
    showToast(`✅ "${p.name}" কার্টে যোগ হয়েছে!`, 't-success');

    const btn = document.getElementById('cartBtn');
    btn.style.transform = 'scale(1.3)';
    setTimeout(() => btn.style.transform = '', 300);
  };

  window.addToCartByName = (name, price, image) => {
    const ex = cart.find(x => x.name === name);
    if (ex) ex.qty++;
    else cart.push({ id: Date.now(), name, price, image, qty: 1 });
    updateCart();
    showToast(`✅ "${name}" কার্টে যোগ হয়েছে!`, 't-success');
    const btn = document.getElementById('cartBtn');
    btn.style.transform = 'scale(1.3)';
    setTimeout(() => btn.style.transform = '', 300);
  };

  window.removeFromCart = (id) => {
    cart = cart.filter(x => x.id !== id);
    updateCart();
  };

  const updateCart = () => {
    const count = cart.reduce((s, x) => s + x.qty, 0);
    const total = cart.reduce((s, x) => s + x.price * x.qty, 0);

    document.getElementById('cartCount').textContent = count;
    document.getElementById('cartTotal').textContent = `৳${total.toLocaleString('bn-BD')}`;

    const body   = document.getElementById('cartItems');
    const foot   = document.getElementById('cartFooter');

    if (!cart.length) {
      body.innerHTML = `
        <div class="empty-cart-state">
          <i class="fas fa-bag-shopping"></i>
          <h4>কার্ট খালি</h4>
          <p>কেনাকাটা শুরু করুন</p>
          <button class="cta-primary" onclick="toggleCart()">
            <span>পণ্য দেখুন</span>
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>`;
      foot.style.display = 'none';
    } else {
      body.innerHTML = cart.map(x => `
        <div class="cart-item-v2">
          <div class="civ2-img" style="${x.bg ? `background:${x.bg}` : 'background:#0d0d1a'}">
            ${x.image ? `<img src="${x.image}" alt="${x.name}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;"/>` : `<span>${x.emoji || '🎁'}</span>`}
          </div>
          <div class="civ2-info">
            <div class="civ2-name">${x.name}</div>
            <div class="civ2-price">৳${(x.price*x.qty).toLocaleString('bn-BD')} × ${x.qty}</div>
          </div>
          <button class="civ2-remove" onclick="removeFromCart(${x.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `).join('');
      foot.style.display = 'block';
    }
  };

  // ── Dynamic Promo Deals & Offers Slider ──────────────────────
  const defaultDeals = [
    {
      id: 'deal-1',
      tagIcon: '🔥',
      tagText: 'সীমিত সময়ের বিশেষ অফার',
      title: 'আরবি আতর কালেকশনে',
      highlight: '৩০% ছাড়!',
      desc: 'খাঁটি আরবি উদ ও কস্তুরীর মন জুড়ানো সুবাস। সারা দিন স্থায়ী সুগন্ধ থাকবে। পার্সেল দেখে নেওয়ার নিশ্চয়তা পাবেন।',
      discount: '30%',
      image: 'images/attar-1-royal-oud.jpg',
      productId: 11,
      productName: 'MIRAZ অ্যারাবিয়ান রয়েল উদ আতর (১২মিলি)',
      price: 1850,
      oldPrice: 2200
    },
    {
      id: 'deal-2',
      tagIcon: '👑',
      tagText: 'রয়েল সিগনেচার পারফিউম',
      title: 'MIRAZ দ্য এজ অফ নাইট',
      highlight: '২৫% মেগা ডিসকাউন্ট!',
      desc: 'ফ্রেঞ্চ ভ্যানিলা ও ব্ল্যাক মাস্কের মিষ্টি সুবাস। যেকোনো বিয়ে বা বিশেষ অনুষ্ঠানে ব্যবহারের জন্য উপযুক্ত।',
      discount: '25%',
      image: 'images/perfume-edge-night.jpg',
      productId: 3,
      productName: 'MIRAZ The Edge of Night',
      price: 3900,
      oldPrice: 4900
    },
    {
      id: 'deal-3',
      tagIcon: '✨',
      tagText: 'ফ্যাশন ফেস্টিভ্যাল কালেকশন',
      title: 'রয়েল জেন্টস কাবলি পাঞ্জাবিতে',
      highlight: 'বিশেষ ধামাকা অফার!',
      desc: 'উন্নত মানের সুতি কাপড় ও নিখুঁত সুতোর কারুকাজ। পরতে ভীষণ আরামদায়ক, ইদের নামাজ বা পার্টিতে খুব মানাবে।',
      discount: '20%',
      image: 'images/clothing-panjabi-royal.jpg',
      productId: 15,
      productName: 'MIRAZ রয়েল জেন্টস কাবলি পাঞ্জাবি সেট',
      price: 3800,
      oldPrice: 4800
    },
    {
      id: 'deal-4',
      tagIcon: '💃',
      tagText: 'ব্রাইডাল & পার্টি স্পেশাল',
      title: 'প্রিমিয়াম বেনারসি কাতান শাড়িতে',
      highlight: '৩৫% লিমিটেড অফার!',
      desc: 'খাঁটি সিল্ক কাপড়ে পাকা জরির কাজ। বিয়ে বা পারিবারিক অনুষ্ঠানে দারুণ দেখাবে। কাপড় অনেক মসৃণ ও টেকসই।',
      discount: '35%',
      image: 'images/clothing-saree-katan.jpg',
      productId: 7,
      productName: 'MIRAZ প্রিমিয়াম বেনারসি কাতান শাড়ি',
      price: 5800,
      oldPrice: 7500
    },
    {
      id: 'deal-5',
      tagIcon: '💎',
      tagText: 'লাক্সারি হোম ডেকর & গিফট',
      title: 'গোল্ডেন রয়েল পিকক শোপিসে',
      highlight: '৪০% স্পেশাল ডিল!',
      desc: 'ড্রয়িংরুমের টেবিলে সাজিয়ে রাখার মতো চমৎকার শো-পিস। মেহমানদের নজর কাড়বে আর উপহার হিসেবেও চমৎকার।',
      discount: '40%',
      image: 'images/showpiece-golden-peacock.jpg',
      productId: 26,
      productName: 'গোল্ডেন রয়েল পিকক আর্ট লাক্সারি শোপিস',
      price: 2850,
      oldPrice: 3600
    }
  ];

  window.getActiveDeals = function() {
    try {
      const stored = JSON.parse(localStorage.getItem('miraz_active_deal_offers') || 'null');
      if (stored && Array.isArray(stored) && stored.length > 0) return stored;
    } catch(e) {}
    return defaultDeals;
  };

  let currentDealIdx = 0;
  let dealAutoTimer = null;

  function renderPromoSlider() {
    const track = document.getElementById('promoSliderTrack');
    const dotsWrap = document.getElementById('promoDots');
    const counterEl = document.getElementById('promoCounter');
    if (!track) return;

    const deals = window.getActiveDeals();
    if (!deals.length) return;
    if (currentDealIdx >= deals.length) currentDealIdx = 0;

    // Render slides HTML
    track.innerHTML = deals.map((d, idx) => `
      <div class="promo-slide ${idx === currentDealIdx ? 'active' : ''}" data-slide-index="${idx}">
        <div class="promo-layout">
          <div class="promo-body">
            <div class="promo-eyebrow">
              <span class="deal-tag-icon">${d.tagIcon || '🔥'}</span> <span class="deal-tag-text">${d.tagText || 'বিশেষ অফার — সীমিত সময়'}</span>
            </div>
            <h2 class="promo-heading">${d.title}<br/><span class="gold-grad">${d.highlight || ''}</span></h2>
            <p class="promo-text">${d.desc}</p>
            <div class="cdown">
              <div class="cdown-box"><span class="deal-hours">12</span><label>ঘণ্টা</label></div>
              <div class="cdown-sep">:</div>
              <div class="cdown-box"><span class="deal-minutes">45</span><label>মিনিট</label></div>
              <div class="cdown-sep">:</div>
              <div class="cdown-box"><span class="deal-seconds">00</span><label>সেকেন্ড</label></div>
            </div>
            <button class="cta-gold deal-order-btn" onclick="openInstantOrder(${d.productId || 11})">
              <i class="fas fa-bolt"></i>
              <span>এখনই অর্ডার করুন (৳${(d.price || 0).toLocaleString('bn-BD')})</span>
            </button>
          </div>
          <div class="promo-logo-side">
            <div class="promo-logo-ring">
              <img src="${d.image}" alt="${d.title}" class="promo-perfume-img"/>
              <div class="promo-ring pr1"></div>
              <div class="promo-ring pr2"></div>
            </div>
            <div class="promo-badge-wrap">
              <div class="promo-badge">
                <strong class="deal-badge-pct">${d.discount || '30%'}</strong>
                <span>OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Render Dots
    if (dotsWrap) {
      dotsWrap.innerHTML = deals.map((_, idx) => `
        <div class="promo-dot ${idx === currentDealIdx ? 'active' : ''}" onclick="window.goToDealSlide(${idx})" title="অফার ${idx+1}"></div>
      `).join('');
    }

    if (counterEl) {
      counterEl.textContent = `অফার ${(currentDealIdx + 1).toLocaleString('bn-BD')} / ${deals.length.toLocaleString('bn-BD')}`;
    }
  }

  window.goToDealSlide = function(idx) {
    const deals = window.getActiveDeals();
    if (!deals.length) return;
    currentDealIdx = (idx + deals.length) % deals.length;

    const track = document.getElementById('promoSliderTrack');
    if (track) {
      const slides = track.querySelectorAll('.promo-slide');
      slides.forEach((s, i) => {
        if (i === currentDealIdx) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    }

    const dots = document.querySelectorAll('.promo-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentDealIdx);
    });

    const counterEl = document.getElementById('promoCounter');
    if (counterEl) {
      counterEl.textContent = `অফার ${(currentDealIdx + 1).toLocaleString('bn-BD')} / ${deals.length.toLocaleString('bn-BD')}`;
    }

    resetDealAutoTimer();
  };

  window.nextDealSlide = function() {
    goToDealSlide(currentDealIdx + 1);
  };
  window.prevDealSlide = function() {
    goToDealSlide(currentDealIdx - 1);
  };

  function resetDealAutoTimer() {
    if (dealAutoTimer) clearInterval(dealAutoTimer);
    const isAutoOn = localStorage.getItem('miraz_deal_auto_rotate') !== 'false';
    if (!isAutoOn) return;
    const speed = parseInt(localStorage.getItem('miraz_deal_speed') || '5000', 10);
    dealAutoTimer = setInterval(() => {
      nextDealSlide();
    }, speed);
  }

  // Arrow buttons
  document.getElementById('promoPrevBtn')?.addEventListener('click', prevDealSlide);
  document.getElementById('promoNextBtn')?.addEventListener('click', nextDealSlide);

  // Pause on hover
  const saleSection = document.getElementById('sale');
  saleSection?.addEventListener('mouseenter', () => {
    if (dealAutoTimer) clearInterval(dealAutoTimer);
  });
  saleSection?.addEventListener('mouseleave', () => {
    resetDealAutoTimer();
  });

  // Countdown timer for deals (Synchronized with Admin Dashboard Settings)
  window.getDealEndTime = function() {
    const savedEnd = localStorage.getItem('miraz_deal_timer_end');
    if (savedEnd) {
      const ts = parseInt(savedEnd, 10);
      if (!isNaN(ts) && ts > Date.now()) {
        return ts;
      }
    }

    const hours = parseFloat(localStorage.getItem('miraz_deal_timer_hours') || '12');
    const minutes = parseFloat(localStorage.getItem('miraz_deal_timer_minutes') || '45');
    const totalDurationMs = Math.round((hours * 60 + minutes) * 60 * 1000);

    let activeCycleEnd = parseInt(localStorage.getItem('miraz_deal_cycle_end') || '0', 10);
    if (!activeCycleEnd || activeCycleEnd < Date.now()) {
      activeCycleEnd = Date.now() + (totalDurationMs > 0 ? totalDurationMs : (12 * 3600 + 45 * 60) * 1000);
      localStorage.setItem('miraz_deal_cycle_end', String(activeCycleEnd));
    }
    return activeCycleEnd;
  };

  let dealEndTime = window.getDealEndTime();

  const tickDeals = () => {
    const savedEnd = localStorage.getItem('miraz_deal_timer_end');
    if (savedEnd) {
      const ts = parseInt(savedEnd, 10);
      if (!isNaN(ts)) dealEndTime = ts;
    }

    const rem = Math.max(0, dealEndTime - Date.now());
    const h = Math.floor(rem / 3600000);
    const m = Math.floor((rem % 3600000) / 60000);
    const s = Math.floor((rem % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    document.querySelectorAll('.deal-hours').forEach(el => el.textContent = pad(h));
    document.querySelectorAll('.deal-minutes').forEach(el => el.textContent = pad(m));
    document.querySelectorAll('.deal-seconds').forEach(el => el.textContent = pad(s));
  };
  setInterval(tickDeals, 1000);
  tickDeals();

  renderPromoSlider();
  resetDealAutoTimer();

  // ── Contact Form (Saves to Admin Inbox & WhatsApp) ─────────
  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('cfName')?.value.trim() || 'সম্মানিত ভিজিটর';
    const phone = document.getElementById('cfPhone')?.value.trim() || '—';
    const email = document.getElementById('cfEmail')?.value.trim() || 'প্রযোজ্য নয়';
    const subject = document.getElementById('cfSubject')?.value || 'সাধারণ অনুসন্ধান';
    const message = document.getElementById('cfMessage')?.value.trim() || '';

    const msgObj = {
      id: '#MSG-' + Date.now().toString().slice(-4),
      date: new Date().toLocaleString('bn-BD', { dateStyle: 'medium', timeStyle: 'short' }),
      timestamp: Date.now(),
      name,
      phone,
      email,
      subject,
      message
    };

    // 1. Send to server backend API so it appears in Admin Dashboard across all devices
    fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(msgObj)
    }).catch(err => console.log('Server message sync:', err));

    // Also keep local copy
    try {
      const msgs = JSON.parse(localStorage.getItem('miraz_messages') || '[]');
      msgs.unshift(msgObj);
      localStorage.setItem('miraz_messages', JSON.stringify(msgs));
    } catch(err) {
      console.error('Error saving message:', err);
    }

    // 2. Show confirmation toast
    showToast('✅ আপনার মেসেজটি সফলভাবে সংরক্ষিত হয়েছে! ড্যাশবোর্ডে জমা হয়েছে।', 't-success');

    // 3. Prompt user with option to forward directly to WhatsApp
    setTimeout(() => {
      const waText = encodeURIComponent(`আসসালামু আলাইকুম MIRAZ,\nআমি ওয়েবসাইট থেকে বার্তা পাঠাচ্ছি:\n• নাম: ${name}\n• মোবাইল: ${phone}\n• বিষয়: ${subject}\n• বার্তা: ${message}`);
      const directWa = confirm(`ধন্যবাদ ${name}!\nআপনার বার্তাটি অ্যাডমিন ইনবক্সে জমা হয়েছে।\n\nআপনি কি সরাসরি WhatsApp-এও ওনারকে এই বার্তাটি পাঠাতে চান?`);
      if (directWa) {
        window.open(`https://wa.me/8801339564967?text=${waText}`, '_blank');
      }
    }, 350);

    e.target.reset();
  });
  document.getElementById('nlForm')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('✅ সাবস্ক্রাইব করার জন্য ধন্যবাদ!','t-success');
    e.target.reset();
  });

  // ── Smooth Scroll ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (nav.classList.contains('open')) toggleNav(false);
    });
  });

  // ── Trigger Reveal on Scroll ──────────────────────────────
  observeReveal();



  // =========================================================
  // ⚡ 1-CLICK INSTANT ORDER & WHATSAPP SHOPPING (01339564967)
  // =========================================================
  const MIRAZ_PHONE = '01339564967';
  const MIRAZ_WHATSAPP = '8801339564967';

  let currentOrder = {
    name: 'MIRAZ Royal Collection - Extrait De Parfum',
    price: 4200,
    qty: 1,
    image: 'images/perfume-royal-1.jpg',
    delivery: 60
  };

  const quickOrderModal    = document.getElementById('quickOrderModal');
  const closeOrderModal    = document.getElementById('closeOrderModal');
  const orderSuccessView   = document.getElementById('orderSuccessView');
  const orderFormContainer = document.getElementById('orderModalFormContainer');
  const quickOrderForm     = document.getElementById('quickOrderForm');

  const orderProdImg   = document.getElementById('orderProdImg');
  const orderProdName  = document.getElementById('orderProdName');
  const orderProdPrice = document.getElementById('orderProdPrice');
  const orderQtyEl     = document.getElementById('orderQty');
  const obSubtotal     = document.getElementById('obSubtotal');
  const obDelivery     = document.getElementById('obDelivery');
  const obTotal        = document.getElementById('obTotal');
  const btnTotal       = document.getElementById('btnTotal');
  const custAreaSelect = document.getElementById('custArea');

  // ── Delivery Charges Helper ──────────────────────────────
  window.getDeliveryCharges = function() {
    try {
      const saved = JSON.parse(localStorage.getItem('miraz_delivery_charges') || 'null');
      if (saved && typeof saved.inside === 'number' && typeof saved.outside === 'number') {
        return saved;
      }
    } catch(e) {}
    return { inside: 60, outside: 120, freeAbove: 0 };
  };

  window.updateDeliveryDropdown = function() {
    const sel = document.getElementById('custArea');
    if (!sel) return;
    const charges = window.getDeliveryCharges();
    const currentVal = sel.value;
    sel.innerHTML = `
      <option value="${charges.inside}">ঢাকার ভেতরে (৳${charges.inside.toLocaleString('bn-BD')} ডেলিভারি চার্জ)</option>
      <option value="${charges.outside}">ঢাকার বাইরে (৳${charges.outside.toLocaleString('bn-BD')} ডেলিভারি চার্জ)</option>
    `;
    if (String(currentVal) === String(charges.outside)) {
      sel.value = charges.outside;
    } else {
      sel.value = charges.inside;
    }
  };

  const updateOrderCalculations = () => {
    const sub = currentOrder.price * currentOrder.qty;
    const charges = window.getDeliveryCharges();
    const isFree = charges.freeAbove > 0 && sub >= charges.freeAbove;
    const del = isFree ? 0 : currentOrder.delivery;
    const tot = sub + del;

    if (orderQtyEl) orderQtyEl.textContent = currentOrder.qty;
    if (obSubtotal) obSubtotal.textContent = `৳${sub.toLocaleString('bn-BD')}`;
    if (obDelivery) {
      if (isFree) {
        obDelivery.innerHTML = `<span style="color:#10b981;font-weight:700;"><i class="fas fa-gift"></i> ফ্রি ডেলিভারি!</span>`;
      } else {
        obDelivery.textContent = `৳${del.toLocaleString('bn-BD')}`;
      }
    }
    if (obTotal) obTotal.textContent = `৳${tot.toLocaleString('bn-BD')}`;
    if (btnTotal) btnTotal.textContent = `${tot.toLocaleString('bn-BD')}`;
    if (orderProdPrice) orderProdPrice.textContent = `৳${currentOrder.price.toLocaleString('bn-BD')}`;
  };

  window.openInstantOrder = (productIdOrName, priceArg, imageArg) => {
    // If called with a string name (e.g. from legacy HTML), route to ByName variant
    if (typeof productIdOrName === 'string') {
      openInstantOrderByName(
        productIdOrName,
        priceArg || currentOrder.price,
        imageArg || currentOrder.image
      );
      return;
    }
    // Otherwise treat as numeric product ID
    const allProds = window.getMergedProducts ? window.getMergedProducts() : products;
    const p = allProds.find(x => x.id === productIdOrName);
    if (!p) return;
    openInstantOrderByName(p.name, p.price, p.image || 'images/perfume-royal-1.jpg');
  };

  window.openInstantOrderByName = (name, price, image) => {
    window.updateDeliveryDropdown();
    const charges = window.getDeliveryCharges();
    currentOrder.name = name;
    currentOrder.price = price;
    currentOrder.qty = 1;
    currentOrder.image = image;
    currentOrder.delivery = parseInt(custAreaSelect?.value || charges.inside, 10);

    if (orderProdImg) orderProdImg.src = image;
    if (orderProdName) orderProdName.textContent = name;
    updateOrderCalculations();

    if (orderSuccessView) orderSuccessView.style.display = 'none';
    if (orderFormContainer) orderFormContainer.style.display = 'block';
    quickOrderModal?.classList.add('open');
  };

  closeOrderModal?.addEventListener('click', () => quickOrderModal?.classList.remove('open'));
  quickOrderModal?.addEventListener('click', (e) => {
    if (e.target === quickOrderModal) quickOrderModal.classList.remove('open');
  });

  document.getElementById('qtyPlus')?.addEventListener('click', () => {
    currentOrder.qty++;
    updateOrderCalculations();
  });
  document.getElementById('qtyMinus')?.addEventListener('click', () => {
    if (currentOrder.qty > 1) {
      currentOrder.qty--;
      updateOrderCalculations();
    }
  });

  custAreaSelect?.addEventListener('change', (e) => {
    currentOrder.delivery = parseInt(e.target.value, 10);
    updateOrderCalculations();
  });

  // WhatsApp Single Product Order — accepts (productId) OR (name, price)
  window.orderProductWhatsApp = (productIdOrName, priceArg) => {
    if (typeof productIdOrName === 'string') {
      // Called with name + price directly
      orderCustomWhatsApp(productIdOrName, priceArg || 0);
      return;
    }
    const p = products.find(x => x.id === productIdOrName);
    if (!p) return;
    orderCustomWhatsApp(p.name, p.price);
  };

  window.orderCustomWhatsApp = (prodName, prodPrice) => {
    const text = 
      `আসসালামু আলাইকুম MIRAZ! 🌸\n` +
      `আমি এই পণ্যটি সরাসরি অর্ডার করতে চাই:\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `🛍️ প্রোডাক্ট: ${prodName}\n` +
      `💰 মূল্য: ৳${prodPrice.toLocaleString('bn-BD')}\n` +
      `📦 পরিমাণ: ১টি\n` +
      `🌐 শপ: miraz.com\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `আমার ডেলিভারি ঠিকানা:\n` +
      `নাম:\n` +
      `মোবাইল নম্বর:\n` +
      `ঠিকানা:\n` +
      `ক্যাশ অন ডেলিভারি চাই।`;
    window.open(`https://wa.me/${MIRAZ_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  // WhatsApp Order from Modal
  document.getElementById('modalWhatsAppBtn')?.addEventListener('click', () => {
    const name = document.getElementById('custName')?.value.trim() || '';
    const phone = document.getElementById('custPhone')?.value.trim() || '';
    const addr = document.getElementById('custAddress')?.value.trim() || '';
    const sub = currentOrder.price * currentOrder.qty;
    const tot = sub + currentOrder.delivery;

    const text = 
      `আসসালামু আলাইকুম MIRAZ! 🌸\n` +
      `আমি এই পণ্যটি অর্ডার করতে চাই:\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `🛍️ প্রোডাক্ট: ${currentOrder.name}\n` +
      `📦 পরিমাণ: ${currentOrder.qty}টি\n` +
      `💰 সর্বমোট প্রদেয়: ৳${tot.toLocaleString('bn-BD')} (ডেলিভারি চার্জ সহ)\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `আমার তথ্য:\n` +
      `নাম: ${name || '...'}\n` +
      `ফোন: ${phone || '...'}\n` +
      `ঠিকানা: ${addr || '...'}\n` +
      `পেমেন্ট: ক্যাশ অন ডেলিভারি`;
    window.open(`https://wa.me/${MIRAZ_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  });

  // Cart WhatsApp Order
  window.orderCartViaWhatsApp = () => {
    if (!cart.length) {
      showToast('❌ আপনার কার্ট খালি আছে!', 't-error');
      return;
    }
    const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
    const itemList = cart.map((x, i) => `${i + 1}. ${x.name} (৳${x.price.toLocaleString('bn-BD')} × ${x.qty})`).join('\n');
    const text = 
      `আসসালামু আলাইকুম MIRAZ! 🌸\n` +
      `আমি কার্টের সকল পণ্য অর্ডার করতে চাই:\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `${itemList}\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `💵 পণ্যের মোট মূল্য: ৳${total.toLocaleString('bn-BD')}\n` +
      `🚚 ডেলিভারি চার্জ: প্রযোজ্য (ঢাকার ভেতর ৬০ / বাইরে ১২০)\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `আমার ডেলিভারি ঠিকানা:\n` +
      `নাম:\n` +
      `ফোন:\n` +
      `ঠিকানা:`;
    window.open(`https://wa.me/${MIRAZ_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  document.getElementById('cartWhatsAppBtn')?.addEventListener('click', orderCartViaWhatsApp);
  document.getElementById('cartQuickOrderBtn')?.addEventListener('click', () => {
    if (!cart.length) {
      showToast('❌ আপনার কার্ট খালি!', 't-error');
      return;
    }
    const first = cart[0];
    const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
    openInstantOrderByName(`কার্ট অর্ডার (${cart.length}টি আইটেম)`, total, first.image || 'images/perfume-royal-1.jpg');
    toggleCart();
  });

  // Quick Order Form Submit (Instant Checkout)
  quickOrderForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('custName')?.value.trim();
    const phone = document.getElementById('custPhone')?.value.trim();
    const address = document.getElementById('custAddress')?.value.trim();

    if (!name || !phone || !address) {
      showToast('❌ অনুগ্রহ করে সকল তথ্য পূরণ করুন!', 't-error');
      return;
    }

    const orderId = `#MRZ-${Math.floor(1000 + Math.random() * 9000)}`;
    const sub = currentOrder.price * currentOrder.qty;
    const tot = sub + currentOrder.delivery;

    const areaText = custAreaSelect?.options[custAreaSelect.selectedIndex]?.text || (currentOrder.delivery === 60 ? 'ঢাকার ভেতরে' : 'ঢাকার বাইরে');
    // Prepare order object
    const newOrderObj = {
      id: orderId,
      date: new Date().toLocaleString('bn-BD'),
      timestamp: Date.now(),
      product: currentOrder.name,
      qty: currentOrder.qty,
      price: currentOrder.price,
      subtotal: sub,
      delivery: currentOrder.delivery,
      area: areaText,
      total: tot,
      paymentMethod: 'ক্যাশ অন ডেলিভারি',
      status: 'পেন্ডিং',
      name, phone, address
    };

    // 1. Send to server backend API so it appears in Admin Dashboard across all devices
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrderObj)
    }).catch(err => console.log('Server order sync:', err));

    // 2. Also keep local copy
    try {
      const savedOrders = JSON.parse(localStorage.getItem('miraz_orders') || '[]');
      savedOrders.unshift(newOrderObj);
      localStorage.setItem('miraz_orders', JSON.stringify(savedOrders));
    } catch(err) {
      console.error('Error saving order locally:', err);
    }

    // Show Success screen
    if (document.getElementById('successOrderId')) document.getElementById('successOrderId').textContent = orderId;
    if (document.getElementById('successCustName')) document.getElementById('successCustName').textContent = name;
    if (document.getElementById('successCustPhone')) document.getElementById('successCustPhone').textContent = phone;

    if (orderFormContainer) orderFormContainer.style.display = 'none';
    if (orderSuccessView) orderSuccessView.style.display = 'block';

    // WhatsApp Followup Button
    document.getElementById('successWaFollowupBtn').onclick = () => {
      const text = 
        `আসসালামু আলাইকুম MIRAZ!\n` +
        `আমি মাত্র ওয়েবসাইটে একটি অর্ডার দিয়েছি:\n` +
        `অর্ডার আইডি: ${orderId}\n` +
        `পণ্য: ${currentOrder.name} (${currentOrder.qty}টি)\n` +
        `মোট: ৳${tot.toLocaleString('bn-BD')}\n` +
        `নাম: ${name}\n` +
        `ফোন: ${phone}`;
      window.open(`https://wa.me/${MIRAZ_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
    };

    document.getElementById('successDoneBtn').onclick = () => {
      quickOrderModal?.classList.remove('open');
      quickOrderForm.reset();
    };

    showToast(`🎉 ধন্যবাদ ${name}! অর্ডার কনফার্ম হয়েছে (${orderId})`, 't-success');
  });

  // =========================================================
  // 🔍 INTERACTIVE GOLDEN QUICK VIEW MODAL
  // =========================================================
  let qvCurrentProduct = null;
  let qvSelectedSize = 50;
  let qvSizeMult = 1;

  window.openQuickView = (productId) => {
    const all = window.getMergedProducts();
    const p = all.find(x => x.id === productId);
    if (!p) return;
    openQuickViewWithData(p);
  };

  window.openQuickViewByName = (name, price, image) => {
    openQuickViewWithData({
      id: Date.now(),
      name,
      price,
      old: Math.round(price * 1.25),
      cat: 'perfume',
      badge: 'নতুন',
      image,
      rating: 5.0,
      reviews: 95
    });
  };

  const openQuickViewWithData = (p) => {
    qvCurrentProduct = p;
    qvSelectedSize = 50;
    qvSizeMult = 1;

    const modal = document.getElementById('quickViewModal');
    const imgEl = document.getElementById('qvImage');
    const badgeEl = document.getElementById('qvBadge');
    const catEl = document.getElementById('qvCat');
    const titleEl = document.getElementById('qvTitle');
    const starsEl = document.getElementById('qvStars');
    const reviewsEl = document.getElementById('qvReviews');
    const sizeBlock = document.getElementById('qvSizeBlock');
    const notesBox = document.getElementById('qvNotesBox');

    if (imgEl) {
      imgEl.src = p.image || 'images/perfume-royal-1.jpg';
      imgEl.alt = p.name || 'MIRAZ Luxury Product';
      imgEl.title = 'ক্লিক করে সম্পূর্ণ এইচডি ছবি দেখুন';
      imgEl.onclick = () => {
        if (typeof window.openLightbox === 'function') {
          window.openLightbox(
            imgEl.src,
            p.name || 'MIRAZ Luxury Edition',
            'MIRAZ ভেরিফাইড কোয়ালিটি',
            'সম্পূর্ণ আসল ও নিখুঁত কোয়ালিটির এইচডি ছবি। কোনো অংশ বাদ না রেখে ১০০% সম্পূর্ণ ভিউ।'
          );
        }
      };
    }
    if (badgeEl) badgeEl.textContent = badgeLabels[p.badge] || (p.badge ? p.badge.toUpperCase() : 'লাক্সারি এডিশন');
    if (catEl) catEl.textContent = catLabels[p.cat] || p.cat;
    if (titleEl) {
      const nameStr = p.name || '';
      if (nameStr.startsWith('MIRAZ')) {
        titleEl.innerHTML = `<span style="color:#f0c96e; font-family:'Cinzel',serif; font-weight:800; letter-spacing:0.06em; margin-right:6px;">MIRAZ</span> ${nameStr.substring(5).trim()}`;
      } else {
        titleEl.textContent = nameStr;
      }
    }
    if (starsEl) starsEl.textContent = '★'.repeat(Math.round(p.rating || 5)) + '☆'.repeat(5 - Math.round(p.rating || 5));
    if (reviewsEl) reviewsEl.textContent = `${p.rating || '৫.০'} (${p.reviews || 120}টি ভেরিফাইড রিভিউ)`;

    // Perfume-specific sizes and fragrance notes
    const isPerfume = p.cat === 'perfume' || p.name.includes('Parfum') || p.name.includes('আতর') || p.name.includes('পারফিউম') || p.image?.includes('perfume');
    if (sizeBlock) sizeBlock.style.display = isPerfume ? 'block' : 'none';
    if (notesBox) notesBox.style.display = isPerfume ? 'grid' : 'none';

    // Reset size pills
    document.querySelectorAll('.qv-size-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.size === '50');
    });

    updateQuickViewPrices();
    modal?.classList.add('open');
  };

  const updateQuickViewPrices = () => {
    if (!qvCurrentProduct) return;
    const basePrice = qvCurrentProduct.price;
    const finalPrice = Math.round(basePrice * qvSizeMult);
    const oldPrice = qvCurrentProduct.old ? Math.round(qvCurrentProduct.old * qvSizeMult) : Math.round(finalPrice * 1.25);

    const priceEl = document.getElementById('qvPrice');
    const oldPriceEl = document.getElementById('qvOldPrice');
    const saveBadgeEl = document.getElementById('qvSaveBadge');
    const pill50 = document.getElementById('pillPrice50');
    const pill100 = document.getElementById('pillPrice100');
    const selectedSizeText = document.getElementById('selectedSizeText');

    if (priceEl) priceEl.textContent = `৳${finalPrice.toLocaleString('bn-BD')}`;
    if (oldPriceEl) {
      oldPriceEl.textContent = `৳${oldPrice.toLocaleString('bn-BD')}`;
      oldPriceEl.style.display = 'inline';
    }
    if (saveBadgeEl) {
      saveBadgeEl.textContent = `৳${(oldPrice - finalPrice).toLocaleString('bn-BD')} সাশ্রয়`;
      saveBadgeEl.style.display = 'inline-block';
    }
    if (pill50) pill50.textContent = `৳${basePrice.toLocaleString('bn-BD')}`;
    if (pill100) pill100.textContent = `৳${Math.round(basePrice * 1.45).toLocaleString('bn-BD')} (স্পেশাল অফার)`;
    if (selectedSizeText) selectedSizeText.textContent = qvSelectedSize === 100 ? '১০০ মি.লি.' : '৫০ মি.লি.';
  };

  // Size pill click listener
  document.querySelectorAll('.qv-size-pill').forEach(pill => {
    pill.addEventListener('click', function() {
      document.querySelectorAll('.qv-size-pill').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      qvSelectedSize = parseInt(this.dataset.size, 10);
      qvSizeMult = parseFloat(this.dataset.mult);
      updateQuickViewPrices();
    });
  });

  // Quick View Close handlers
  document.getElementById('closeQuickView')?.addEventListener('click', () => {
    document.getElementById('quickViewModal')?.classList.remove('open');
  });
  document.getElementById('quickViewModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'quickViewModal') document.getElementById('quickViewModal')?.classList.remove('open');
  });

  // Quick View Buy Now (opens 1-Click Order)
  document.getElementById('qvBuyNowBtn')?.addEventListener('click', () => {
    if (!qvCurrentProduct) return;
    const finalPrice = Math.round(qvCurrentProduct.price * qvSizeMult);
    const sizeSuffix = (qvCurrentProduct.cat === 'perfume' || qvCurrentProduct.image?.includes('perfume')) ? ` (${qvSelectedSize}ml)` : '';
    document.getElementById('quickViewModal')?.classList.remove('open');
    openInstantOrderByName(`${qvCurrentProduct.name}${sizeSuffix}`, finalPrice, qvCurrentProduct.image || 'images/perfume-royal-1.jpg');
  });

  // Quick View Add to Cart
  document.getElementById('qvAddToCartBtn')?.addEventListener('click', () => {
    if (!qvCurrentProduct) return;
    const finalPrice = Math.round(qvCurrentProduct.price * qvSizeMult);
    const sizeSuffix = (qvCurrentProduct.cat === 'perfume' || qvCurrentProduct.image?.includes('perfume')) ? ` (${qvSelectedSize}ml)` : '';
    const itemToAdd = {
      ...qvCurrentProduct,
      id: qvCurrentProduct.id + (qvSelectedSize === 100 ? 50000 : 0),
      name: `${qvCurrentProduct.name}${sizeSuffix}`,
      price: finalPrice
    };
    const ex = cart.find(x => x.name === itemToAdd.name);
    if (ex) ex.qty++;
    else cart.push({ ...itemToAdd, qty: 1 });
    updateCart();
    showToast(`✅ "${itemToAdd.name}" কার্টে যোগ হয়েছে!`, 't-success');
    document.getElementById('quickViewModal')?.classList.remove('open');
  });

  // Quick View WhatsApp Order
  document.getElementById('qvWhatsAppBtn')?.addEventListener('click', () => {
    if (!qvCurrentProduct) return;
    const finalPrice = Math.round(qvCurrentProduct.price * qvSizeMult);
    const sizeSuffix = (qvCurrentProduct.cat === 'perfume' || qvCurrentProduct.image?.includes('perfume')) ? ` (${qvSelectedSize}ml)` : '';
    orderCustomWhatsApp(`${qvCurrentProduct.name}${sizeSuffix}`, finalPrice);
  });

  // =========================================================
  // 📦 UNBOXING & SOCIAL PROOF GALLERY (FILTERS & LIGHTBOX)
  // =========================================================
  document.querySelectorAll('.unb-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.unb-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      document.querySelectorAll('.unb-card').forEach(card => {
        if (filter === 'all' || card.dataset.cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  window.openLightbox = (imgSrc, title, user, quote) => {
    const modal = document.getElementById('unbLightboxModal');
    if (!modal) return;
    document.getElementById('lbImg').src = imgSrc;
    document.getElementById('lbTitle').textContent = title;
    document.getElementById('lbUser').textContent = user;
    document.getElementById('lbQuote').textContent = `"${quote}"`;

    document.getElementById('lbOrderThisBtn').onclick = () => {
      modal.classList.remove('open');
      openInstantOrderByName(title, 4200, imgSrc);
    };

    modal.classList.add('open');
  };

  document.getElementById('closeLightbox')?.addEventListener('click', () => {
    document.getElementById('unbLightboxModal')?.classList.remove('open');
  });
  document.getElementById('unbLightboxModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'unbLightboxModal') document.getElementById('unbLightboxModal')?.classList.remove('open');
  });

  // =========================================================
  // ✨ INTERACTIVE LUXURY GOLD CURSOR & GOLD AURA PARTICLES
  // =========================================================
  const canvas = document.getElementById('goldCanvas');
  const cursorDot = document.getElementById('cursorDot');
  const cursorAura = document.getElementById('cursorAura');

  if (canvas && window.matchMedia('(pointer: fine)').matches) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    let mouse = { x: -100, y: -100 };
    let auraPos = { x: -100, y: -100 };
    let particles = [];

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (cursorDot) {
        cursorDot.style.left = `${mouse.x}px`;
        cursorDot.style.top = `${mouse.y}px`;
        cursorDot.style.opacity = '1';
      }

      // Emit subtle golden stardust particles
      if (Math.random() > 0.35) {
        particles.push({
          x: mouse.x + (Math.random() * 10 - 5),
          y: mouse.y + (Math.random() * 10 - 5),
          size: Math.random() * 2.5 + 1,
          speedX: (Math.random() - 0.5) * 1.2,
          speedY: (Math.random() - 0.5) * 1.2 - 0.3,
          alpha: 1,
          decay: Math.random() * 0.025 + 0.018,
          color: Math.random() > 0.4 ? '#d4a847' : '#f0c96e'
        });
      }
    });

    window.addEventListener('mouseleave', () => {
      if (cursorDot) cursorDot.style.opacity = '0';
      if (cursorAura) cursorAura.style.opacity = '0';
    });
    window.addEventListener('mouseenter', () => {
      if (cursorDot) cursorDot.style.opacity = '1';
      if (cursorAura) cursorAura.style.opacity = '1';
    });

    // Gold sparkle burst on click
    window.addEventListener('mousedown', (e) => {
      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.5 + 1;
        particles.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1.2,
          speedX: Math.cos(angle) * speed,
          speedY: Math.sin(angle) * speed,
          alpha: 1,
          decay: Math.random() * 0.04 + 0.02,
          color: '#ffd700'
        });
      }
    });

    // Hover interactive elements
    const interactiveSelector = 'a, button, input, select, textarea, .pcard, .cat-card-v2, .unb-card, .gal-item, .qv-size-pill';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelector)) {
        cursorAura?.classList.add('hovering');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelector)) {
        cursorAura?.classList.remove('hovering');
      }
    });

    // Animation Loop
    const animateGoldDust = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth Aura interpolation
      auraPos.x += (mouse.x - auraPos.x) * 0.18;
      auraPos.y += (mouse.y - auraPos.y) * 0.18;

      if (cursorAura) {
        cursorAura.style.left = `${auraPos.x}px`;
        cursorAura.style.top = `${auraPos.y}px`;
      }

      // Draw and update golden dust particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#d4a847';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(animateGoldDust);
    };
    requestAnimationFrame(animateGoldDust);
  }

  // =========================================================
  // 👑 SECRET KEYBOARD SHORTCUT: Ctrl + Shift + A (Admin Panel)
  // =========================================================
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      window.location.href = 'admin.html';
    }
  });

  // ─────────────────────────────────────────────────────────

  console.log('%c✦ MIRAZ ✦', 'color:#d4a847;font-size:24px;font-weight:900;letter-spacing:.3em');
  console.log('%cmiraz.com – Luxury Lifestyle Store', 'color:#b8860b;font-size:13px;');
});

// ── Toast ──────────────────────────────────────────────────
let _toastTimer;
window.showToast = (msg, type = '') => {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `toast-v2 ${type} show`;
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => toast.classList.remove('show'), 3800);
};

// ── Video Reels Interactive Player ──────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const reelVideos = document.querySelectorAll('.reel-video');
  
  reelVideos.forEach(video => {
    video.muted = true;
    
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    });

    video.addEventListener('play', () => {
      if (!video.muted) {
        reelVideos.forEach(v => {
          if (v !== video) v.pause();
        });
      }
    });
  });

  // Autoplay reels when scrolled into view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (!video) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.25 });

    reelVideos.forEach(video => observer.observe(video));
  }

  // Real-time Video Sync from Admin Panel
  window.syncDeletedVideos = () => {
    try {
      const deletedVideos = JSON.parse(localStorage.getItem('miraz_deleted_video_ids') || '[]');
      for (let i = 1; i <= 5; i++) {
        const card = document.getElementById(`reel-card-${i}`);
        if (!card) continue;
        if (deletedVideos.includes(i)) {
          card.classList.add('deleted-video');
          card.style.setProperty('display', 'none', 'important');
          const vid = card.querySelector('video');
          if (vid) {
            vid.pause();
            vid.muted = true;
          }
        } else {
          card.classList.remove('deleted-video');
          card.style.removeProperty('display');
        }
      }
    } catch (e) {
      console.error('Error syncing videos:', e);
    }
  };

  // Run on load
  window.syncDeletedVideos();

  // Render custom reels uploaded from Admin
  function renderCustomReelsHome() {
    try {
      const grid = document.querySelector('.video-reels-grid');
      if (!grid) return;
      let customReels = JSON.parse(localStorage.getItem('miraz_custom_reels') || '[]');
      const sessionReels = JSON.parse(sessionStorage.getItem('miraz_custom_reels') || '[]');
      customReels = [...sessionReels, ...customReels];

      customReels.forEach(r => {
        if (document.getElementById(`reel-card-${r.id}`)) return;
        const card = document.createElement('div');
        card.className = 'reel-card';
        card.id = `reel-card-${r.id}`;
        card.innerHTML = `
          <div class="reel-video-wrap">
            <video class="reel-video" autoplay muted loop playsinline controls src="${r.video}"></video>
            <div class="reel-overlay">
              <span class="reel-live-tag"><i class="fas fa-circle"></i> HD REEL</span>
            </div>
          </div>
          <div class="reel-info">
            <span class="reel-cat"><i class="fas fa-sparkles"></i> নতুন রিলস</span>
            <h3 class="reel-title">${r.title}</h3>
            <div class="reel-price-row">
              <span class="reel-price">৳${r.price}</span>
            </div>
            <div class="reel-actions">
              <button class="btn-reel-order" onclick="openInstantOrderByName('${r.title}', ${r.price}, 'images/perfume-royal-1.jpg')">
                <i class="fas fa-bolt"></i> সরাসরি অর্ডার
              </button>
              <button class="btn-reel-wa" title="WhatsApp-এ অর্ডার" onclick="orderCustomWhatsApp('${r.title}', ${r.price})">
                <i class="fab fa-whatsapp"></i>
              </button>
            </div>
          </div>
        `;
        grid.prepend(card);
      });
    } catch (e) {}
  }

  renderCustomReelsHome();

  // Instant update when switching tabs or when admin modifies storage
  window.addEventListener('storage', () => {
    window.syncDeletedVideos();
    renderCustomReelsHome();
    if (window.updateDeliveryDropdown) window.updateDeliveryDropdown();
    if (window.renderSignatureShowcase) window.renderSignatureShowcase();
  });
  window.addEventListener('focus', () => {
    window.syncDeletedVideos();
    renderCustomReelsHome();
    if (window.updateDeliveryDropdown) window.updateDeliveryDropdown();
    if (window.renderSignatureShowcase) window.renderSignatureShowcase();
    syncCartPills();
  });

  // ── Screenshot-Accurate Quick Category Selector ──
  window.mzSelectCategory = (catKey, catName, btn) => {
    document.querySelectorAll('.mz-cat-card').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    if (typeof window.filterProductsFromNav === 'function') {
      window.filterProductsFromNav(catKey, catName);
    }
    const target = document.getElementById('new');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ── Screenshot-Accurate Realtime Search Input ──
  const mzSearchInput = document.getElementById('mzMainSearchInput');
  if (mzSearchInput) {
    mzSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      const grid = document.getElementById('productsGrid');
      if (!grid) return;
      const allProds = (typeof window.getMergedProducts === 'function') ? window.getMergedProducts() : (window.products || []);
      if (!q) {
        if (typeof window.filterProductsFromNav === 'function') {
          window.filterProductsFromNav('all', 'সব পণ্য');
        }
        return;
      }
      const matched = allProds.filter(p => {
        const name = (p.name || '').toLowerCase();
        const desc = (p.desc || '').toLowerCase();
        const cat = (p.cat || '').toLowerCase();
        const subcat = (p.subcat || '').toLowerCase();
        return name.includes(q) || desc.includes(q) || cat.includes(q) || subcat.includes(q);
      });
      const countEl = document.getElementById('productsCount');
      if (countEl) countEl.textContent = `${matched.length}টি পণ্য`;
      const titleEl = document.getElementById('filteredCatTitle');
      if (titleEl) titleEl.textContent = `অনুসন্ধান: "${e.target.value}"`;
      
      grid.innerHTML = '';
      if (matched.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:3rem 1rem;color:#888;">কোনো পণ্য খুঁজে পাওয়া যায়নি।</div>';
        return;
      }
      matched.forEach(p => {
        if (typeof window.renderProductCard === 'function') {
          grid.innerHTML += window.renderProductCard(p);
        } else if (typeof renderSingleProductCard === 'function') {
          grid.appendChild(renderSingleProductCard(p));
        }
      });
      const target = document.getElementById('new');
      if (target && window.scrollY < target.offsetTop - 200) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ── Sync Cart Pill Count ──
  function syncCartPills() {
    const mainCount = document.getElementById('cartCount');
    const pillCount = document.getElementById('cartCountPill');
    if (mainCount && pillCount) {
      pillCount.textContent = mainCount.textContent || '0';
    }
  }
  setInterval(syncCartPills, 400);

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      window.syncDeletedVideos();
      renderCustomReelsHome();
      if (window.updateDeliveryDropdown) window.updateDeliveryDropdown();
      if (window.renderSignatureShowcase) window.renderSignatureShowcase();
      syncCartPills();
    }
  });

  // ── Product Images Banner Slideshow (Dynamic Split Showcase) ──
  function initBannerSlideshow() {
    const fullImg = document.getElementById('bannerSlideFull');
    const prodWrap = document.getElementById('bannerSlideProductWrap');
    const prodImg = document.getElementById('bannerSlideProdImg');
    const slideBg = document.getElementById('bannerSlideBg');
    const bpCatName = document.getElementById('bpCatName');
    const bpTitle = document.getElementById('bpTitle');
    const bpDesc = document.getElementById('bpDesc');
    const bpPrice = document.getElementById('bpPrice');
    const bpOldPrice = document.getElementById('bpOldPrice');
    const bpSaveBadge = document.getElementById('bpSaveBadge');
    const bpOrderBtn = document.getElementById('bpOrderBtn');
    const bpDetailBtn = document.getElementById('bpDetailBtn');

    if (!fullImg || !prodWrap) return;

    const prods = (typeof window.getMergedProducts === 'function') ? window.getMergedProducts() : (window.products || []);
    const catMap = {
      perfume: 'পারফিউম ও সুগন্ধি',
      attar: 'আতর কালেকশন',
      clothing: 'পোশাক ও ফ্যাশন',
      ladies: 'লেডিস ফ্যাশন',
      gents: 'জেন্টস কালেকশন',
      cosmetics: 'বিউটি ও কসমেটিক',
      showpiece: 'শোপিস ও গিফট',
      freshener: 'রুম ফ্রেশনার',
      kids: 'কিডস কালেকশন'
    };

    // Slides array: initial brand banner + catalog products
    const slides = [
      { isBanner: true, image: 'images/miraz-banner-hero.jpg', name: 'MIRAZ Exclusive Fragrance & Perfume Oils' }
    ];

    prods.forEach(p => {
      if (p.image && !slides.some(s => s.image === p.image)) {
        slides.push({
          isBanner: false,
          id: p.id,
          image: p.image,
          name: p.name || 'MIRAZ Luxury Product',
          catLabel: catMap[p.cat] || catMap[p.subcat] || 'MIRAZ EXCLUSIVE',
          desc: p.desc || '১০০% অরিজিনাল ও প্রিমিয়াম কোয়ালিটি পণ্য। ডেলিভারি চেক করে ক্যাশ অন ডেলিভারিতে নেওয়ার সুযোগ।',
          price: p.price || 1500,
          old: p.old || Math.round((p.price || 1500) * 1.3)
        });
      }
    });

    if (slides.length <= 1) return;

    let currentIdx = 0;
    const preload = (url) => {
      if (!url) return;
      const img = new Image();
      img.src = url;
    };

    // Preload next image
    if (slides[1]) preload(slides[1].image);

    setInterval(() => {
      currentIdx = (currentIdx + 1) % slides.length;
      const s = slides[currentIdx];

      // Preload next upcoming image
      const nextIdx = (currentIdx + 1) % slides.length;
      if (slides[nextIdx]) preload(slides[nextIdx].image);

      // Fade out current view
      if (fullImg) fullImg.style.opacity = '0';
      if (prodWrap) prodWrap.style.opacity = '0';
      if (slideBg) slideBg.style.opacity = '0';

      setTimeout(() => {
        if (slideBg) slideBg.src = s.image;

        if (s.isBanner) {
          // Wide brand banner view
          if (fullImg) {
            fullImg.src = s.image;
            fullImg.style.display = 'block';
            fullImg.style.opacity = '1';
          }
          if (prodWrap) prodWrap.style.display = 'none';
        } else {
          // Rich Split Showcase view for products
          if (fullImg) fullImg.style.display = 'none';
          if (prodWrap) {
            prodWrap.style.display = 'grid';
            if (prodImg) prodImg.src = s.image;
            if (bpCatName) bpCatName.textContent = s.catLabel;
            if (bpTitle) bpTitle.textContent = s.name;
            if (bpDesc) bpDesc.textContent = s.desc;
            if (bpPrice) bpPrice.textContent = `৳${(s.price).toLocaleString('bn-BD')}`;
            if (bpOldPrice) bpOldPrice.textContent = `৳${(s.old).toLocaleString('bn-BD')}`;
            if (bpSaveBadge) bpSaveBadge.textContent = `৳${(s.old - s.price).toLocaleString('bn-BD')} সাশ্রয়`;

            if (bpOrderBtn) {
              bpOrderBtn.onclick = () => {
                if (typeof window.openInstantOrder === 'function') {
                  window.openInstantOrder(s.id);
                } else if (typeof window.addToCart === 'function') {
                  window.addToCart(s.id);
                }
              };
            }
            if (bpDetailBtn) {
              bpDetailBtn.onclick = () => {
                if (typeof window.openQuickView === 'function') {
                  window.openQuickView(s.id);
                }
              };
            }
            prodWrap.style.opacity = '1';
          }
        }
        if (slideBg) slideBg.style.opacity = '1';
      }, 700);
    }, 20000);
  }
  initBannerSlideshow();
});

