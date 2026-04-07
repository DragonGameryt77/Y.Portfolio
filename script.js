/* ---------------------------------------------------
   MERGED PORTFOLIO JS � 2D / 3D toggle
   --------------------------------------------------- */

/* --- Project data --- */
const PROJECTS = [
  { title:"PC Build Planner", desc:"Configurateur de PC avec selection des composants, compatibilite globale et estimation des performances en jeu.", badge:"Web outil", icon:"fas fa-microchip", category:"web", tags:["JavaScript","Calculs","Logique metier"] },
  { title:"PokerLocal", desc:"Table de Texas Hold'em locale avec bots, journal de partie et gestion complete des tours d'action.", badge:"Jeu web", icon:"fas fa-chess", category:"game", tags:["JavaScript","Game logic","UI dynamique"] },
  { title:"Game Tools Lab", desc:"Suite d'outils pour joueurs avec tests CPS, APM, FPS, peripheriques et calculateurs specialises.", badge:"Web multi-outils", icon:"fas fa-sliders", category:"web", tags:["JavaScript","Filtres","UI modulaire"] },
  { title:"QuickPlay", desc:"Hub de mini-jeux varies avec plusieurs experiences arcade et puzzle dans une seule interface.", badge:"Hub de jeux", icon:"fas fa-gamepad", category:"game", tags:["Mini-games","Progression","Front interactif"] },
  { title:"CineLog", desc:"Application de suivi de films et series avec recherche, tri, edition, statistiques et notation.", badge:"Tracker", icon:"fas fa-film", category:"web", tags:["CRUD","LocalStorage","Dashboard"] },
  { title:"Gaming Tracker", desc:"Bibliotheque personnelle de jeux avec tri avance, heures jouees, notes et statuts.", badge:"Tracker", icon:"fas fa-trophy", category:"web", tags:["JavaScript","Responsive","Organisation"] },
  { title:"Conjugator", desc:"Analyseur de verbes francais permettant d'identifier mode, temps et personne a partir d'une forme conjuguee.", badge:"Analyse", icon:"fas fa-language", category:"web", tags:["JavaScript","JSON","Recherche"], links:[{label:"Demo web", url:"https://dragongameryt77.github.io/conjugator/", icon:"fas fa-globe"}] },
  { title:"Lieux Proches", desc:"Projet web consacre a la decouverte de lieux proches, avec presentation claire et navigation simple.", badge:"Web local", icon:"fas fa-map-location-dot", category:"web", tags:["HTML","CSS","JavaScript"], links:[{label:"Demo web", url:"https://dragongameryt77.github.io/LieuxProche/", icon:"fas fa-globe"}] },
  { title:"Tufting", desc:"Site vitrine autour du tufting, oriente mise en page, presentation et parcours visuel.", badge:"Site vitrine", icon:"fas fa-rug", category:"web", tags:["Responsive","UI vitrine","HTML / CSS / JS"], links:[{label:"Demo web", url:"https://dragongameryt77.github.io/tufting/", icon:"fas fa-globe"}] },
  { title:"Image Recognition AI", desc:"Projet Python de classification d'image avec TensorFlow et MobileNetV2 pour decouvrir le machine learning applique.", badge:"IA", icon:"fas fa-brain", category:"python", tags:["Python","TensorFlow","Computer Vision"], links:[{label:"GitHub", url:"https://github.com/slayzbs/image-recognition-AI", icon:"fab fa-github"}] },
  { title:"GestureControl", desc:"Application desktop Python utilisant MediaPipe Hands pour piloter le PC avec des gestes en temps reel.", badge:"Desktop Python", icon:"fas fa-hand", category:"python", tags:["Python","PyQt5","OpenCV"] },
  { title:"Studio 2.0", desc:"Serie de modeles autour des transports, de la mecanique et de la construction d'objets techniques.", badge:"3D", icon:"fas fa-cube", category:"3d", tags:["Modelisation 3D","Conception","Volumes"] },
  { title:"Sweet Home 3D", desc:"Travaux de maisons et d'espaces interieurs avec reflexion sur l'amenagement, le volume et la composition.", badge:"3D habitat", icon:"fas fa-house", category:"3d", tags:["Sweet Home 3D","Architecture","Amenagement"] },
  { title:"Maison Montpellier - SketchUp", desc:"Projet SketchUp centre sur la structure d'un espace habitable et la lecture des volumes architecturaux.", badge:"3D architecture", icon:"fas fa-compass-drafting", category:"3d", tags:["SketchUp","3D","Architecture"] }
];

/* --- State --- */
let currentMode = localStorage.getItem('portfolioMode') || '3d';
let particlesRAF = null;
let particles = [];

/* --- Init --- */
document.addEventListener('DOMContentLoaded', () => {
  applyMode(currentMode, false);
  initToggle();
  initHamburger();
  initNavHighlight();
  initReveal();
  renderProjects();
  initFilters();
  initSkillRings();
  initSmoothScroll();
  if (currentMode === '3d') {
    initParticles();
    initTilt();
    initCardGlow();
  }
});

/* ------------- MODE TOGGLE ------------- */
function applyMode(mode, animated) {
  const body = document.body;
  body.classList.remove('mode-2d', 'mode-3d');
  body.classList.add('mode-' + mode);
  currentMode = mode;
  localStorage.setItem('portfolioMode', mode);

  if (mode === '3d') {
    initParticles();
    initTilt();
    initCardGlow();
  } else {
    stopParticles();
    removeTilt();
  }
  // re-attach reveal
  if (animated) {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('is-visible');
    });
    setTimeout(() => initReveal(), 60);
  }
}

function initToggle() {
  const track = document.getElementById('track');
  const lbl2d = document.getElementById('lbl2d');
  const lbl3d = document.getElementById('lbl3d');
  if (!track) return;

  // sync visual state on load
  syncSwitch(track, lbl2d, lbl3d);

  track.addEventListener('click', () => {
    const next = currentMode === '3d' ? '2d' : '3d';
    applyMode(next, true);
    syncSwitch(track, lbl2d, lbl3d);
  });
}

function syncSwitch(track, lbl2d, lbl3d) {
  const is3d = currentMode === '3d';
  track.classList.toggle('on', is3d);
  track.setAttribute('aria-checked', is3d);
  if (lbl2d) lbl2d.classList.toggle('active', !is3d);
  if (lbl3d) lbl3d.classList.toggle('active', is3d);
}

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
  grid.innerHTML = list.map(p => `
    <article class="project-card reveal tilt-card" data-cat="${p.category}">
      <div class="project-topline">
        <span class="card-badge">${p.badge}</span>
        <i class="${p.icon}"></i>
      </div>
      <h3>${p.title}</h3>
      <p class="project-text">${p.desc}</p>
      <div class="project-tags tech-tags">
        ${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      ${p.links ? `<div class="project-links">${p.links.map(l => `<a class="btn-outline-minimal" href="${l.url}" target="_blank" rel="noreferrer"><i class="${l.icon}"></i> ${l.label}</a>`).join('')}</div>` : ''}
    </article>
  `).join('');

  // re-init reveal + tilt + glow for new cards
  initReveal();
  if (currentMode === '3d') {
    attachTilt(grid.querySelectorAll('.tilt-card'));
    initCardGlow();
  }
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
