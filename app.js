// ==========================================================================
// V.O.C. — Vaderland, Onafhankelijkheid & Cultuur
// Presentation & Portal Application Controller
// ==========================================================================

let currentSlideIndex = 0;
let autoPlayInterval = null;
let isAutoPlaying = false;
let activeChartInstance = null;
let currentTheme = 'dark'; // 'dark' | 'classic' | 'light'
let currentView = 'deck'; // 'deck' | 'portal'

// DOM Elements
const slideContent = document.getElementById('slideContent');
const slideCounter = document.getElementById('slideCounter');
const progressBar = document.getElementById('progressBar');
const progressTrack = document.getElementById('progressTrack');
const prevSlideBtn = document.getElementById('prevSlideBtn');
const nextSlideBtn = document.getElementById('nextSlideBtn');
const autoPlayBtn = document.getElementById('autoPlayBtn');
const autoPlayText = document.getElementById('autoPlayText');
const playIcon = document.getElementById('playIcon');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const printBtn = document.getElementById('printBtn');
const brandBtn = document.getElementById('brandBtn');

// Mode Switchers
const modeDeckBtn = document.getElementById('modeDeckBtn');
const modePortalBtn = document.getElementById('modePortalBtn');
const deckView = document.getElementById('deckView');
const portalView = document.getElementById('portalView');

// Drawer Elements
const openDrawerBtn = document.getElementById('openDrawerBtn');
const deckDrawerBtn = document.getElementById('deckDrawerBtn');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const slideDrawerOverlay = document.getElementById('slideDrawerOverlay');
const drawerGrid = document.getElementById('drawerGrid');

// Portal Elements
const portalSearchInput = document.getElementById('portalSearchInput');
const pillarPillsList = document.getElementById('pillarPillsList');
const portalSectionsContainer = document.getElementById('portalSectionsContainer');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSlide(currentSlideIndex);
  initSlideDrawer();
  initPortalView();
  setupEventListeners();
});

// ==========================================================================
// THEME MANAGEMENT
// ==========================================================================
function initTheme() {
  const saved = localStorage.getItem('voc_theme') || 'dark';
  setTheme(saved);
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('voc_theme', theme);
  
  // Update Chart if active
  if (activeChartInstance) {
    activeChartInstance.destroy();
    activeChartInstance = null;
    initSlideSpecialVisuals(slidesData[currentSlideIndex]);
  }
}

function cycleTheme() {
  if (currentTheme === 'dark') setTheme('classic');
  else if (currentTheme === 'classic') setTheme('light');
  else setTheme('dark');
}

