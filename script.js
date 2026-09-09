

/* --- Liens locaux vers les démos (depuis developpement/portfolio/) --- */
const DEMO_PATHS = {
  "PC Build Planner": "../../outils/pc-builder/index.html",
  "PokerLocal": "../../loisirs/poker-local/index.html",
  "Game Tools Lab": "../../outils/game-tools-lab/index.html",
  "QuickPlay": "../../loisirs/quick-play/index.html",
  "Unit Converter": "../../outils/unit-converter/index.html",
  "API Dashboard": "../../developpement/api-dashboard/index.html",
  "DevDash": "../../developpement/vscode-dashboard/index.html",
  "Music Player": "../../loisirs/music-player/index.html",
  "Pokedex Complet": "../../loisirs/pokedex/index.html",
  "URL Shortener": "../../developpement/url-shortener/public/index.html",
  "Sport Coach": "../../outils/sport-coach/index.html",
  "OSINT Finder": "../../outils/osint/index.html",
  "Palette Generator": "../../creatif/palette-generator/index.html",
  "Tableau Periodique": "../../education/tableau-periodique/index.html",
  "Agenda Semaine A/B": "../../outils/agenda/index.html",
  "Generateur de CV": "../../outils/generateur-cv/index.html",
  "CSS Animator": "../../outils/css-animator/index.html",
  "Font Pairing": "../../creatif/font-pairing/index.html",
  "Speedometer Sim": "../../loisirs/speedometer/index.html",
  "Tier List Maker": "../../loisirs/tier-list/index.html",
  "Raitatsu": "../../loisirs/raitatsu/index.html",
  "Programme Fitness": "../../loisirs/programme-fitness/index.html",
  "Habit Tracker": "../../outils/habit-tracker/index.html",
  "IA Directory": "../../outils/ai-directory/index.html",
  "Comparateur de Prix": "../../outils/comparateur-prix/index.html",
  "PC Inventory": "../../outils/pc-inventory/index.html",
  "CardDeck Pokémon": "../../loisirs/pokemon/index.html"
};

function projectLinks(p) {
  const links = [...(p.links || [])];
  const demo = DEMO_PATHS[p.title];
  if (demo && !links.some((l) => l.url === demo)) {
    links.unshift({ label: "Ouvrir le projet", url: demo, icon: "fas fa-play" });
  }
  return links;
}

