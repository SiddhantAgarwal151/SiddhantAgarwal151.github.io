// ============ PROJECT DATA ============
const projectData = {
  "event-processor": {
    title: "Fault-Tolerant Event Processing System",
    status: "SHIPPED",
    statusClass: "shipped",
    date: "2025",
    description: "A backend event-processing system built around a simple idea: dependencies fail, so the system shouldn't. Built in C# on .NET 8, it wraps every downstream call in exponential backoff retry logic, logs every step with structured, queryable output, and exposes a REST API so other services can push events into it without knowing anything about its internals.",
    technical: [
      "C# / .NET 8 with a layered architecture separating API, processing, and persistence",
      "Dapper for lightweight, fast data access against the underlying store",
      "Serilog for structured logging across the retry and processing pipeline",
      "Exponential backoff retry logic to absorb transient downstream failures",
      "Dockerized with Docker Compose for local, repeatable environments"
    ],
    links: [
      { label: "View on GitHub ↗", url: "https://github.com/SiddhantAgarwal151/fault-tolerant-event-processor" }
    ],
    media: null
  },
  "cloud-analytics": {
    title: "Cloud Game Analytics Platform",
    status: "IN PROGRESS",
    statusClass: "active",
    date: "2026",
    description: "An AWS-based analytics platform built to capture and visualize gameplay telemetry from the SFML dungeon crawler — every room transition, boss encounter, and player death feeding into a pipeline that turns raw events into dashboards. It doubles as a hands-on cloud infrastructure portfolio piece, built alongside (and to serve) the game itself.",
    technical: [
      "AWS for ingestion, storage, and pipeline infrastructure",
      "PostgreSQL for structured event storage",
      "Python for the ingestion and processing layer",
      "Designed to plug directly into the C++ dungeon crawler's event stream"
    ],
    links: [],
    media: "placeholder"
  },
  "dungeon-crawler": {
    title: "C++ SFML Dungeon Crawler",
    status: "ACTIVE",
    statusClass: "active",
    date: "2025 – present",
    description: "A dungeon-crawler game engine built from the ground up in C++ using SFML. It handles room-to-room transitions, door-based collision systems, and a multi-phase boss fight — BossOctorok — with projectile attacks and a working health bar, all running on a from-scratch rendering and update loop.",
    technical: [
      "C++17 with SFML for rendering, input, and audio",
      "Custom room-transition system with door collision detection",
      "Multi-phase boss AI (BossOctorok) with projectile mechanics and health tracking",
      "Built with CMake and Ninja, targeting GCC 13 under WSL",
      "Incremental build workflow copying source between Windows and WSL filesystems"
    ],
    links: [
      { label: "View on GitHub ↗", url: "https://github.com/SiddhantAgarwal151/Game-Project" }
    ],
    media: "placeholder"
  },
  "clique": {
    title: "Clique",
    status: "SHIPPED",
    statusClass: "shipped",
    date: "2024",
    description: "A social platform for organizing and running clubs — members, posts, tags, and admin tooling all in one place. Built with a React Native frontend that runs on both web and mobile, backed by a Python FastAPI service and a PostgreSQL database.",
    technical: [
      "React Native frontend targeting both web and mobile from one codebase",
      "FastAPI backend service handling auth, posts, and club/member management",
      "PostgreSQL for relational data storage",
      "Full CRUD flows for clubs, members, tags, and posts"
    ],
    links: [],
    media: null
  },
  "groopfit": {
    title: "GroopFit",
    status: "SHIPPED",
    statusClass: "shipped",
    date: "2022",
    description: "GroopFit is a full-stack web app built to help people find and join group fitness sessions with others at a similar level. It handles user accounts, session matching, and scheduling behind a Google-authenticated login, with a React/Redux frontend talking to an Express API backed by PostgreSQL.",
    technical: [
      "React frontend with Redux Toolkit for state management",
      "Express.js REST API with a Node.js backend",
      "Google OAuth2 login via Passport.js, with JWT-based session handling",
      "PostgreSQL for persisting users, sessions, and group data",
      "Configured for Heroku deployment via a Procfile"
    ],
    links: [
      { label: "View on GitHub ↗", url: "https://github.com/SiddhantAgarwal151/GroopFit-Web-App" }
    ],
    media: "placeholder"
  },
  "distillation": {
    title: "Neural Network Model Distillation",
    status: "SHIPPED",
    statusClass: "shipped",
    date: "2024",
    description: "A research-driven project exploring model distillation: training a small, fast multilayer perceptron to approximate the behavior of a larger trained network. The project compares the distilled MLP against decision trees on the same tasks, with parallel implementations in Python (for experimentation) and Java (for performance comparisons).",
    technical: [
      "Multilayer perceptron (MLP) implementations in both Python and Java",
      "Model distillation from a larger network into a compact student model",
      "Decision tree baseline for comparison against the distilled model",
      "Jupyter notebooks documenting experiments and results",
      "Custom data generation and normalization utilities in Java"
    ],
    links: [
      { label: "View on GitHub ↗", url: "https://github.com/SiddhantAgarwal151/Distilled-Neural-Network-Models" }
    ],
    media: "placeholder"
  },
  "language-model": {
    title: "Language Model Text Generator",
    status: "SHIPPED",
    statusClass: "shipped",
    date: "2023",
    description: "An LSTM-based language model trained from scratch to generate text — built as a hands-on introduction to sequence modeling, covering tokenization, embedding layers, and training loops rather than relying on a pretrained model.",
    technical: [
      "Python with TensorFlow for model definition and training",
      "LSTM-based sequence architecture",
      "Custom tokenization and text preprocessing pipeline"
    ],
    links: [],
    media: null
  },
  "word-linker": {
    title: "Word Linker",
    status: "SHIPPED",
    statusClass: "shipped",
    date: "2023",
    description: "A real-time multiplayer word game where players race to provide accurate synonyms before the clock runs out. Focused on fast, readable scoring and low-latency multiplayer play.",
    technical: [
      "JavaScript for real-time multiplayer game logic",
      "Timed round system with live scoring",
      "Synonym-matching validation logic"
    ],
    links: [],
    media: null
  }
};

