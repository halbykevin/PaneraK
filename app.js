let translations = {};
let currentLang = 'en';

// Load translations on page load
document.addEventListener('DOMContentLoaded', function () {
  loadTranslations();
});

// Fetch and load translation JSON
function loadTranslations() {
  fetch('translations.json')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load translations.json');
      return response.json();
    })
    .then(data => {
      translations = data;
      // Get language from localStorage or browser default
      currentLang = localStorage.getItem('language') || 'en';
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
      
      setupLanguageToggle();
      applyTranslations();
    })
    .catch(error => {
      console.error('Error loading translations:', error);
      setupLanguageToggle(); // Still setup toggle even if JSON fails
    });
}

// Setup language toggle switch
function setupLanguageToggle() {
  const langToggle = document.getElementById('lang-toggle');
  if (!langToggle) return;

  // Set toggle position based on current language
  langToggle.checked = (currentLang === 'ar');

  // Listen for toggle changes
  langToggle.addEventListener('change', function () {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    applyTranslations();
  });
}

// Apply translations to the page
function applyTranslations() {
  if (!translations[currentLang]) return;

  const t = translations[currentLang];

  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = t;

    for (const k of keys) {
      value = value[k];
      if (!value) break;
    }

    if (value) {
      element.textContent = value;
    }
  });

  // Handle menu items (special case for dynamic content)
  const pageName = getCurrentPageKey();

  if (pageName && t[pageName]) {
    const menuData = t[pageName];

    // Update page title
    const titleElement = document.querySelector('.menu-title, .menu-title-any');
    if (titleElement) {
      titleElement.textContent = menuData.title;
    }

    // Update menu items
    const menuContainer = document.querySelector('.menu-container, .menu-container-any');
    if (menuContainer && menuData.items) {
      // Remove old items
      const oldItems = menuContainer.querySelectorAll('.menu-item, .menu-item-any');
      oldItems.forEach(item => item.remove());
      
      // Generate new items
      generateMenuItems(menuData.items, menuContainer);
    }
  }

  // Update footer
  if (t.footer) {
    const footerText = document.querySelector('footer .footer-text');
    if (footerText) {
      footerText.innerHTML = `
        <p><b>${t.footer.address}</b></p>
        <p><i>${t.footer.location}</i></p>
        <p><b>${t.footer.tel}</b></p>
        <p><i>${t.footer.phone1}</i></p>
        <p><i>${t.footer.phone2}</i></p>
      `;
    }
  }

  // Update buttons
  const orderBtn = document.querySelector('.order-now-btn a');
  if (orderBtn && t.buttons) {
    orderBtn.textContent = t.buttons.orderNow;
  }

  const backBtn = document.querySelector('.back-button');
  if (backBtn && t.buttons) {
    backBtn.textContent = t.buttons.back;
  }

  // Update homepage category links
  updateCategoryLinks();
}

// Determine the current page's translation key
function getCurrentPageKey() {
  const pathname = window.location.pathname;
  const filename = pathname.split('/').pop().split('.')[0];
  
  // Map filenames to translation keys
  const keyMap = {
    'lent': 'lent',
    'burgers': 'burgers',
    'sandwiches': 'sandwiches',
    'pizza': 'pizza',
    'platters': 'platters',
    'biAajine': 'biAajine',
    'sidesandbeverages': 'sidesandbeverages',
    'tobacco': 'tobacco'
  };
  
  return keyMap[filename] || null;
}

// Update homepage category navigation links with translated text
function updateCategoryLinks() {
  const t = translations[currentLang];
  if (!t.nav) return;

  const categoryMappings = {
    'lent': 'lent',
    'burgers': 'burgers',
    'sandwiches': 'sandwiches',
    'pizza': 'pizza',
    'platters': 'platters',
    'biAajine': 'biAajine',
    'sidesandbeverages': 'sidesandbeverages',
    'tobacco': 'tobacco'
  };

  document.querySelectorAll('.category-item').forEach(link => {
    const href = link.getAttribute('href');
    
    for (const [key, navKey] of Object.entries(categoryMappings)) {
      if (href.includes(key)) {
        const h2 = link.querySelector('h2');
        if (h2 && t.nav[navKey]) {
          h2.textContent = t.nav[navKey];
        }
        break;
      }
    }
  });
}

// Helper function to generate menu items dynamically
function generateMenuItems(items, container) {
  const isCompactLayout = container.classList.contains('menu-container-any');

  items.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = isCompactLayout ? 'menu-item-any' : 'menu-item';

    if (!isCompactLayout) {
      // Pizza-style layout (full width with centered prices)
      itemEl.innerHTML = `
        <h2 class="item-name">${item.name}</h2>
        <p class="item-description">${item.desc || ''}</p>
        <div class="item-prices">
          ${item.prices ? item.prices.map(p => `<span>${p}</span>`).join('') : `<span>${item.price}</span>`}
        </div>
      `;
    } else {
      // Sandwich/burger-style layout (side-by-side with price on right)
      itemEl.innerHTML = `
        <div class="item-content-any">
          <h2 class="item-name-any">${item.name}</h2>
          <p class="item-description-any">${item.desc || ''}</p>
        </div>
        <div class="item-price-any">${item.price || (item.prices ? item.prices[0] : '')}</div>
      `;
    }

    container.appendChild(itemEl);
  });
}
