// Nav item click highlights
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function() {
    navItems.forEach(i => i.classList.remove('clicked'));
    navItems.forEach(i => i.classList.add('not-clicked'));
    
    this.classList.remove('not-clicked');
    this.classList.add('clicked');
  });
});

// Set footer year
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  // ==========================================
  // DARK MODE TOGGLE
  // ==========================================
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check for saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // ==========================================
  // DRAG TO SCROLL for projects
  // (track drag distance to distinguish drag from click)
  // ==========================================
  const scrollContainer = document.querySelector('.projects-scroll-container');
  let dragDistance = 0;

  if (scrollContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      dragDistance = 0;
      scrollContainer.style.cursor = 'grabbing';
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
      isDown = false;
      scrollContainer.style.cursor = 'grab';
    });

    scrollContainer.addEventListener('mouseup', () => {
      isDown = false;
      scrollContainer.style.cursor = 'grab';
    });

    scrollContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5;
      dragDistance += Math.abs(x - startX);
      scrollContainer.scrollLeft = scrollLeft - walk;
      startX = x;
      scrollLeft = scrollContainer.scrollLeft;
    });
  }

  // ==========================================
  // PROJECT DATA
  // ==========================================
  const projectData = {
    tetris: {
      title: 'Tetris AI with Deep Q-Learning',
      date: 'November 2025 — December 2025',
      gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>',
      tags: ['Python', 'PyTorch', 'Pygame', 'NumPy'],
      description: 'A deep reinforcement learning agent trained to play a modified version of Tetris featuring random piece spawning and 5 unique powerup types.',
      highlights: [
        'Achieved 28x performance improvement over heuristic baselines (644,031 vs 22,955 average score)',
        'Designed a compact 4-feature state representation for efficient learning',
        'Trained over 3,000 episodes using experience replay and epsilon-greedy exploration',
        'Multi-objective decision-making balancing line clears with powerup usage'
      ],
      repo: 'https://github.com/Prasham-Parekh',
      repoType: 'public',
      url: 'github.com/Prasham-Parekh'
    },
    fluid: {
      title: '3D Fluid Simulator',
      date: 'October 2025 — December 2025',
      gradient: 'linear-gradient(135deg, #0b486b, #3b8d99, #6dd5fa)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
      tags: ['C++', 'OpenFrameworks', 'GLSL'],
      description: 'A real-time 3D fluid simulation built with Smoothed Particle Hydrodynamics, featuring interactive controls and multiple rendering modes.',
      highlights: [
        'Supports 50 to 1,000 customizable particles with real-time performance',
        'Dual rendering modes: particle spheres and fluid mesh via metaball surface reconstruction',
        'Interactive force application system for manipulating the fluid in real-time',
        'Custom GLSL shaders for realistic fluid appearance'
      ],
      repo: null,
      repoType: 'private',
      url: 'Private repository'
    },
    insulin: {
      title: 'Insulin Pump Simulator',
      date: 'January 2025 — April 2025',
      gradient: 'linear-gradient(135deg, #134e5e, #71b280)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
      tags: ['C++', 'Qt6', 'QML'],
      description: 'A team-built insulin pump simulator modeled after the Tandem t:slim X2, designed for understanding automated insulin delivery systems.',
      highlights: [
        'Implemented Control IQ automated delivery algorithm and manual bolus calculation',
        'Architected business logic layer using Clean Architecture principles',
        'Designed profile management system with customizable basal rates and delivery configurations',
        'Collaborative 4-person team project with clear separation of concerns'
      ],
      repo: null,
      repoType: 'private',
      url: 'Private repository'
    },
    flappy: {
      title: 'Flappy Bird AI',
      date: 'June 2024 — January 2025',
      gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>',
      tags: ['Python', 'Pygame', 'NEAT'],
      description: 'An AI-powered Flappy Bird where neural networks evolve through the NEAT algorithm to learn optimal gameplay strategies.',
      highlights: [
        'Built a complete game environment with pipes, bird physics, gravity, and collision detection',
        'Utilized NEAT (NeuroEvolution of Augmenting Topologies) to evolve AI agents',
        'Designed a fitness function evaluating survival time and obstacle navigation',
        'Agents progressively learn to play perfectly over generations'
      ],
      repo: 'https://github.com/Prasham-Parekh/Flappy-Bird-AI',
      repoType: 'public',
      url: 'github.com/Prasham-Parekh/Flappy-Bird-AI'
    },
    booklibrary: {
      title: 'Book Library Wishlist',
      date: 'July 2024 — August 2024',
      gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
      tags: ['JavaScript', 'HTML', 'CSS'],
      description: 'A dynamic book library website where users can browse books, manage a personal wishlist, read detailed synopses, and track their activity history — all within a clean, interactive frontend.',
      highlights: [
        'Add and remove books to/from a personal wishlist with instant UI updates',
        'View detailed book synopses with a polished reading experience',
        'Action history tracking that maintains a log of all user interactions during the session',
        'Persistent data storage during runtime for a seamless user experience'
      ],
      repo: 'https://github.com/Prasham-Parekh',
      repoType: 'public',
      url: 'github.com/Prasham-Parekh'
    }
  };

  // ==========================================
  // PROJECT MODAL
  // ==========================================
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalUrlText = document.getElementById('modalUrlText');
  const modalExternalLink = document.getElementById('modalExternalLink');
  const modalClose = document.getElementById('modalClose');

  function openProject(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;

    // Set URL bar
    modalUrlText.textContent = project.url;

    // External link
    if (project.repo) {
      modalExternalLink.href = project.repo;
      modalExternalLink.style.display = 'flex';
    } else {
      modalExternalLink.href = '#';
      modalExternalLink.style.display = 'none';
    }

    // Build tags HTML
    const tagsHtml = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

    // Build highlights HTML
    const highlightsHtml = project.highlights.map(h => `<li>${h}</li>`).join('');

    // Repo section
    let repoHtml = '';
    if (project.repoType === 'public') {
      repoHtml = `
        <div class="modal-actions">
          <a href="${project.repo}" target="_blank" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            View on GitHub
          </a>
        </div>`;
    } else {
      repoHtml = `
        <div class="modal-repo-notice">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>This is a private team repository. Code is available upon request — feel free to <a href="./index.html#contact-section" style="color: var(--accent); text-decoration: underline;">reach out</a>!</span>
        </div>`;
    }

    modalContent.innerHTML = `
      <div class="modal-project-header">
        <div class="modal-project-icon" style="background: ${project.gradient};">
          ${project.icon}
        </div>
        <div>
          <div class="modal-project-title">${project.title}</div>
          <div class="modal-project-date">${project.date}</div>
          <div class="modal-tags">${tagsHtml}</div>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">About</div>
        <p>${project.description}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Key Highlights</div>
        <ul>${highlightsHtml}</ul>
      </div>

      <div class="modal-section">
        ${repoHtml}
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Card click handlers
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open modal if user was dragging to scroll
      if (dragDistance > 5) return;
      const key = card.getAttribute('data-project');
      openProject(key);
    });
  });

  // Close handlers
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ==========================================
  // ACTIVE NAV ON SCROLL
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNav() {
    const scrollY = window.scrollY + 120;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('clicked');
          if (item.getAttribute('href') === '#' + sectionId) {
            item.classList.add('clicked');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();
});