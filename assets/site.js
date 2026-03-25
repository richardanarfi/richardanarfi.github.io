/* ===== DARK MODE ===== */

(function initTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) {
    document.documentElement.dataset.theme = stored;
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.dataset.theme = 'dark';
  }
})();

/* ===== DOM READY ===== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Page load fade --- */
  requestAnimationFrame(() => {
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  });

  /* --- Mobile nav toggle --- */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  /* --- Dark mode toggle --- */
  const themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    const updateLabel = () => {
      const isDark = document.documentElement.dataset.theme === 'dark';
      themeBtn.textContent = isDark ? 'Light' : 'Dark';
      themeBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    };
    updateLabel();
    themeBtn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('theme', next);
      updateLabel();
    });
  }

  /* --- Scroll progress bar --- */
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          progressBar.style.width = pct + '%';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* --- Scroll reveal (IntersectionObserver) --- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      reveals.forEach(el => el.classList.add('visible'));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
      reveals.forEach(el => observer.observe(el));
    }
  }

  /* --- Tab component --- */
  document.querySelectorAll('.tab-group').forEach(group => {
    const buttons = group.querySelectorAll('.tab-btn');
    const container = group.parentElement;
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        // Deactivate all in this group
        buttons.forEach(b => b.classList.remove('active'));
        container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        // Activate selected
        btn.classList.add('active');
        const panel = container.querySelector('[data-panel="' + tabId + '"]');
        if (panel) panel.classList.add('active');
      });
    });
  });

  /* --- Expandable sections --- */
  document.querySelectorAll('.expandable-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('expanded');
    });
  });

  /* --- Hero typing effect --- */
  const typedEl = document.querySelector('.hero-typed');
  if (typedEl) {
    const phrases = [
      'evaluation frameworks.',
      'synthetic benchmarks.',
      'agent workflows.',
      'reliable systems.'
    ];
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      typedEl.textContent = phrases[0];
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let pauseTime = 0;

    function tick() {
      const current = phrases[phraseIndex];
      if (!deleting) {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          pauseTime = 2200;
          deleting = true;
        } else {
          pauseTime = 55 + Math.random() * 40;
        }
      } else {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          pauseTime = 400;
        } else {
          pauseTime = 30;
        }
      }
      setTimeout(tick, pauseTime);
    }

    setTimeout(tick, 800);
  }

});