/* --- Project data --- */
const PROJECTS = [
  { title:"PC Build Planner", desc:"Configurateur de PC avec selection des composants, compatibilite globale, filtres par marque et estimation des performances en jeu.", badge:"Web outil", icon:"fas fa-microchip", category:"web", tags:["JavaScript","Calculs","Logique metier"] },
  { title:"PokerLocal", desc:"Table de Texas Hold'em locale avec bots, journal de partie et gestion complete des tours d'action.", badge:"Jeu web", icon:"fas fa-chess", category:"game", tags:["JavaScript","Game logic","UI dynamique"] },
  { title:"Game Tools Lab", desc:"Suite d'outils pour joueurs avec tests CPS, APM, FPS, peripheriques et calculateurs specialises.", badge:"Web multi-outils", icon:"fas fa-sliders", category:"web", tags:["JavaScript","Filtres","UI modulaire"] },
  { title:"QuickPlay", desc:"Hub de mini-jeux varies avec plusieurs experiences arcade et puzzle dans une seule interface.", badge:"Hub de jeux", icon:"fas fa-gamepad", category:"game", tags:["Mini-games","Progression","Front interactif"] },
  { title:"Unit Converter", desc:"Convertisseur universel avec 8 categories (longueur, masse, temperature, volume, vitesse, donnees, temps, surface) et historique.", badge:"Web outil", icon:"fas fa-ruler-combined", category:"web", tags:["JavaScript","Calculs","LocalStorage"] },
  { title:"API Dashboard", desc:"Tableau de bord temps reel avec meteo via Open-Meteo, cours crypto, informations IP, horloge et previsions 7 jours.", badge:"Dashboard", icon:"fas fa-satellite-dish", category:"web", tags:["APIs REST","Chart.js","Fetch async"] },
  { title:"DevDash", desc:"Dashboard developpeur style VS Code avec Pomodoro timer, gestionnaire de taches, notes rapides et raccourcis personnalisables.", badge:"Productivite", icon:"fas fa-code", category:"web", tags:["JavaScript","LocalStorage","UI VS Code"] },
  { title:"Music Player", desc:"Lecteur audio local avec import drag & drop, playlist, favoris, visualisation frequences via Web Audio API.", badge:"App web", icon:"fas fa-music", category:"web", tags:["Web Audio API","Canvas","JavaScript"] },
  { title:"Pokedex Complet", desc:"Pokedex interactif de 1025 Pokemon avec filtres par type et generation, tri par stats et chaine d'evolution.", badge:"App web", icon:"fas fa-dragon", category:"web", tags:["PokeAPI","Fetch","UI dynamique"] },
  { title:"Conjugator", desc:"Analyseur de verbes francais permettant d'identifier mode, temps et personne a partir d'une forme conjuguee.", badge:"Analyse", icon:"fas fa-language", category:"web", tags:["JavaScript","JSON","Recherche"], links:[{label:"Demo web", url:"https://dragongameryt77.github.io/conjugator/", icon:"fas fa-globe"}] },
  { title:"Lieux Proches", desc:"Projet web consacre a la decouverte de lieux proches, avec presentation claire et navigation simple.", badge:"Web local", icon:"fas fa-map-location-dot", category:"web", tags:["HTML","CSS","JavaScript"], links:[{label:"Demo web", url:"https://dragongameryt77.github.io/LieuxProche/", icon:"fas fa-globe"}] },
  { title:"Tufting", desc:"Site vitrine autour du tufting, oriente mise en page, presentation et parcours visuel.", badge:"Site vitrine", icon:"fas fa-rug", category:"web", tags:["Responsive","UI vitrine","HTML / CSS / JS"], links:[{label:"Demo web", url:"https://dragongameryt77.github.io/tufting/", icon:"fas fa-globe"}] },
  { title:"Image Recognition AI", desc:"Projet Python de classification d'image avec TensorFlow et MobileNetV2 pour decouvrir le machine learning applique.", badge:"IA", icon:"fas fa-brain", category:"python", tags:["Python","TensorFlow","Computer Vision"], links:[{label:"GitHub", url:"https://github.com/slayzbs/image-recognition-AI", icon:"fab fa-github"}] },
  { title:"Studio 2.0", desc:"Serie de modeles autour des transports, de la mecanique et de la construction d'objets techniques.", badge:"3D", icon:"fas fa-cube", category:"3d", tags:["Modelisation 3D","Conception","Volumes"] },
  { title:"Sweet Home 3D", desc:"Travaux de maisons et d'espaces interieurs avec reflexion sur l'amenagement, le volume et la composition.", badge:"3D habitat", icon:"fas fa-house", category:"3d", tags:["Sweet Home 3D","Architecture","Amenagement"] },
  { title:"Maison Montpellier - SketchUp", desc:"Projet SketchUp centre sur la structure d'un espace habitable et la lecture des volumes architecturaux.", badge:"3D architecture", icon:"fas fa-compass-drafting", category:"3d", tags:["SketchUp","3D","Architecture"] },
  { title:"URL Shortener", desc:"Raccourcisseur d'URL full-stack avec dashboard analytique protege, QR Codes, tracking des clics (geo, navigateur, OS) et graphiques Chart.js.", badge:"Full-stack", icon:"fas fa-link", category:"web", tags:["Node.js","Express","Chart.js"] },
  { title:"Sport Coach", desc:"Coach sportif par webcam utilisant MediaPipe Pose pour detecter les mouvements, compter les repetitions et suivre la progression.", badge:"App webcam", icon:"fas fa-dumbbell", category:"web", tags:["MediaPipe","Canvas","Computer Vision"] },
  { title:"OSINT Finder", desc:"Plateforme OSINT avec backend Node.js pour centraliser des recherches multi-sources (profils, traces publiques et outils GitHub) depuis une interface unique.", badge:"Full-stack", icon:"fas fa-user-secret", category:"web", tags:["Node.js","Express","APIs"] },
  { title:"QuestLife", desc:"Application mobile RPG de vie quotidienne transformant les habitudes en quetes, avec systeme d'XP, niveaux et recompenses. En cours de developpement.", badge:"Mobile \u2022 En dev", icon:"fas fa-scroll", category:"mobile", tags:["React Native","Expo","Gamification"] },
  { title:"Radar de proximite", desc:"Circuit Arduino Tinkercad avec 5 capteurs ultrasoniques HC-SR04, 4 buzzers et 3 LEDs pour detecter des obstacles a plusieurs points et signaler la distance par son et lumiere.", badge:"Electronique", icon:"fas fa-satellite-dish", category:"arduino", tags:["Arduino","Tinkercad","Capteurs ultrasoniques"], links:[{label:"Tinkercad", url:"https://www.tinkercad.com/things/cdZFdnbTa4a-radar-de-recul", icon:"fas fa-microchip"}] },
  { title:"Suiveur de lumiere", desc:"Circuit Arduino Tinkercad avec un servomoteur oriente automatiquement vers la source lumineuse la plus forte grace a 2 photoresistances (LDR).", badge:"Electronique", icon:"fas fa-sun", category:"arduino", tags:["Arduino","Tinkercad","Servo / LDR"], links:[{label:"Tinkercad", url:"https://www.tinkercad.com/things/5ecQEKIR8Wr-suiveur-solaire-", icon:"fas fa-microchip"}] },
  { title:"Palette Generator", desc:"Generateur de palettes de couleurs harmonieuses avec 7 modes (analogique, complementaire, triadique, monochromatique…), export CSS, Tailwind et PNG, sauvegarde locale.", badge:"Web creatif", icon:"fas fa-palette", category:"web", tags:["JavaScript","Couleurs","Export multi-format"] },
  { title:"Tableau Periodique", desc:"Tableau periodique interactif des 118 elements avec 3 modes de coloration, recherche, filtres par categorie et fiches detaillees de chaque element.", badge:"Education", icon:"fas fa-atom", category:"web", tags:["JavaScript","Chimie","Data visualization"] },
  { title:"Revision Unifiee (College + Bac)", desc:"Plateforme unique de revision regroupant college, brevet et bac avec fiches, quiz et flashcards sur une seule interface.", badge:"Education", icon:"fas fa-book-open-reader", category:"web", tags:["JavaScript","Education","Quiz / Flashcards"], links:[{label:"Demo web", url:"../../education/revision/index.html", icon:"fas fa-globe"}] },
  { title:"Agenda Semaine A/B", desc:"Agenda scolaire interactif avec alternance Semaine A/B, vue claire des cours et navigation rapide pour organiser le planning hebdomadaire.", badge:"Web outil", icon:"fas fa-calendar-week", category:"web", tags:["JavaScript","Organisation","UI utile"] },
  { title:"Generateur de CV", desc:"Generateur de CV avec formulaire live, previsualisation immediate et export PDF pour produire un document propre et professionnel rapidement.", badge:"Web outil", icon:"fas fa-file-lines", category:"web", tags:["JavaScript","PDF","Formulaires"] },
  { title:"Habit Tracker", desc:"Suivi d'habitudes quotidiennes avec graphiques Chart.js, streaks, vue mensuelle et persistance locale.", badge:"Web outil", icon:"fas fa-check-double", category:"web", tags:["React","Chart.js","LocalStorage"] },
  { title:"IA Directory", desc:"Annuaire des outils et services d'intelligence artificielle avec recherche, categories et fiches detaillees.", badge:"Web outil", icon:"fas fa-robot", category:"web", tags:["JavaScript","Annuaire","UI"] },
  { title:"Comparateur de Prix", desc:"Comparaison de prix multi-sources avec filtres et mise en avant des meilleures offres.", badge:"Web outil", icon:"fas fa-tags", category:"web", tags:["JavaScript","Comparaison","Data"] },
  { title:"PC Inventory", desc:"Inventaire d'ordinateurs avec modeles de marques, configurations personnalisees et export.", badge:"Web outil", icon:"fas fa-computer", category:"web", tags:["JavaScript","Inventaire","UI"] },
  { title:"CardDeck Pokémon", desc:"Gestionnaire de collection de cartes Pokemon avec API, filtres et suivi de la collection.", badge:"App web", icon:"fas fa-layer-group", category:"web", tags:["PokeAPI","JavaScript","Collection"] },
  { title:"CSS Animator", desc:"Editeur visuel de @keyframes avec prereglages, previsualisation en temps reel, courbes d'acceleration et export CSS propre en un clic.", badge:"Web creatif", icon:"fas fa-wand-magic-sparkles", category:"web", tags:["JavaScript","CSS","Animations"] },
  { title:"Font Pairing", desc:"Outil de combinaisons typographiques avec 40+ polices Google Fonts, previsualisation live sur texte personnalise et export CSS.", badge:"Web creatif", icon:"fas fa-font", category:"web", tags:["JavaScript","Typography","Google Fonts"] },
  { title:"Speedometer Sim", desc:"Simulateur de compteur de vitesse pour 10 marques automobiles avec physique reelle, RPM, rapports de vitesse, sons moteur et animations fluides.", badge:"Simulation", icon:"fas fa-gauge-high", category:"web", tags:["JavaScript","Physics","Canvas"] },
  { title:"Tier List Maker", desc:"Classement drag-and-drop avec niveaux S/A/B/C/D/F, import d'images personnalisees, renommage des tiers et export PNG via canvas.", badge:"Web interactif", icon:"fas fa-list-ol", category:"web", tags:["JavaScript","Drag & Drop","Canvas"] },
  { title:"Raitatsu", desc:"Jeu narratif a choix multiples avec univers draconique, arbre de decisions, ambiance immersive et plusieurs fins possibles.", badge:"Jeu narratif", icon:"fas fa-dragon", category:"game", tags:["JavaScript","Storytelling","UI immersive"] },
  { title:"Programme Fitness", desc:"Application de programme de prise de masse 6j/7 en calisthenics : 6 jours d'entrainement, plan nutritionnel 3200 kcal/j et conseils de progression — tout en vanilla JS.", badge:"App sante", icon:"fas fa-dumbbell", category:"web", tags:["JavaScript","UI dynamique","Sante"] }
];

