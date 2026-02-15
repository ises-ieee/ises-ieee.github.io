(function () {
  const btn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!isOpen));
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
})();

/* ===== Nav submenu usability enhancer (hover bridge + click-to-open) ===== */
(function () {
  const btn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]') || document.querySelector('.site-nav');
  if (!nav) return;

  // Mark anchors that have submenus (for caret styling + a11y)
  nav.querySelectorAll('li').forEach((li) => {
    const submenu = li.querySelector(':scope > ul');
    const a = li.querySelector(':scope > a');
    if (submenu && a) {
      a.classList.add('has-children');
      a.setAttribute('aria-haspopup', 'true');
      if (!a.hasAttribute('aria-expanded')) a.setAttribute('aria-expanded', 'false');
    }
  });

  // Click-to-open behavior
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a || !nav.contains(a)) return;

    const li = a.closest('li');
    if (!li) return;

    const submenu = li.querySelector(':scope > ul');
    if (!submenu) return;

    const href = (a.getAttribute('href') || '').trim();
    if (href === '' || href === '#') e.preventDefault();

    const isOpen = li.classList.contains('is-open');

    // Close siblings
    const parent = li.parentElement;
    if (parent) {
      Array.from(parent.children).forEach((sib) => {
        if (sib !== li) {
          sib.classList.remove('is-open');
          const sa = sib.querySelector(':scope > a.has-children');
          if (sa) sa.setAttribute('aria-expanded', 'false');
        }
      });
    }

    li.classList.toggle('is-open', !isOpen);
    a.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (nav.contains(e.target) || (btn && btn.contains(e.target))) return;
    nav.querySelectorAll('li.is-open').forEach((li) => li.classList.remove('is-open'));
    nav.querySelectorAll('a.has-children[aria-expanded="true"]').forEach((a) => a.setAttribute('aria-expanded', 'false'));
  });

  // Close on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    nav.querySelectorAll('li.is-open').forEach((li) => li.classList.remove('is-open'));
    nav.querySelectorAll('a.has-children[aria-expanded="true"]').forEach((a) => a.setAttribute('aria-expanded', 'false'));
    if (btn && nav.getAttribute && nav.getAttribute('data-open') === 'true') {
      nav.setAttribute('data-open', 'false');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
/* ===== End enhancer ===== */