// ============ MOBILE NAV ============
const navToggle = document.getElementById('navToggle');
const navLinksMobile = document.getElementById('navLinksMobile');
navToggle.addEventListener('click', () => {
  navLinksMobile.classList.toggle('open');
});
navLinksMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinksMobile.classList.remove('open'));
});

// ============ FILTER TABS ============
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

// ============ MODAL ============
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalStatus = document.getElementById('modalStatus');
const modalDate = document.getElementById('modalDate');
const modalDescription = document.getElementById('modalDescription');
const modalTechnical = document.getElementById('modalTechnical');
const modalLinks = document.getElementById('modalLinks');
const modalMedia = document.getElementById('modalMedia');

function openModal(key) {
  const data = projectData[key];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalStatus.textContent = data.status;
  modalStatus.className = 'tag-status ' + data.statusClass;
  modalDate.textContent = data.date;
  modalDescription.textContent = data.description;

  modalTechnical.innerHTML = '';
  data.technical.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    modalTechnical.appendChild(li);
  });

  modalLinks.innerHTML = '';
  data.links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'btn-secondary';
    a.textContent = link.label;
    modalLinks.appendChild(a);
  });

  if (data.media === 'placeholder') {
    modalMedia.style.display = 'block';
    modalMedia.innerHTML = '<div class="video-placeholder"><span class="play-icon">▶</span><span>Video coming soon</span></div>';
  } else {
    modalMedia.style.display = 'none';
    modalMedia.innerHTML = '';
  }

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal]').forEach(el => {
  el.addEventListener('click', () => openModal(el.dataset.modal));
});
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));