/* --- State --- */
let currentMode = '3d';
let particlesRAF = null;
let particles = [];

/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
  // Force 3D mode
  document.body.classList.add('mode-3d');
  initHamburger();
  initNavHighlight();
  initReveal();
  renderProjects();
  initFilters();
  initSkillRings();
  initSmoothScroll();
  initParticles();
  initTilt();
  initCardGlow();
  initTimeline();
});



/* ------------- HAMBURGER ------------- */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('active'));
  menu.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('active'));
  });
}

/* ------------- NAV HIGHLIGHT ------------- */
function initNavHighlight() {
  const links = document.querySelectorAll('.nav-link');
  const sections = [...document.querySelectorAll('section[id]')];
  if (!sections.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
}

/* ------------- SMOOTH SCROLL ------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ------------- REVEAL ------------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!items.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('is-visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => obs.observe(el));
}

/* ------------- PROJECTS ------------- */
function renderProjects(filter) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const list = (!filter || filter === 'all') ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  grid.innerHTML = list.map((p, i) => `
    <article class="project-card reveal tilt-card" data-cat="${p.category}" onclick="openProjectModal(${PROJECTS.indexOf(p)})" style="cursor:pointer">
      <div class="project-topline">
        <span class="card-badge">${p.badge}</span>
        <i class="${p.icon}"></i>
      </div>
      <h3>${p.title}</h3>
      <p class="project-text">${p.desc}</p>
      <div class="project-tags tech-tags">
        ${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      ${projectLinks(p).length ? `<div class="project-links">${projectLinks(p).map(l => `<a class="btn-outline-minimal" href="${l.url}" ${l.url.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''} onclick="event.stopPropagation()"><i class="${l.icon}"></i> ${l.label}</a>`).join('')}</div>` : ''}
    </article>
  `).join('');

  // re-init reveal + tilt + glow for new cards
  initReveal();
  attachTilt(grid.querySelectorAll('.tilt-card'));
  initCardGlow();
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

/* ------------- SKILL RINGS (3D) ------------- */
function initSkillRings() {
  const orbs = document.querySelectorAll('.skill-orb[data-level]');
  if (!orbs.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.setProperty('--percent', e.target.dataset.level);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  orbs.forEach(o => obs.observe(o));
}

/* ------------- PARTICLES (3D) ------------- */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  if (particlesRAF) return; // already running

  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  if (particles.length === 0) {
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.8 + .6,
        dx: (Math.random() - .5) * .35,
        dy: (Math.random() - .5) * .35,
        a: Math.random() * .4 + .1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(162,155,254,${p.a})`;
      ctx.fill();
      // connections
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(162,155,254,${.08 * (1 - d / 150)})`;
          ctx.stroke();
        }
      }
    });
    particlesRAF = requestAnimationFrame(draw);
  }
  draw();
}

