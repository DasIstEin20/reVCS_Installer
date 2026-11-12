/* Progressive enhancement: downloads and all content also work without JS. */
(() => {
  const header = document.querySelector('.header');
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
  });
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  const art = document.querySelector('[data-parallax]');
  let scheduled = false;
  function updateScroll() {
    scheduled = false;
    header.classList.toggle('scrolled', window.scrollY > 15);
    art.style.setProperty('--parallax', motion.matches ? '0px' : `${Math.min(window.scrollY, 650) * .065}px`);
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateScroll); } }, {passive: true});
  motion.addEventListener('change', updateScroll);
  updateScroll();
  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('pending'); observer.unobserve(entry.target); }
    }), {threshold: .08});
    document.querySelectorAll('.reveal').forEach(element => { element.classList.add('pending'); observer.observe(element); });
  }
  // Optional size metadata is local to Pages; a network/API failure never hides
  // the fixed, versioned release link or replaces it with untrusted markup.
  fetch('release.json').then(response => response.ok ? response.json() : null).then(release => {
    if (release && Number.isSafeInteger(release.bootstrap_bytes) && release.bootstrap_bytes > 0) {
      document.querySelector('#download-size').textContent = `${(release.bootstrap_bytes / 1048576).toFixed(1)} MiB · Includes Setup, configuration and download tools.`;
    }
  }).catch(() => {});
})();
