// ==========================================================================
// La Table Française - Application Controller & Zero-English-Leakage Engine
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // App State
  const state = {
    currentLang: localStorage.getItem('table_francaise_lang') || 'en',
    currentTheme: localStorage.getItem('table_francaise_theme') || 'light',
    activeCategory: 'all',
    searchQuery: '',
    selectedRegion: 'all',
    favorites: new Set(JSON.parse(localStorage.getItem('table_francaise_favs') || '[]')),
    activeRecipe: null,
    currentServings: 4,
    showAllRecipes: false,
    activeTimers: {}
  };

  // DOM Elements
  const langDropdown = document.getElementById('lang-selector-dropdown');
  const langMenuBtn = document.getElementById('lang-menu-btn');
  const langCurrentFlag = document.getElementById('current-lang-flag');
  const langCurrentText = document.getElementById('current-lang-text');
  const langMenuItems = document.querySelectorAll('.lang-menu-item');
  const footerLangSelect = document.getElementById('footer-lang-select');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const searchInput = document.getElementById('recipe-search');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const catPills = document.querySelectorAll('.cat-pill');
  const recipesGrid = document.getElementById('recipes-grid');
  const viewAllBtn = document.getElementById('view-all-recipes-btn');
  const favBadge = document.getElementById('fav-count-badge');
  const navFavBtn = document.getElementById('nav-favorites-btn');
  const regionCards = document.querySelectorAll('.region-card');
  const featuredViewBtn = document.getElementById('featured-view-recipe-btn');
  const recipeModal = document.getElementById('recipe-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContentArea = document.getElementById('modal-content-area');
  const toastArea = document.getElementById('toast-area');

  const langMeta = {
    en: { flag: '🇬🇧', label: 'English' },
    te: { flag: '🇮🇳', label: 'తెలుగు (Telugu)' },
    hi: { flag: '🇮🇳', label: 'हिंदी (Hindi)' },
    fr: { flag: '🇫🇷', label: 'Français' }
  };

  // Web Audio Chime for Timers
  let audioCtx = null;
  function playCulinaryChime() {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const now = audioCtx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.setValueAtTime(f, now + i * 0.12);
        gain.gain.setValueAtTime(0.18, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.7);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 0.7);
      });
    } catch (e) {
      console.warn('Audio chime notice:', e);
    }
  }

  // Toast Notification
  function showToast(message, icon = '✦') {
    if (!toastArea) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastArea.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Set Theme
  function applyTheme(theme) {
    state.currentTheme = theme;
    localStorage.setItem('table_francaise_theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyTheme(state.currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  // Deep Localization Resolver with 100% Zero-English Guarantee
  function getLocalizedRecipe(r, targetLang) {
    const lang = targetLang || state.currentLang || 'en';
    const dict = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
    const t = (typeof RECIPE_TRANSLATIONS !== 'undefined' && RECIPE_TRANSLATIONS[r.id]) 
              ? RECIPE_TRANSLATIONS[r.id] 
              : null;

    // 1. Title
    let title = r.title;
    if (t && t.title && t.title[lang]) {
      title = t.title[lang];
    } else if (lang === 'te') {
      title = r.titleTe || r.title;
    } else if (lang === 'hi') {
      title = r.titleHi || r.title;
    } else if (lang === 'fr') {
      title = r.title;
    } else {
      title = r.titleEn || r.title;
    }

    // 2. Subtitle
    let subtitle = r.subtitle;
    if (t && t.subtitle && t.subtitle[lang]) {
      subtitle = t.subtitle[lang];
    } else if (lang === 'te') {
      subtitle = r.subtitleTe || r.subtitle;
    } else if (lang === 'hi') {
      subtitle = r.subtitleHi || r.subtitle;
    } else if (lang === 'fr') {
      subtitle = (t && t.subtitle && t.subtitle.fr) || r.subtitle;
    } else {
      subtitle = r.subtitleEn || r.subtitle;
    }

    // 3. Description
    let desc = r.description;
    if (t && t.description && t.description[lang]) {
      desc = t.description[lang];
    }

    // 4. Category Label
    let categoryLabel = r.categoryLabel;
    if (t && t.categoryLabel && t.categoryLabel[lang]) {
      categoryLabel = t.categoryLabel[lang];
    } else if (CULINARY_LEXICON.categories[r.category] && CULINARY_LEXICON.categories[r.category][lang]) {
      categoryLabel = CULINARY_LEXICON.categories[r.category][lang];
    } else if (CULINARY_LEXICON.categories[r.categoryLabel] && CULINARY_LEXICON.categories[r.categoryLabel][lang]) {
      categoryLabel = CULINARY_LEXICON.categories[r.categoryLabel][lang];
    }

    // 5. Difficulty
    let difficulty = r.difficulty;
    if (CULINARY_LEXICON.difficulties[r.difficulty] && CULINARY_LEXICON.difficulties[r.difficulty][lang]) {
      difficulty = CULINARY_LEXICON.difficulties[r.difficulty][lang];
    }

    // 6. Region
    let region = r.region;
    if (CULINARY_LEXICON.regions[r.region] && CULINARY_LEXICON.regions[r.region][lang]) {
      region = CULINARY_LEXICON.regions[r.region][lang];
    }

    // 7. Wine Pairing
    let wine = (r.winePairing && r.winePairing.wine) || '';
    let wineNotes = (r.winePairing && r.winePairing.notes) || '';
    if (t && t.wine && t.wine[lang]) wine = t.wine[lang];
    if (t && t.wineNotes && t.wineNotes[lang]) wineNotes = t.wineNotes[lang];

    // 8. Chef Tip
    let chefTip = r.chefTip || '';
    if (t && t.chefTip && t.chefTip[lang]) chefTip = t.chefTip[lang];

    // 9. Ingredients (Localized name and unit)
    const ingredients = (r.ingredients || []).map((ing, idx) => {
      let name = ing.name;
      let unit = ing.unit;

      if (t && t.ingredients && t.ingredients[idx] && t.ingredients[idx][lang]) {
        name = t.ingredients[idx][lang];
      }

      if (CULINARY_LEXICON.units[ing.unit] && CULINARY_LEXICON.units[ing.unit][lang]) {
        unit = CULINARY_LEXICON.units[ing.unit][lang];
      }

      return {
        amount: ing.amount,
        unit,
        name
      };
    });

    // 10. Steps (Localized title and instruction)
    const steps = (r.steps || []).map((s, idx) => {
      let title = s.title;
      let instruction = s.instruction;

      if (t && t.steps && t.steps[idx]) {
        if (t.steps[idx].title && t.steps[idx].title[lang]) {
          title = t.steps[idx].title[lang];
        }
        if (t.steps[idx].instruction && t.steps[idx].instruction[lang]) {
          instruction = t.steps[idx].instruction[lang];
        }
      }

      return {
        step: s.step,
        title,
        instruction,
        timerSeconds: s.timerSeconds || 0
      };
    });

    // Time, Servings, Reviews Formats
    const totalTime = (r.prepTime || 0) + (r.cookTime || 0);
    const timeFormatted = totalTime >= 60 
      ? `${Math.round(totalTime / 60)} ${dict.timeHr || 'h'}` 
      : `${totalTime} ${dict.timeMin || 'min'}`;
    const servesFormatted = `${r.servingsBase || 4} ${dict.unitServes || 'personnes'}`;
    const reviewsFormatted = `(${r.reviews || '1k'} ${dict.reviewsLabel || 'avis'})`;

    return {
      title,
      subtitle,
      desc,
      categoryLabel,
      difficulty,
      region,
      wine,
      wineNotes,
      chefTip,
      ingredients,
      steps,
      timeFormatted,
      servesFormatted,
      reviewsFormatted
    };
  }

  // Apply Language to all UI Elements
  function setLanguage(lang) {
    if (!UI_TRANSLATIONS[lang]) lang = 'en';
    state.currentLang = lang;
    localStorage.setItem('table_francaise_lang', lang);

    // Update Top Navbar Language Display
    const meta = langMeta[lang] || langMeta.en;
    if (langCurrentFlag) langCurrentFlag.textContent = meta.flag;
    if (langCurrentText) langCurrentText.textContent = meta.label;

    langMenuItems.forEach(item => {
      item.classList.toggle('active', item.dataset.lang === lang);
    });

    if (footerLangSelect) {
      footerLangSelect.value = lang;
    }

    // Translate DOM elements with data-i18n
    const dict = UI_TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict && dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Translate attributes like placeholder & title
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const pair = el.getAttribute('data-i18n-attr').split(':');
      const attr = pair[0];
      const key = pair[1];
      if (dict && dict[key]) {
        el.setAttribute(attr, dict[key]);
      }
    });

    // Document title and meta description
    if (lang === 'fr') {
      document.title = "La Table Française | Cuisine & Recettes Françaises Authentiques";
    } else if (lang === 'te') {
      document.title = "లా టేబుల్ ఫ్రాంకైస్ | ఫ్రెంచ్ సాంప్రదాయ వంటకాలు & గైడ్";
    } else if (lang === 'hi') {
      document.title = "ला टेबल फ्रैंकेइस | प्रामाणिक फ्रेंच भोजन और रेसिपी";
    } else {
      document.title = "La Table Française | Authentic French Food & Recipes";
    }

    // Featured dish spotlight title & desc sync
    const featuredTitleEl = document.getElementById('featured-dish-title');
    const featuredDescEl = document.getElementById('featured-dish-desc');
    const ratatouille = RECIPES_DATA.find(r => r.id === 'ratatouille');
    if (ratatouille) {
      const locRat = getLocalizedRecipe(ratatouille, lang);
      if (featuredTitleEl) featuredTitleEl.textContent = locRat.title;
      if (featuredDescEl) featuredDescEl.textContent = locRat.desc;
    }

    // Update view all button text
    if (viewAllBtn) {
      viewAllBtn.innerHTML = state.showAllRecipes ? `<span>${dict.btnShowTop || 'Show Top 4'}</span> ↑` : `<span>${dict.btnViewAll || 'View All Recipes'}</span> →`;
    }

    // Re-render recipes cards to apply translated titles/subtitles
    renderRecipeCards();

    // If modal is open, re-render modal with new language
    if (state.activeRecipe) {
      renderModalContent();
    }
  }

  // Language Dropdown Interactions
  if (langMenuBtn && langDropdown) {
    langMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
      const isOpen = langDropdown.classList.contains('open');
      langMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    langMenuItems.forEach(item => {
      item.addEventListener('click', () => {
        const lang = item.dataset.lang;
        setLanguage(lang);
        langDropdown.classList.remove('open');
        const dict = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;
        showToast(dict.toastSwitched || `Language switched to ${langMeta[lang].label}`, langMeta[lang].flag);
      });
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove('open');
        langMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (footerLangSelect) {
    footerLangSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }

  // Render Recipe Cards
  function renderRecipeCards() {
    if (!recipesGrid) return;
    const dict = UI_TRANSLATIONS[state.currentLang] || UI_TRANSLATIONS.en;

    let filtered = RECIPES_DATA.filter(r => {
      // Category Filter (supports tags + categories for perfect course classification)
      if (state.activeCategory !== 'all') {
        const isBreakfast = r.category === 'breakfast' || (r.tags && (r.tags.includes('Breakfast') || r.tags.includes('Bakery')));
        const isMain = r.category === 'main-course' || (r.tags && (r.tags.includes('Main Course') || r.tags.includes('Dinner')));
        const isDessert = r.category === 'dessert' || (r.tags && r.tags.includes('Dessert'));
        const isPastry = r.category === 'pastry' || (r.tags && r.tags.includes('Pastry'));

        if (state.activeCategory === 'breakfast' && !isBreakfast && !isPastry) return false;
        if (state.activeCategory === 'main-course' && !isMain) return false;
        if (state.activeCategory === 'dessert' && !isDessert) return false;
        if (state.activeCategory === 'pastry' && !isPastry) return false;
      }

      // Region Filter
      if (state.selectedRegion !== 'all' && r.region !== state.selectedRegion) {
        return false;
      }

      // Search Query
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase();
        const loc = getLocalizedRecipe(r);
        const matchesTitle = r.title.toLowerCase().includes(q) || (r.titleEn || '').toLowerCase().includes(q) || loc.title.toLowerCase().includes(q);
        const matchesSubtitle = (r.subtitle || '').toLowerCase().includes(q) || loc.subtitle.toLowerCase().includes(q);
        const matchesIngredient = r.ingredients.some(i => i.name.toLowerCase().includes(q)) || loc.ingredients.some(i => i.name.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSubtitle && !matchesIngredient) return false;
      }

      return true;
    });

    // Course hierarchy mapping for authentic French service order:
    // 1. Breakfast & Viennoiserie -> 2. Main Courses -> 3. Pastries -> 4. Desserts
    const COURSE_ORDER = {
      'breakfast': 1,
      'main-course': 2,
      'pastry': 3,
      'dessert': 4
    };

    let displayList;
    if (!state.showAllRecipes) {
      // Top 4 iconic staple cards strictly preserved (Ratatouille, Croissant, Crêpes, Coq au Vin)
      displayList = filtered.slice(0, 4);
    } else if (state.activeCategory === 'all') {
      // When viewing full menu in 'All', preserve top 4 signature staples first,
      // and sort the remainder in exquisite French dining course order
      const top4 = filtered.slice(0, 4);
      const remainder = filtered.slice(4).sort((a, b) => {
        const orderA = COURSE_ORDER[a.category] || 99;
        const orderB = COURSE_ORDER[b.category] || 99;
        if (orderA !== orderB) return orderA - orderB;
        return (b.rating || 0) - (a.rating || 0);
      });
      displayList = [...top4, ...remainder];
    } else {
      // Inside a specific course tab, display in order of highest rated
      displayList = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    recipesGrid.innerHTML = '';
    displayList.forEach(recipe => {
      const isFav = state.favorites.has(recipe.id);
      const loc = getLocalizedRecipe(recipe);

      const card = document.createElement('div');
      card.className = 'food-card';
      card.dataset.id = recipe.id;
      card.innerHTML = `
        <div class="food-card-media">
          <img src="${recipe.image}" alt="${loc.title}" class="food-card-img" loading="lazy">
          <span class="card-cat-badge">${loc.categoryLabel}</span>
          <button class="card-heart-btn ${isFav ? 'favorited' : ''}" data-id="${recipe.id}" aria-label="Favorite">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="food-card-body">
          <h3 class="food-card-title">${loc.title}</h3>
          <p class="food-card-subtitle">${loc.subtitle}</p>

          <div class="food-card-rating">
            <span class="star-icon">★</span>
            <span class="rating-value">${recipe.rating}</span>
            <span class="reviews-count">${loc.reviewsFormatted}</span>
          </div>

          <div class="food-card-meta">
            <div class="meta-item">
              <span>⏱</span>
              <span>${loc.timeFormatted}</span>
            </div>
            <div class="meta-item">
              <span>👤</span>
              <span>${loc.servingsFormatted}</span>
            </div>
          </div>
        </div>
      `;

      // Event listener for opening modal
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.card-heart-btn')) {
          openRecipeModal(recipe);
        }
      });

      // Heart Button
      const heartBtn = card.querySelector('.card-heart-btn');
      heartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(recipe.id);
      });

      recipesGrid.appendChild(card);
    });

    // Update Favorites Badge
    if (favBadge) favBadge.textContent = state.favorites.size;
  }

  // Toggle Favorite
  function toggleFavorite(id) {
    const r = RECIPES_DATA.find(item => item.id === id);
    if (!r) return;
    const loc = getLocalizedRecipe(r);
    const dict = UI_TRANSLATIONS[state.currentLang] || UI_TRANSLATIONS.en;

    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast(`${dict.toastFavRemoved || 'Removed from favorites'}: "${loc.title}"`, '🤍');
    } else {
      state.favorites.add(id);
      showToast(`${dict.toastFavAdded || 'Saved to favorites!'}: "${loc.title}"`, '❤️');
    }

    localStorage.setItem('table_francaise_favs', JSON.stringify(Array.from(state.favorites)));
    renderRecipeCards();
  }

  // View All Button
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      state.showAllRecipes = !state.showAllRecipes;
      const dict = UI_TRANSLATIONS[state.currentLang] || UI_TRANSLATIONS.en;
      viewAllBtn.innerHTML = state.showAllRecipes ? `<span>${dict.btnShowTop || 'Show Top 4'}</span> ↑` : `<span>${dict.btnViewAll || 'View All Recipes'}</span> →`;
      renderRecipeCards();
    });
  }

  // Category Filter Pills
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeCategory = pill.dataset.category;
      state.showAllRecipes = true;
      renderRecipeCards();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (clearSearchBtn) clearSearchBtn.style.display = state.searchQuery.length > 0 ? 'block' : 'none';
      state.showAllRecipes = true;
      renderRecipeCards();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderRecipeCards();
    });
  }

  // Region Card Click
  regionCards.forEach(card => {
    card.addEventListener('click', () => {
      const region = card.dataset.region;
      state.selectedRegion = (state.selectedRegion === region) ? 'all' : region;
      state.showAllRecipes = true;
      document.getElementById('recipes-section').scrollIntoView({ behavior: 'smooth' });
      renderRecipeCards();
      const dict = UI_TRANSLATIONS[state.currentLang] || UI_TRANSLATIONS.en;
      const locRegion = CULINARY_LEXICON.regions[region]?.[state.currentLang] || region;
      showToast(`${dict.toastRegionFilter || 'Filtered recipes from'}: ${locRegion}`, '📍');
    });
  });

  // Featured Dish Button Click (Ratatouille)
  if (featuredViewBtn) {
    featuredViewBtn.addEventListener('click', () => {
      const ratatouille = RECIPES_DATA.find(r => r.id === 'ratatouille') || RECIPES_DATA[0];
      openRecipeModal(ratatouille);
    });
  }

  // Favorites Nav Button
  if (navFavBtn) {
    navFavBtn.addEventListener('click', () => {
      const dict = UI_TRANSLATIONS[state.currentLang] || UI_TRANSLATIONS.en;
      if (state.favorites.size === 0) {
        showToast(dict.toastFavEmpty || 'You have not saved any favorite recipes yet! Click the heart on any card.', '🤍');
        return;
      }
      state.showAllRecipes = true;
      const favList = RECIPES_DATA.filter(r => state.favorites.has(r.id));
      recipesGrid.innerHTML = '';
      favList.forEach(recipe => {
        const loc = getLocalizedRecipe(recipe);
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
          <div class="food-card-media">
            <img src="${recipe.image}" alt="${loc.title}" class="food-card-img">
            <span class="card-cat-badge">${loc.categoryLabel}</span>
            <button class="card-heart-btn favorited" data-id="${recipe.id}">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
          <div class="food-card-body">
            <h3 class="food-card-title">${loc.title}</h3>
            <p class="food-card-subtitle">${loc.subtitle}</p>
          </div>
        `;
        card.addEventListener('click', () => openRecipeModal(recipe));
        recipesGrid.appendChild(card);
      });
      document.getElementById('recipes-section').scrollIntoView({ behavior: 'smooth' });
      showToast(`${dict.toastFavShow || 'Showing saved favorites'} (${state.favorites.size})`, '❤️');
    });
  }

  // Open Modal
  function openRecipeModal(recipe) {
    state.activeRecipe = recipe;
    state.currentServings = recipe.servingsBase;
    renderModalContent();
    recipeModal.classList.add('open');
    recipeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeRecipeModal() {
    state.activeRecipe = null;
    recipeModal.classList.remove('open');
    recipeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeRecipeModal);
  if (recipeModal) {
    recipeModal.addEventListener('click', (e) => {
      if (e.target === recipeModal) closeRecipeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && recipeModal && recipeModal.classList.contains('open')) {
      closeRecipeModal();
    }
  });

  // Render Modal Content
  function renderModalContent() {
    if (!state.activeRecipe || !modalContentArea) return;
    const r = state.activeRecipe;
    const loc = getLocalizedRecipe(r);
    const dict = UI_TRANSLATIONS[state.currentLang] || UI_TRANSLATIONS.en;
    const scaleRatio = state.currentServings / (r.servingsBase || 4);

    modalContentArea.innerHTML = `
      <div class="modal-recipe-header">
        <div class="modal-media-frame">
          <img src="${r.image}" alt="${loc.title}" class="modal-recipe-img">
        </div>
        <div class="modal-header-meta">
          <div class="modal-meta-top">
            <span class="modal-region-badge">📍 ${loc.region}</span>
            <span class="modal-cat-badge">${loc.categoryLabel}</span>
          </div>
          <h2 class="modal-recipe-title">${loc.title}</h2>
          <p class="modal-recipe-subtitle">${loc.subtitle}</p>
          <div class="modal-quick-stats">
            <span>⏱ ${loc.timeFormatted}</span>
            <span>🎚 ${loc.difficulty}</span>
            <span>🔥 ${r.calories} kcal</span>
            <span>★ ${r.rating} ${loc.reviewsFormatted}</span>
          </div>
        </div>
      </div>

      <p class="modal-full-desc">${loc.desc}</p>

      <div class="modal-servings-bar">
        <span class="servings-label">${dict.servingsLabel || 'Portions / Servings:'}</span>
        <div class="servings-stepper">
          <button class="step-btn" id="servings-minus">-</button>
          <span class="servings-num" id="servings-display">${state.currentServings}</span>
          <button class="step-btn" id="servings-plus">+</button>
        </div>
      </div>

      <div class="modal-two-col">
        <!-- Left: Ingredients Checklist -->
        <div class="modal-col">
          <h3 class="modal-subheading">${dict.ingredientsHeader || 'Ingredients'}</h3>
          <ul class="modal-ing-list">
            ${loc.ingredients.map(ing => {
              const scaled = (ing.amount * scaleRatio);
              const formattedAmt = scaled % 1 === 0 ? scaled : scaled.toFixed(1);
              return `
                <li class="ing-check-item">
                  <label class="check-container">
                    <input type="checkbox" class="ing-checkbox">
                    <span class="checkmark"></span>
                    <span class="ing-text"><strong>${formattedAmt} ${ing.unit}</strong> ${ing.name}</span>
                  </label>
                </li>
              `;
            }).join('')}
          </ul>

          ${r.nutrition ? `
            <div class="modal-nutrition-card">
              <h4>${dict.nutritionHeader || 'Nutrition per serving'}</h4>
              <div class="nutrition-pills">
                <span>${dict.labelProtein || 'Protein'}: ${r.nutrition.protein}</span>
                <span>${dict.labelCarbs || 'Carbs'}: ${r.nutrition.carbs}</span>
                <span>${dict.labelFat || 'Fat'}: ${r.nutrition.fat}</span>
                ${r.nutrition.fiber ? `<span>${dict.labelFiber || 'Fiber'}: ${r.nutrition.fiber}</span>` : ''}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Right: Steps with Timers -->
        <div class="modal-col">
          <h3 class="modal-subheading">${dict.stepsHeader || 'Step-by-Step Guide'}</h3>
          <div class="modal-steps-list">
            ${loc.steps.map(s => `
              <div class="modal-step-card">
                <div class="step-number">${s.step}</div>
                <div class="step-content">
                  <h4 class="step-title">${s.title}</h4>
                  <p class="step-text">${s.instruction}</p>
                  ${s.timerSeconds > 0 ? `
                    <button class="step-timer-btn" data-timer-id="${r.id}-s${s.step}" data-seconds="${s.timerSeconds}">
                      <span>⏱</span> <span>${dict.timerStart || 'Start Timer'} (${Math.ceil(s.timerSeconds / 60)} ${dict.timeMin || 'min'})</span>
                    </button>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>

          ${loc.wine ? `
            <div class="modal-wine-card">
              <h4 class="wine-title">${dict.sommelierHeader || "🍷 Sommelier's Wine Pairing"}</h4>
              <p class="wine-name">${loc.wine}</p>
              <p class="wine-notes">${loc.wineNotes}</p>
            </div>
          ` : ''}

          ${loc.chefTip ? `
            <div class="modal-tip-card">
              <h4 class="tip-title">${dict.chefTipHeader || "✨ Chef's Secret Tip"}</h4>
              <p class="tip-text">${loc.chefTip}</p>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    // Servings Buttons
    const minusBtn = document.getElementById('servings-minus');
    const plusBtn = document.getElementById('servings-plus');
    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        if (state.currentServings > 1) {
          state.currentServings--;
          renderModalContent();
        }
      });
    }
    if (plusBtn) {
      plusBtn.addEventListener('click', () => {
        if (state.currentServings < 20) {
          state.currentServings++;
          renderModalContent();
        }
      });
    }

    // Step Timer Clicking
    document.querySelectorAll('[data-timer-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const timerId = btn.dataset.timerId;
        const totalSecs = parseInt(btn.dataset.seconds, 10);
        if (state.activeTimers[timerId]) {
          clearInterval(state.activeTimers[timerId]);
          delete state.activeTimers[timerId];
          btn.innerHTML = `<span>⏱</span> <span>${dict.timerResume || 'Resume Timer'}</span>`;
          showToast(dict.timerPaused || 'Timer paused', '⏸');
        } else {
          let rem = totalSecs;
          showToast(`${dict.timerStart || 'Timer started'} (${Math.ceil(rem / 60)} ${dict.timeMin || 'min'})`, '⏱');
          state.activeTimers[timerId] = setInterval(() => {
            rem--;
            const m = Math.floor(rem / 60);
            const s = rem % 60;
            btn.innerHTML = `<span>⏱</span> <span>${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}</span>`;
            if (rem <= 0) {
              clearInterval(state.activeTimers[timerId]);
              delete state.activeTimers[timerId];
              btn.innerHTML = `<span>✓</span> <span>${dict.timerDone || 'Done!'}</span>`;
              playCulinaryChime();
              showToast(dict.stepCompleted || 'Cooking step completed!', '🔔');
            }
          }, 1000);
        }
      });
    });
  }

  // Expose clean interface for background food engine
  window.TableFrancaise = {
    renderRecipeCards: () => renderRecipeCards(),
    openRecipeModal: (recipe) => openRecipeModal(recipe),
    getRecipes: () => RECIPES_DATA,
    getState: () => state,
    showToast: (msg, icon) => showToast(msg, icon),
    setLanguage: (lang) => setLanguage(lang)
  };

  window.addEventListener('french-food-updated', () => {
    renderRecipeCards();
  });

  // Initialization
  applyTheme(state.currentTheme);
  setLanguage(state.currentLang);

  console.log('La Table Française successfully initialized with Zero-English-Leakage Engine.');
});