function stopParticles() {
  if (particlesRAF) {
    cancelAnimationFrame(particlesRAF);
    particlesRAF = null;
    const canvas = document.getElementById('particles-canvas');
    if (canvas) { const ctx = canvas.getContext('2d'); ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }
}

/* ------------- TILT (3D) ------------- */
function attachTilt(cards) {
  cards.forEach(card => {
    if (card._tiltBound) return;
    card._tiltBound = true;
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

function initTilt() {
  attachTilt(document.querySelectorAll('.tilt-card'));
}

function removeTilt() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.style.transform = '';
  });
}

/* ------------- CARD GLOW (3D) ------------- */
function initCardGlow() {
  document.querySelectorAll('.project-card, .about-card, .contact-card').forEach(card => {
    if (card._glowBound) return;
    card._glowBound = true;
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', (e.clientX - r.left) + 'px');
      card.style.setProperty('--mouse-y', (e.clientY - r.top)  + 'px');
    });
  });
}

/* ------------- PROJECT MODAL ------------- */
const PROJECT_DETAILS = {
  "PC Build Planner": "Configurateur complet avec base de donnees de 35+ CPU, 40+ GPU, cartes meres, RAM, stockage, refroidissement, alimentations et boitiers. Include profiles gaming/streaming/creation, estimation FPS par resolution et verification de compatibilite.",
  "PokerLocal": "Table de Texas Hold'em locale avec bots IA, journal de partie detaille, gestion du pot, blinds, all-in, et affichage des mains gagnantes.",
  "Game Tools Lab": "19 outils de gaming : CPS, APM, reaction, scroll speed, micro test, FPS benchmark, calcul eDPI, sensibilite cross-game, PPI, et plus.",
  "QuickPlay": "Hub de 15 mini-jeux : reaction, clicker, memory, nombre mystere, typing, aim, anagram, snake, 2048, demineur, blackjack, dino runner, dodgezone, hunterzone et tower defense spatial.",
  "Unit Converter": "8 categories de conversion avec historique localStorage : longueur, masse, temperature, volume, vitesse, donnees, temps, surface.",
  "API Dashboard": "Dashboard temps reel avec widgets meteo (Open-Meteo), crypto (CoinGecko), IP (ipapi.co), horloge, citations et previsions 7 jours (Chart.js).",
  "QuestLife": "Application RPG mobile en React Native / Expo. Systeme de quetes quotidiennes, XP, niveaux, recompenses et streaks pour gamifier la vie quotidienne.",
  "Sport Coach": "Detection de pose par webcam via MediaPipe Pose. Comptage automatique des repetitions, tracking des angles articulaires, historique des series et records personnels.",
  "URL Shortener": "Full-stack Node.js/Express avec dashboard analytique, QR codes, tracking geo/navigateur/OS, graphiques Chart.js et protection par token admin.",
  "OSINT Finder": "Plateforme full-stack avec backend Node.js pour regrouper des recherches OSINT et des outils GitHub dans un tableau de bord unique.",
  "Revision Unifiee (College + Bac)": "Une seule page de revision pour tout le parcours college + bac, avec navigation par niveau, matieres, quiz et flashcards.",
  "Agenda Semaine A/B": "Agenda web pense pour le rythme scolaire, avec alternance A/B, consultation rapide des jours et meilleure lisibilite du planning.",
  "Routine Planner": "Planification journaliere intelligente avec import iCal, activites fixes, routines matin/soir et visualisation hebdomadaire.",
  "Generateur de CV": "Application orientee productivite permettant de remplir un profil puis d'exporter un CV en PDF avec une mise en forme propre.",
  "Revision Bac Premiere": "Application educative historique remplacee par la version unifiee college + bac."
};

