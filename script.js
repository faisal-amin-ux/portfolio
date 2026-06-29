// ============================================================
// 1. PROJECTS DATA
//    Edit this array to update your projects — no JSON file needed.
//    When you have real images, replace the `image` paths with:
//    "assets/images/cordell-health.jpg" etc.
// ============================================================
const projects = [
  {
    id: "01",
    title: "Cordell Health",
    role: "Senior Product Designer",
    year: "2026",
    company: "Modalys",
    niche: "Occupational Healthcare, SaaS",
    services: ["Research", "IA", "UI System", "Prototyping"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=750&fit=crop&q=80",
    description: "End to end design across 4 core modules for occupational healthcare. Reduced form friction with progressive disclosure and built a scalable UI system for rapid feature expansion.",
    caseStudyUrl: "pages/cordell-health.html"
  },
  {
    id: "02",
    title: "Packely",
    role: "UX Designer L2",
    year: "2024 to 2025",
    company: "Clyro",
    niche: "AI, Fintech, E-commerce",
    services: ["Design System", "SaaS Surfaces", "Handoff"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop&q=80",
    description: "Shipped 50+ SaaS surfaces with a shared design system. Standardised handoff across teams and established component governance that cut design-to-dev time by 40%.",
    caseStudyUrl: "pages/packely.html"
  },
  {
    id: "03",
    title: "TruID",
    role: "Junior UX Designer",
    year: "2023 to 2024",
    company: "Takhleeq",
    niche: "Verification, Web & SaaS",
    services: ["Responsive Web", "SaaS App", "Brand Systems"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=750&fit=crop&q=80",
    description: "Designed the marketing website and SaaS verification platform for TruID. Built clear user flows for identity verification, reducing drop-off by 35% through structured onboarding.",
    caseStudyUrl: "pages/truid.html"
  }
];

// ============================================================
// 2. RENDER PROJECTS INTO THE DOM
// ============================================================
function loadProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(p => `
    <article class="project-item reveal">
      <aside class="project-meta">
        <div class="project-meta-row">
          <span class="project-meta-label">Project</span>
          <span class="project-meta-value">${p.id}</span>
        </div>
        <div class="project-meta-row">
          <span class="project-meta-label">Role</span>
          <span class="project-meta-value">${p.role}</span>
        </div>
        <div class="project-meta-row">
          <span class="project-meta-label">Year</span>
          <span class="project-meta-value">${p.year}</span>
        </div>
        <div class="project-meta-row">
          <span class="project-meta-label">Company</span>
          <span class="project-meta-value">${p.company}</span>
        </div>
        <div class="project-meta-row">
          <span class="project-meta-label">Niche</span>
          <span class="project-meta-value">${p.niche}</span>
        </div>
        <div class="project-meta-row">
          <span class="project-meta-label">Services</span>
          <div class="project-services">
            ${p.services.map(s => `<span>${s}</span>`).join('')}
          </div>
        </div>
      </aside>
      <div class="project-content">
        <div class="project-num">${p.id} / Project</div>
        <h3>${p.title}</h3>
        <div class="project-img">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <p>${p.description}</p>
        <a href="${p.caseStudyUrl}" class="case-study-btn">
          <span class="sl-wrap">
            <span class="sl-track">
              <span>View case study</span>
              <span>View case study</span>
            </span>
          </span>
        </a>
      </div>
    </article>
  `).join('');

  // Re-observe newly added .reveal elements
  initScrollReveal();
}

// ============================================================
// 3. SCROLL REVEAL
// ============================================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // stop watching once visible
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
}

// ============================================================
// 4. BACK TO TOP — shows only near the bottom of the page
// ============================================================
function initBackToTop() {
  const btt = document.getElementById('backToTop');
  if (!btt) return;

  window.addEventListener('scroll', () => {
    const distanceFromBottom =
      document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
    btt.classList.toggle('visible', distanceFromBottom < 300);
  });
}

// ============================================================
// 5. MOBILE MENU
// ============================================================
function toggleMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const menuToggle = document.querySelector('.menu-toggle');
  const open = mobileNav.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function closeMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const menuToggle = document.querySelector('.menu-toggle');
  mobileNav.classList.remove('open');
  menuToggle.classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// 6. INIT ON PAGE LOAD
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  loadProjects();   // renders projects, then calls initScrollReveal()
  initScrollReveal(); // also catches non-project .reveal elements
  initBackToTop();
});