// ==========================================================================
// VIEW SWITCHER (DECK vs PORTAL)
// ==========================================================================
function switchView(view) {
  currentView = view;
  if (view === 'deck') {
    deckView.style.display = 'flex';
    portalView.style.display = 'none';
    modeDeckBtn.classList.add('active');
    modePortalBtn.classList.remove('active');
    modeDeckBtn.setAttribute('aria-selected', 'true');
    modePortalBtn.setAttribute('aria-selected', 'false');
    renderSlide(currentSlideIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    deckView.style.display = 'none';
    portalView.style.display = 'block';
    modeDeckBtn.classList.remove('active');
    modePortalBtn.classList.add('active');
    modeDeckBtn.setAttribute('aria-selected', 'false');
    modePortalBtn.setAttribute('aria-selected', 'true');
    stopAutoPlay();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ==========================================================================
// SLIDE RENDERING ENGINE
// ==========================================================================
function renderSlide(index) {
  if (index < 0 || index >= slidesData.length) return;
  
  // Cleanup previous chart
  if (activeChartInstance) {
    activeChartInstance.destroy();
    activeChartInstance = null;
  }
  
  currentSlideIndex = index;
  const slide = slidesData[index];
  
  // Fade Transition
  slideContent.style.opacity = '0';
  slideContent.style.transform = 'translateY(8px)';
  
  setTimeout(() => {
    slideContent.innerHTML = generateSlideHTML(slide);
    initSlideSpecialVisuals(slide);
    updateControlsState();
    
    slideContent.style.opacity = '1';
    slideContent.style.transform = 'translateY(0)';
  }, 120);
}

// SVG Icon Helper
function getIconSVG(name) {
  const icons = {
    shield: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    'shield-check': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    anchor: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`,
    temple: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="22" x2="22" y2="22"/><line x1="4" y1="9" x2="4" y2="18"/><line x1="9" y1="9" x2="9" y2="18"/><line x1="15" y1="9" x2="15" y2="18"/><line x1="20" y1="9" x2="20" y2="18"/><path d="M2 9h20L12 2z"/></svg>`,
    factory: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H2v18z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>`,
    'building-factory': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H2v18z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>`,
    home: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    bolt: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    crown: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>`,
    compass: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    'users-group': `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  };
  return icons[name] || icons.shield;
}

// HTML Generator per slide type
function generateSlideHTML(slide) {
  // 1. Cover Slide (Slide 1)
  if (slide.type === 'cover') {
    return `
      <div class="slide-cover-layout" style="position: relative;">
        <!-- Original Yellow Speaker Indicator Line -->
        <div style="position: absolute; top: 1.5rem; left: 1.5rem; width: 6px; height: 35px; background: #F59E0B; border-radius: 4px; box-shadow: 0 0 14px #F59E0B;" title="Spreker A"></div>
        <div class="voc-logo-mask-orange" role="img" aria-label="V.O.C. Monogram"></div>
        <div class="slide-badge" style="margin-bottom: 1rem;">${slide.badge}</div>
        <h1 class="cover-title">${slide.title}</h1>
        <div class="cover-subtitle">${slide.subtitle}</div>
        <p style="max-width: 650px; font-size: 1.15rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
          ${slide.content}
        </p>
        <div class="cover-pennant">
          <div class="pennant-badge">
            ${getIconSVG('shield')}
            <span>Vaderland</span>
          </div>
          <div class="pennant-badge">
            ${getIconSVG('anchor')}
            <span>Onafhankelijkheid</span>
          </div>
          <div class="pennant-badge">
            ${getIconSVG('temple')}
            <span>Cultuur</span>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Pillars Overview (Slide 4)
  if (slide.type === 'pillars-overview') {
    const pillarsHTML = slide.pillars.map(p => `
      <div class="slide-info-card" onclick="jumpToChapter('${p.name}')" style="cursor: pointer;">
        <div class="slide-card-header">
          <span class="slide-card-icon">${getIconSVG(p.icon)}</span>
          <span style="font-family: var(--font-serif); font-size: 1.1rem; font-weight: 800; color: var(--accent-orange-light);">${p.num}</span>
          <div class="slide-card-title">${p.name}</div>
        </div>
        <div class="slide-card-desc">${p.desc}</div>
      </div>
    `).join('');

    return `
      <div>
        <div class="slide-badge-row">
          <div class="slide-badge">${slide.badge}</div>
          <div class="slide-chapter-tag">${slide.chapter}</div>
        </div>
        <h2 class="slide-main-title">${slide.title}</h2>
        <div class="slide-sub-title">${slide.subtitle}</div>
        <div class="slide-grid-cards" style="grid-template-columns: repeat(3, 1fr);">
          ${pillarsHTML}
        </div>
      </div>
    `;
  }

  // 3. Section Break Slides (Slides 5, 9, 13, 17, 21, 25, 29)
  if (slide.type === 'section-break') {
    const themeIconMap = {
      veiligheid: { icon: 'shield', badge: 'Defensie & Soevereiniteit', title: 'Weerbaar Nederland', tags: ['2,05% BBP', 'Krijgsmacht', 'Noordzee 24/7'] },
      economie: { icon: 'factory', badge: 'Nationale Maakindustrie', title: 'Economische Regie', tags: ['Productie', 'Werkgelegenheid', 'Innovatie'] },
      migratie: { icon: 'temple', badge: 'Taal, Erfgoed & Grenzen', title: 'Culturele Trots', tags: ['Integratie', 'Tradities', 'Rechtsorde'] },
      wonen: { icon: 'home', badge: 'Bouwen & Leefbaarheid', title: 'Woningbouwregie', tags: ['Betaalbaar', 'Starters', 'Rijksplanning'] },
      klimaat: { icon: 'bolt', badge: 'Energiezekerheid', title: 'Betaalbare Energie', tags: ['Kerncentrales', 'Geen Lasten', 'Haalbaar'] },
      historie: { icon: 'crown', badge: 'Historische Grootmacht', title: 'De Lage Landen', tags: ['Vlaanderen', 'Maritiem Erfgoed', 'Allianties'] },
      conclusie: { icon: 'compass', badge: 'Toekomstvisie', title: 'Onze Kernwaarden', tags: ['Autonoom', 'Weerbaar', 'Trots'] }
    };
    const feature = themeIconMap[slide.theme] || themeIconMap.veiligheid;

    const bulletsHTML = slide.bullets.map(b => `
      <li class="bullet-item">
        <span class="bullet-dot"></span>
        <div><strong>${b.strong.replace(/:$/, '')}</strong></div>
      </li>
    `).join('');

    const rightCardContent = slide.hasFlagMap ? `
      <div class="section-feature-card" style="padding: 1.5rem;">
        <div class="feature-card-badge">Historisch Grondgebied</div>
        <div class="feature-card-title" style="margin-bottom: 0.5rem;">Nederlandse Economie</div>
        ${typeof getNetherlandsFlagMapSVG === 'function' ? getNetherlandsFlagMapSVG() : ''}
        <div class="feature-card-desc" style="margin-top: 0.5rem; font-size: 0.85rem;">Investeringen in nationale productie, vitale infrastructuur en eigen maakindustrie.</div>
      </div>
    ` : `
      <div class="section-feature-card">
        <div class="feature-card-icon-wrap">
          ${getIconSVG(feature.icon)}
        </div>
        <div class="feature-card-badge">${feature.badge}</div>
        <div class="feature-card-title">${feature.title}</div>
        <div class="feature-card-desc">Strategische prioriteit binnen het nationale herstel- en beleidsprogramma van de V.O.C.</div>
        <div class="feature-card-tags">
          ${feature.tags.map(t => `<span class="feature-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;

    return `
      <div class="slide-section-break-grid">
        <div class="section-break-left">
          <div class="section-pill-tag">
            ${getIconSVG(feature.icon)}
            <span>${slide.badge || `PIJLER 0${slide.chapterNum || ''}`}</span>
          </div>
          <h2 class="section-hero-title">
            ${slide.speakerColor ? `<span class="speaker-bar-indicator" style="background-color: ${slide.speakerColor}; color: ${slide.speakerColor};"></span>` : ''}<span>${slide.title}</span>
          </h2>
          <div class="section-hero-subtitle">${slide.subtitle}</div>
          <p class="section-lead-text">${slide.content}</p>
          <ul class="bullets-list">
            ${bulletsHTML}
          </ul>
        </div>
        
        ${rightCardContent}
      </div>
    `;
  }

  // 4. Data Chart Slide (Slide 6 - Defensie)
  if (slide.type === 'data-chart') {
    const bulletsHTML = slide.bullets.map(b => `
      <li class="bullet-item">
        <span class="bullet-dot"></span>
        <div><strong>${b.strong.replace(/:$/, '')}</strong></div>
      </li>
    `).join('');

    return `
      <div class="slide-split-layout">
        <div>
          <div class="slide-badge-row">
            <div class="slide-badge">${slide.badge}</div>
            <div class="slide-chapter-tag">${slide.chapter}</div>
          </div>
          <h2 class="slide-main-title">${slide.title}</h2>
          <div class="slide-sub-title">${slide.subtitle}</div>
          <ul class="bullets-list">
            ${bulletsHTML}
          </ul>
        </div>
        
        <div class="chart-container-box">
          <div class="chart-header">
            <div>
              <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">NAVO Uitgavennorm</div>
              <div class="chart-stat-hero">2,05% <span style="font-size: 1rem; color: var(--accent-emerald);">✔ Boven Norm</span></div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 0.8rem; color: var(--text-muted);">2026 Prognose</div>
              <div style="font-size: 1.3rem; font-weight: 700; color: var(--text-highlight);">€26,8 Mld.</div>
            </div>
          </div>
          <div class="chart-canvas-wrap">
            <canvas id="defenseChartCanvas"></canvas>
          </div>
          <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--text-muted); text-align: center;">
            Bron: Ministerie van Defensie / Miljoenennota (NAVO Norm 2.0% BBP)
          </div>
        </div>
      </div>
    `;
  }

  // 5. Security Map & Tactical Readiness (Slide 7)
  if (slide.type === 'security-map') {
    const bulletsHTML = slide.bullets.map(b => `
      <li class="bullet-item">
        <span class="bullet-dot"></span>
        <div><strong>${b.strong.replace(/:$/, '')}</strong></div>
      </li>
    `).join('');

    const highlightsHTML = slide.mapHighlights.map(h => `
      <div class="radar-item">
        <div>
          <div class="radar-title">${h.title}</div>
          <div class="radar-desc">${h.detail}</div>
        </div>
      </div>
    `).join('');

    return `
      <div class="slide-split-layout">
        <div>
          <div class="slide-badge-row">
            <div class="slide-badge">${slide.badge}</div>
            <div class="slide-chapter-tag">${slide.chapter}</div>
          </div>
          <h2 class="slide-main-title">${slide.title}</h2>
          <div class="slide-sub-title">${slide.subtitle}</div>
          <ul class="bullets-list">
            ${bulletsHTML}
          </ul>
        </div>
        
        <div class="map-visual-box">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
            <span style="font-family: var(--font-serif); font-weight: 700; font-size: 1.05rem; color: var(--text-highlight);">Nationale Veiligheid & Paraatheid</span>
            <span style="font-size: 0.75rem; padding: 0.2rem 0.6rem; background: rgba(56, 189, 248, 0.2); color: #38bdf8; border-radius: var(--radius-pill); font-weight: 700;">24/7 ACTIEF</span>
          </div>
          ${typeof getNetherlandsTacticalMapSVG === 'function' ? getNetherlandsTacticalMapSVG() : ''}
          <div class="radar-highlights-list" style="margin-top: 0.5rem;">
            ${highlightsHTML}
          </div>
        </div>
      </div>
    `;
  }

  // 6. Climate Charts (Slide 22)
  if (slide.type === 'climate-chart') {
    const bulletsHTML = slide.bullets.map(b => `
      <li class="bullet-item">
        <span class="bullet-dot"></span>
        <div><strong>${b.strong.replace(/:$/, '')}</strong></div>
      </li>
    `).join('');

    return `
      <div class="slide-split-layout">
        <div>
          <div class="slide-badge-row">
            <div class="slide-badge">${slide.badge}</div>
            <div class="slide-chapter-tag">${slide.chapter}</div>
          </div>
          <h2 class="slide-main-title">${slide.title}</h2>
          <div class="slide-sub-title">${slide.subtitle}</div>
          <ul class="bullets-list">
            ${bulletsHTML}
          </ul>
        </div>
        
        <div class="chart-container-box">
          <div class="chart-header">
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Klimaatuitgaven 2023</div>
              <div class="chart-stat-hero">€40,6 Mld.</div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 0.8rem; color: var(--text-muted);">Subsidies & Voordelen</div>
              <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-orange);">€34,3 Mld. (79%)</div>
            </div>
          </div>
          <div class="chart-canvas-wrap">
            <canvas id="climateChartCanvas"></canvas>
          </div>
          <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--text-muted); text-align: center;">
            Klimaatuitgaven per sector en doel: Personenauto's ~€18 Mld. &bull; Zonnepanelen ~€10 Mld.
          </div>
        </div>
      </div>
    `;
  }

  // 7. Gas Price Chart (Slide 23)
  if (slide.type === 'gas-chart') {
    const bulletsHTML = slide.bullets.map(b => `
      <li class="bullet-item">
        <span class="bullet-dot"></span>
        <div><strong>${b.strong.replace(/:$/, '')}</strong></div>
      </li>
    `).join('');

    return `
      <div class="slide-split-layout">
        <div>
          <div class="slide-badge-row">
            <div class="slide-badge">${slide.badge}</div>
            <div class="slide-chapter-tag">${slide.chapter}</div>
          </div>
          <h2 class="slide-main-title">${slide.title}</h2>
          <div class="slide-sub-title">${slide.subtitle}</div>
          <ul class="bullets-list">
            ${bulletsHTML}
          </ul>
        </div>
        
        <div class="chart-container-box">
          <div class="chart-header">
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Consumentenprijs Gas</div>
              <div class="chart-stat-hero">€2,10 <span style="font-size: 1rem; color: var(--text-muted);">/ m³</span></div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 0.8rem; color: var(--text-muted);">Prijsstijging</div>
              <div style="font-size: 1.2rem; font-weight: 700; color: var(--accent-crimson);">+208% (2019-23)</div>
            </div>
          </div>
          <div class="chart-canvas-wrap">
            <canvas id="gasChartCanvas"></canvas>
          </div>
          <div style="margin-top: 0.75rem; font-size: 0.75rem; color: var(--text-muted); text-align: center;">
            57% (€1,2 Mld.) van het budget bestaat uit directe belastingen, ODE en heffingen
          </div>
        </div>
      </div>
    `;
  }

  // 8. Historical Map (Slide 26 - Vlaanderen)
  if (slide.type === 'historical-map') {
    const bulletsHTML = slide.bullets.map(b => `
      <li class="bullet-item">
        <span class="bullet-dot"></span>
        <div><strong>${b.strong.replace(/:$/, '')}</strong></div>
      </li>
    `).join('');

    return `
      <div class="slide-split-layout">
        <div>
          <div class="slide-badge-row">
            <div class="slide-badge">${slide.badge}</div>
            <div class="slide-chapter-tag">${slide.chapter}</div>
          </div>
          <h2 class="slide-main-title">${slide.title}</h2>
          <div class="slide-sub-title">${slide.subtitle}</div>
          <ul class="bullets-list">
            ${bulletsHTML}
          </ul>
        </div>
        
        <div class="chart-container-box" style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2.5rem;">
          <div style="font-family: var(--font-serif); font-size: 1.8rem; font-weight: 800; color: var(--accent-orange-light); margin-bottom: 0.5rem;">
            DE LAGE LANDEN
          </div>
          <div style="font-size: 1.1rem; color: var(--text-primary); font-weight: 600; margin-bottom: 1.5rem;">
            Nederland & Vlaanderen
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.04); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.75rem; color: var(--text-muted);">Gezamenlijke Bevolking</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--text-highlight);">~25 Miljoen</div>
            </div>
            <div style="background: rgba(255,255,255,0.04); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
              <div style="font-size: 0.75rem; color: var(--text-muted);">Economisch Knooppunt</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--accent-orange-light);">Top 6 Wereld</div>
            </div>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
            De samensmelting van Rotterdam en Antwerpen vormt de onbetwiste maritieme en industriële spil van West-Europa.
          </p>
        </div>
      </div>
    `;
  }

  // 9. Outro Flag Slide (Slide 32)
  if (slide.type === 'flag-outro') {
    return `
      <div class="slide-outro-layout">
        <div class="flag-band-top"></div>
        <div class="flag-band-middle">
          <img src="VOC.svg.webp" alt="V.O.C. Monogram" style="height: 175px; max-width: 90%; object-fit: contain;">
        </div>
        <div class="flag-band-bottom">
          <h1 style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 900; letter-spacing: 0.25em; color: #ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.8); margin-bottom: 0.25rem;">
            ${slide.title}
          </h1>
          <div style="font-family: var(--font-serif); font-size: 1.15rem; color: #ffffff; letter-spacing: 0.08em; font-weight: 600; text-shadow: 0 2px 8px rgba(0,0,0,0.8);">
            ${slide.subtitle}
          </div>
        </div>
      </div>
    `;
  }

  // 10. Default Cards Grid / Standard Presentation Slide
  const bulletsHTML = (slide.bullets || []).map(b => `
    <li class="bullet-item">
      <span class="bullet-dot"></span>
      <div><strong>${b.strong.replace(/:$/, '')}</strong></div>
    </li>
  `).join('');

  const cardsHTML = slide.cards ? `
    <div class="slide-grid-cards">
      ${slide.cards.map(c => `
        <div class="slide-info-card">
          <div class="slide-card-header">
            <span class="slide-card-icon">${getIconSVG(c.icon) || c.icon}</span>
            <div class="slide-card-title">${c.title}</div>
          </div>
          <div class="slide-card-desc">${c.desc}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  return `
    <div>
      <div class="slide-badge-row">
        <div class="slide-badge">${slide.badge}</div>
        <div class="slide-chapter-tag">${slide.chapter}</div>
      </div>
      <h2 class="slide-main-title">${slide.title}</h2>
      <div class="slide-sub-title">${slide.subtitle}</div>
      ${slide.content ? `<p style="font-size: 1.05rem; color: var(--text-secondary); margin-bottom: 1.5rem; max-width: 900px; line-height: 1.5;">${slide.content}</p>` : ''}
      <ul class="bullets-list" style="margin-bottom: 1.5rem;">
        ${bulletsHTML}
      </ul>
      ${cardsHTML}
    </div>
  `;
}

// ==========================================================================
// SPECIAL VISUALIZATIONS & CHARTS
// ==========================================================================
function initSlideSpecialVisuals(slide) {
  // Slide 6: Defense Chart
  if (slide.id === 6) {
    const ctx = document.getElementById('defenseChartCanvas');
    if (!ctx) return;
    
    const isDark = currentTheme !== 'light';
    const textColor = isDark ? '#cbd5e1' : '#334155';
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

    activeChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2021', '2023', '2024', '2025 (P)', '2026 (P)'],
        datasets: [{
          label: 'Defensiebudget (€ Mld.)',
          data: [11.5, 15.4, 21.4, 24.0, 26.8],
          backgroundColor: [
            'rgba(249, 115, 22, 0.45)',
            'rgba(249, 115, 22, 0.6)',
            'rgba(249, 115, 22, 0.85)',
            'rgba(249, 115, 22, 0.95)',
            '#f97316'
          ],
          borderColor: '#f97316',
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` €${ctx.raw} Miljard`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 30,
            grid: { color: gridColor },
            ticks: { color: textColor, callback: (v) => `€${v}B` }
          },
          x: {
            grid: { display: false },
            ticks: { color: textColor }
          }
        }
      }
    });
  }

  // Slide 22: Climate Chart
  if (slide.id === 22) {
    const ctx = document.getElementById('climateChartCanvas');
    if (!ctx) return;
    
    const isDark = currentTheme !== 'light';
    const textColor = isDark ? '#cbd5e1' : '#334155';
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

    activeChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
          label: 'Totale Klimaatuitgaven (€ Mld.)',
          data: [23.4, 27.6, 29.8, 33.6, 40.6],
          backgroundColor: 'rgba(239, 68, 68, 0.75)',
          borderColor: '#ef4444',
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` €${ctx.raw} Miljard`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 45,
            grid: { color: gridColor },
            ticks: { color: textColor, callback: (v) => `€${v}B` }
          },
          x: {
            grid: { display: false },
            ticks: { color: textColor }
          }
        }
      }
    });
  }

  // Slide 23: Gas Price Trend Chart
  if (slide.id === 23) {
    const ctx = document.getElementById('gasChartCanvas');
    if (!ctx) return;
    
    const isDark = currentTheme !== 'light';
    const textColor = isDark ? '#cbd5e1' : '#334155';
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

    activeChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
          label: 'Gasprijs (€/m³)',
          data: [0.68, 0.72, 0.90, 1.55, 2.10],
          borderColor: '#f97316',
          backgroundColor: 'rgba(249, 115, 22, 0.15)',
          fill: true,
          tension: 0.35,
          pointBackgroundColor: '#f97316',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` €${ctx.raw.toFixed(2)} per m³`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 2.5,
            grid: { color: gridColor },
            ticks: { color: textColor, callback: (v) => `€${v}` }
          },
          x: {
            grid: { display: false },
            ticks: { color: textColor }
          }
        }
      }
    });
  }
}

// Update Bottom Controller State
function updateControlsState() {
  const total = slidesData.length;
  slideCounter.innerHTML = `Slide ${currentSlideIndex + 1} <span>/ ${total}</span>`;
  
  const pct = ((currentSlideIndex + 1) / total) * 100;
  progressBar.style.width = `${pct}%`;
  
  prevSlideBtn.disabled = currentSlideIndex === 0;
  nextSlideBtn.disabled = currentSlideIndex === total - 1;
  
  // Highlight active thumbnail in drawer
  document.querySelectorAll('.drawer-slide-thumb').forEach((thumb, idx) => {
    if (idx === currentSlideIndex) thumb.classList.add('current');
    else thumb.classList.remove('current');
  });
}

// ==========================================================================
// NAVIGATION CONTROLS
// ==========================================================================
function nextSlide() {
  if (currentSlideIndex < slidesData.length - 1) {
    renderSlide(currentSlideIndex + 1);
  } else if (isAutoPlaying) {
    // Loop back to start in autoplay
    renderSlide(0);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    renderSlide(currentSlideIndex - 1);
  }
}

function jumpToSlide(index) {
  switchView('deck');
  renderSlide(index);
  closeDrawer();
}

function jumpToChapter(themeName) {
  const foundIdx = slidesData.findIndex(s => s.chapter.toLowerCase().includes(themeName.toLowerCase()) || (s.pillars && s.pillars.some(p => p.name.toLowerCase() === themeName.toLowerCase())));
  if (foundIdx !== -1) {
    renderSlide(foundIdx);
  }
}

// Auto-Play Slideshow
function toggleAutoPlay() {
  if (isAutoPlaying) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
}

function startAutoPlay() {
  isAutoPlaying = true;
  autoPlayBtn.classList.add('active');
  autoPlayText.textContent = 'Pauze';
  playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
  
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 4500);
}

function stopAutoPlay() {
  isAutoPlaying = false;
  autoPlayBtn.classList.remove('active');
  autoPlayText.textContent = 'Auto';
  playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
}

// Fullscreen
function toggleFullscreen() {
  const elem = document.getElementById('slideStage');
  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

// ==========================================================================
// SLIDE OVERVIEW DRAWER
// ==========================================================================
function initSlideDrawer() {
  drawerGrid.innerHTML = slidesData.map((s, idx) => `
    <div class="drawer-slide-thumb ${idx === currentSlideIndex ? 'current' : ''}" onclick="jumpToSlide(${idx})">
      <div>
        <div class="thumb-num">Slide ${s.id}</div>
        <div class="thumb-title">${s.title}</div>
      </div>
      <div class="thumb-theme">${s.chapter}</div>
    </div>
  `).join('');
}

function openDrawer() {
  slideDrawerOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  slideDrawerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// MANIFESTO WEBSITE PORTAL ENGINE
// ==========================================================================
function initPortalView() {
  renderPortalSections(slidesData);
}

function renderPortalSections(slidesToRender) {
  // Group slides by chapter
  const chapters = {};
  slidesToRender.forEach(s => {
    if (!chapters[s.chapter]) chapters[s.chapter] = [];
    chapters[s.chapter].push(s);
  });

  let html = '';
  for (const [chapterTitle, slides] of Object.entries(chapters)) {
    const cardsHTML = slides.map(s => `
      <div class="portal-card" id="portal-slide-${s.id}">
        <div class="portal-card-top">
          <div class="card-slide-num">Slide ${s.id} &bull; ${s.badge}</div>
          <h3>${s.title}</h3>
          <h4>${s.subtitle}</h4>
          ${s.content ? `<p class="card-summary">${s.content}</p>` : ''}
          ${s.bullets && s.bullets.length > 0 ? `
            <ul class="portal-card-bullets">
              ${s.bullets.map(b => `<li><strong>${b.strong}</strong> ${b.text}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
        <div class="portal-card-footer">
          <span style="font-size: 0.75rem; color: var(--text-muted);">${s.chapter}</span>
          <button class="jump-to-slide-btn" onclick="jumpToSlide(${s.id - 1})">
            Presenteer Slide ${s.id} &rarr;
          </button>
        </div>
      </div>
    `).join('');

    html += `
      <section class="portal-section">
        <div class="portal-section-header">
          <div class="section-title-wrap">
            <span class="section-pillar-badge">Hoofdstuk</span>
            <h2 class="section-main-heading">${chapterTitle}</h2>
          </div>
          <span style="font-size: 0.85rem; color: var(--text-muted);">${slides.length} onderwerpen</span>
        </div>
        <div class="portal-cards-grid">
          ${cardsHTML}
        </div>
      </section>
    `;
  }

  if (slidesToRender.length === 0) {
    html = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.25rem;">Geen slides gevonden voor deze zoekopdracht.</p>
        <button class="ctrl-btn" style="margin-top: 1rem;" onclick="resetSearch()">Herstel filters</button>
      </div>
    `;
  }

  portalSectionsContainer.innerHTML = html;
}

function filterPortal(query, category) {
  let filtered = slidesData;

  if (category && category !== 'all') {
    filtered = filtered.filter(s => s.theme === category || s.chapter.toLowerCase().includes(category));
  }

  if (query && query.trim() !== '') {
    const q = query.toLowerCase().trim();
    filtered = filtered.filter(s => {
      const matchTitle = s.title.toLowerCase().includes(q);
      const matchSubtitle = s.subtitle.toLowerCase().includes(q);
      const matchContent = (s.content || '').toLowerCase().includes(q);
      const matchBullets = s.bullets && s.bullets.some(b => b.strong.toLowerCase().includes(q) || b.text.toLowerCase().includes(q));
      return matchTitle || matchSubtitle || matchContent || matchBullets;
    });
  }

  renderPortalSections(filtered);
}

function resetSearch() {
  portalSearchInput.value = '';
  document.querySelectorAll('.pillar-pill').forEach(p => p.classList.remove('active'));
  document.querySelector('.pillar-pill[data-filter="all"]').classList.add('active');
  renderPortalSections(slidesData);
}

// ==========================================================================
// EVENT LISTENERS & SHORTCUTS
// ==========================================================================
function setupEventListeners() {
  // Navigation
  prevSlideBtn.addEventListener('click', prevSlide);
  nextSlideBtn.addEventListener('click', nextSlide);
  autoPlayBtn.addEventListener('click', toggleAutoPlay);
  fullscreenBtn.addEventListener('click', toggleFullscreen);
  themeToggleBtn.addEventListener('click', cycleTheme);
  printBtn.addEventListener('click', () => window.print());
  brandBtn.addEventListener('click', (e) => {
    e.preventDefault();
    jumpToSlide(0);
  });

  // Progress Bar click navigation
  progressTrack.addEventListener('click', (e) => {
    const rect = progressTrack.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = clickX / rect.width;
    const targetIdx = Math.min(Math.floor(ratio * slidesData.length), slidesData.length - 1);
    renderSlide(targetIdx);
  });

  // Mode buttons
  modeDeckBtn.addEventListener('click', () => switchView('deck'));
  modePortalBtn.addEventListener('click', () => switchView('portal'));

  // Drawer
  openDrawerBtn.addEventListener('click', openDrawer);
  deckDrawerBtn.addEventListener('click', openDrawer);
  closeDrawerBtn.addEventListener('click', closeDrawer);
  slideDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === slideDrawerOverlay) closeDrawer();
  });

  // Portal Filter Pills
  pillarPillsList.addEventListener('click', (e) => {
    const pill = e.target.closest('.pillar-pill');
    if (!pill) return;
    document.querySelectorAll('.pillar-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    filterPortal(portalSearchInput.value, pill.getAttribute('data-filter'));
  });

  // Portal Live Search
  portalSearchInput.addEventListener('input', (e) => {
    const activePill = document.querySelector('.pillar-pill.active');
    const filter = activePill ? activePill.getAttribute('data-filter') : 'all';
    filterPortal(e.target.value, filter);
  });

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // If user is typing in search input, don't hijack keyboard navigation
    if (document.activeElement === portalSearchInput) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        jumpToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        jumpToSlide(slidesData.length - 1);
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 'o':
      case 'O':
        if (slideDrawerOverlay.classList.contains('active')) closeDrawer();
        else openDrawer();
        break;
      case 'Escape':
        closeDrawer();
        break;
      case 'a':
      case 'A':
        toggleAutoPlay();
        break;
      case 'p':
      case 'P':
        switchView(currentView === 'deck' ? 'portal' : 'deck');
        break;
    }
  });
}