function openProjectModal(index) {
  const p = PROJECTS[index];
  if (!p) return;
  const modal = document.getElementById('project-modal');
  document.getElementById('modal-icon').innerHTML = `<i class="${p.icon}"></i>`;
  document.getElementById('modal-badge').textContent = p.badge;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-tags').innerHTML = p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
  document.getElementById('modal-links').innerHTML = projectLinks(p).map(l => `<a class="btn-outline-minimal" href="${l.url}" ${l.url.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}><i class="${l.icon}"></i> ${l.label}</a>`).join('');
  const detail = PROJECT_DETAILS[p.title];
  document.getElementById('modal-details').innerHTML = detail ? `<strong>Details du projet :</strong><br>${detail}` : `<em>Categorie : ${p.category}</em>`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProjectModal();
});

/* ═══════════════════════════════════════
   TIMELINE — horizontal scroll with arrows
═══════════════════════════════════════ */
function initTimeline() {
  const track = document.getElementById('timeline-track');
  const prev  = document.getElementById('tl-prev');
  const next  = document.getElementById('tl-next');
  if (!track || !prev || !next) return;
  const step = 260;
  prev.addEventListener('click', () => { track.scrollBy({ left: -step, behavior: 'smooth' }); });
  next.addEventListener('click', () => { track.scrollBy({ left: step, behavior: 'smooth' }); });
}

/* ============================================================
   THREE.JS — Hero 3D Scene
   ============================================================ */
let hero3D = null;

function initHero3D() {
  const canvas = document.getElementById('hero-3d-canvas');
  if (!canvas || hero3D) return;
  if (typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const container = canvas.parentElement;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;

  // Camera
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0, 6);

  // Mouse tracking
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

  // Materials
  const matPurple = new THREE.MeshStandardMaterial({ color: 0x6c5ce7, roughness: 0.3, metalness: 0.7 });
  const matCyan = new THREE.MeshStandardMaterial({ color: 0x00cec9, roughness: 0.3, metalness: 0.7 });
  const matWire1 = new THREE.MeshStandardMaterial({ color: 0xa29bfe, wireframe: true, transparent: true, opacity: 0.5 });
  const matWire2 = new THREE.MeshStandardMaterial({ color: 0x00cec9, wireframe: true, transparent: true, opacity: 0.4 });
  const matGlass = new THREE.MeshPhysicalMaterial({
    color: 0x6c5ce7, roughness: 0.05, metalness: 0.1,
    transmission: 0.9, thickness: 1.5, transparent: true, opacity: 0.6
  });

  // Group for all objects
  const group = new THREE.Group();
  scene.add(group);

  // Geometries
  const shapes = [];

  // Central Icosahedron (main piece)
  const icoGeo = new THREE.IcosahedronGeometry(1.1, 1);
  const icoMesh = new THREE.Mesh(icoGeo, matGlass);
  const icoWire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 1), matWire1);
  group.add(icoMesh);
  group.add(icoWire);
  shapes.push({ mesh: icoMesh, wire: icoWire, basePos: [0, 0, 0], speed: 0.4, phase: 0, floatAmp: 0.15, rotSpeed: [0.003, 0.005, 0.002] });

  // Torus (orbital ring)
  const torusGeo = new THREE.TorusGeometry(1.9, 0.04, 16, 100);
  const torusMesh = new THREE.Mesh(torusGeo, matPurple);
  torusMesh.rotation.x = Math.PI / 3;
  torusMesh.rotation.z = 0.3;
  group.add(torusMesh);
  shapes.push({ mesh: torusMesh, wire: null, basePos: [0, 0, 0], speed: 0.2, phase: 1, floatAmp: 0, rotSpeed: [0, 0.008, 0] });

  // Second ring
  const torus2Geo = new THREE.TorusGeometry(2.2, 0.025, 16, 100);
  const torus2Mat = new THREE.MeshStandardMaterial({ color: 0x00cec9, roughness: 0.3, metalness: 0.7, transparent: true, opacity: 0.5 });
  const torus2Mesh = new THREE.Mesh(torus2Geo, torus2Mat);
  torus2Mesh.rotation.x = -Math.PI / 5;
  torus2Mesh.rotation.z = -0.5;
  group.add(torus2Mesh);
  shapes.push({ mesh: torus2Mesh, wire: null, basePos: [0, 0, 0], speed: 0.15, phase: 2, floatAmp: 0, rotSpeed: [0, -0.006, 0] });

  // Small floating Octahedron
  const octGeo = new THREE.OctahedronGeometry(0.35, 0);
  const octMesh = new THREE.Mesh(octGeo, matCyan);
  octMesh.position.set(2.2, 1.3, -0.5);
  group.add(octMesh);
  shapes.push({ mesh: octMesh, wire: null, basePos: [2.2, 1.3, -0.5], speed: 0.7, phase: 0.5, floatAmp: 0.3, rotSpeed: [0.01, 0.015, 0.005] });

  // Small Dodecahedron
  const dodGeo = new THREE.DodecahedronGeometry(0.28, 0);
  const dodMesh = new THREE.Mesh(dodGeo, matPurple);
  dodMesh.position.set(-2.0, -1.2, 0.5);
  group.add(dodMesh);
  shapes.push({ mesh: dodMesh, wire: null, basePos: [-2.0, -1.2, 0.5], speed: 0.6, phase: 1.2, floatAmp: 0.25, rotSpeed: [0.008, 0.01, 0.012] });

  // Small Tetrahedron
  const tetGeo = new THREE.TetrahedronGeometry(0.25, 0);
  const tetMesh = new THREE.Mesh(tetGeo, matWire2.clone());
  tetMesh.material.wireframe = false;
  tetMesh.material.opacity = 0.8;
  tetMesh.position.set(-1.8, 1.6, -0.8);
  group.add(tetMesh);
  shapes.push({ mesh: tetMesh, wire: null, basePos: [-1.8, 1.6, -0.8], speed: 0.9, phase: 2.5, floatAmp: 0.2, rotSpeed: [0.012, 0.008, 0.01] });

  // Small sphere
  const sphGeo = new THREE.SphereGeometry(0.18, 16, 16);
  const sphMesh = new THREE.Mesh(sphGeo, matCyan);
  sphMesh.position.set(1.8, -1.5, 0.3);
  group.add(sphMesh);
  shapes.push({ mesh: sphMesh, wire: null, basePos: [1.8, -1.5, 0.3], speed: 0.5, phase: 3.1, floatAmp: 0.35, rotSpeed: [0.005, 0.007, 0.003] });

  // Additional wireframe ring
  const ring3Geo = new THREE.TorusGeometry(0.6, 0.015, 16, 64);
  const ring3Mesh = new THREE.Mesh(ring3Geo, matWire1.clone());
  ring3Mesh.material.wireframe = false;
  ring3Mesh.position.set(1.5, 0.8, 0.5);
  ring3Mesh.rotation.x = 1.2;
  group.add(ring3Mesh);
  shapes.push({ mesh: ring3Mesh, wire: null, basePos: [1.5, 0.8, 0.5], speed: 0.3, phase: 0.8, floatAmp: 0.15, rotSpeed: [0.01, 0, 0.008] });

  // Floating particles (small spheres)
  const particleGroup = new THREE.Group();
  const particleMat = new THREE.MeshBasicMaterial({ color: 0xa29bfe, transparent: true, opacity: 0.6 });
  const particleGeo = new THREE.SphereGeometry(0.03, 8, 8);
  const floatingParticles = [];
  for (let i = 0; i < 40; i++) {
    const p = new THREE.Mesh(particleGeo, particleMat.clone());
    p.material.opacity = Math.random() * 0.5 + 0.2;
    const r = 2 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    p.position.set(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
    particleGroup.add(p);
    floatingParticles.push({
      mesh: p,
      basePos: [p.position.x, p.position.y, p.position.z],
      speed: Math.random() * 0.3 + 0.1,
      phase: Math.random() * Math.PI * 2,
      amp: Math.random() * 0.3 + 0.1
    });
  }
  scene.add(particleGroup);

  // Lights
  const ambientLight = new THREE.AmbientLight(0x404060, 0.6);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x6c5ce7, 2, 20);
  pointLight1.position.set(3, 3, 4);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x00cec9, 1.5, 20);
  pointLight2.position.set(-3, -2, 3);
  scene.add(pointLight2);

  const pointLight3 = new THREE.PointLight(0xa29bfe, 1, 15);
  pointLight3.position.set(0, 4, -3);
  scene.add(pointLight3);

  // Resize handler
  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // Mouse handler (relative to canvas)
  function onMouseMove(e) {
    const rect = container.getBoundingClientRect();
    mouse.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouse.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  }
  window.addEventListener('mousemove', onMouseMove);

  // Animation
  let raf;
  const clock = new THREE.Clock();

  function animate() {
    raf = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    // Smooth mouse follow
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;

    // Rotate whole group gently based on mouse
    group.rotation.y = mouse.x * 0.4;
    group.rotation.x = -mouse.y * 0.3;

    // Animate each shape
    shapes.forEach(s => {
      const m = s.mesh;
      // Floating motion
      if (s.floatAmp > 0) {
        m.position.y = s.basePos[1] + Math.sin(t * s.speed + s.phase) * s.floatAmp;
        m.position.x = s.basePos[0] + Math.cos(t * s.speed * 0.7 + s.phase) * s.floatAmp * 0.5;
      }
      // Self rotation
      m.rotation.x += s.rotSpeed[0];
      m.rotation.y += s.rotSpeed[1];
      m.rotation.z += s.rotSpeed[2];
      // Sync wireframe
      if (s.wire) {
        s.wire.rotation.copy(m.rotation);
        s.wire.position.copy(m.position);
      }
    });

    // Floating particles orbit
    floatingParticles.forEach(fp => {
      fp.mesh.position.y = fp.basePos[1] + Math.sin(t * fp.speed + fp.phase) * fp.amp;
      fp.mesh.position.x = fp.basePos[0] + Math.cos(t * fp.speed * 0.6 + fp.phase) * fp.amp * 0.7;
    });
    particleGroup.rotation.y = t * 0.05;

    // Light animation
    pointLight1.position.x = 3 + Math.sin(t * 0.5) * 1.5;
    pointLight2.position.z = 3 + Math.cos(t * 0.3) * 2;

    renderer.render(scene, camera);
  }
  animate();

  hero3D = {
    destroy() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      hero3D = null;
    }
  };
}

// Initialize Three.js scene when in 3D mode
function initOrDestroyHero3D(mode) {
  if (mode === '3d') {
    // Slight delay to ensure the canvas is visible before init
    setTimeout(() => initHero3D(), 100);
  } else if (hero3D) {
    hero3D.destroy();
  }
}
