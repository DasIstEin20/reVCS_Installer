/* Progressive enhancement: downloads and all content also work without JS. */
(() => {
  const header = document.querySelector('.header');
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const languages = document.querySelector('.language-switch');
  const releaseURL = new URL('release.json', document.currentScript.src);
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function closeMenu(restoreFocus = false) {
    const wasOpen = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    if (wasOpen && restoreFocus) menu.focus();
  }
  menu.addEventListener('click', () => {
    languages.open = false;
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
  });
  navigation.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    if (menu.getAttribute('aria-expanded') === 'true') {
      const target = document.querySelector(link.hash);
      if (target) {
        target.tabIndex = -1;
        target.focus({preventScroll: true});
      }
    }
    closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu(true);
      if (languages.open) {
        languages.open = false;
        languages.querySelector('summary').focus();
      }
    }
  });
  document.addEventListener('click', event => { if (!header.contains(event.target)) closeMenu(); });
  document.addEventListener('click', event => { if (!languages.contains(event.target)) languages.open = false; });
  languages.addEventListener('toggle', () => { if (languages.open) closeMenu(); });
  window.matchMedia('(max-width: 900px)').addEventListener('change', () => closeMenu());
  // Collapse navigation only after its controls are ready. Without JS every
  // navigation link remains visible, including on small screens.
  header.classList.add('menu-ready');
  menu.hidden = false;
  const art = document.querySelector('[data-parallax]');
  let scheduled = false;
  function updateScroll() {
    scheduled = false;
    header.classList.toggle('scrolled', window.scrollY > 15);
    art.style.setProperty('--parallax', motion.matches ? '0px' : `${Math.min(window.scrollY, 650) * .065}px`);
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateScroll); } }, {passive: true});
  motion.addEventListener('change', () => {
    updateScroll();
    if (motion.matches) document.querySelectorAll('.reveal.pending').forEach(element => element.classList.remove('pending'));
  });
  updateScroll();
  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('pending'); observer.unobserve(entry.target); }
    }), {threshold: .08});
    document.querySelectorAll('.reveal').forEach(element => { element.classList.add('pending'); observer.observe(element); });
  }
  document.addEventListener('focusin', event => {
    const reveal = event.target.closest('.reveal');
    if (reveal) reveal.classList.remove('pending');
  });
  // The static thumbnail and text links work without JavaScript. Enhance only
  // the thumbnail into a play button; keep the YouTube fallback beside it.
  const dialog = document.querySelector('.video-dialog');
  const playerHost = dialog.querySelector('.video-player');
  let activeVideoButton;
  dialog.querySelector('.player-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    // Remove the player to stop both playback and network activity on close.
    playerHost.replaceChildren();
    document.body.classList.remove('video-open');
    activeVideoButton?.focus({preventScroll: true});
  });
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  document.querySelectorAll('.video-preview[data-video-id]').forEach(link => {
    if (typeof dialog.showModal !== 'function') return;
    const videoId = link.dataset.videoId;
    if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) return;
    const title = link.closest('.video-card').querySelector('h3').textContent;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'video-preview';
    const playLabel = link.dataset.playLabel;
    button.setAttribute('aria-label', `${playLabel}: ${title}`);
    button.append(...link.childNodes);
    button.querySelector('.video-preview-label').textContent = playLabel;
    button.addEventListener('click', () => {
      const player = document.createElement('iframe');
      player.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
      player.title = title;
      player.allow = 'autoplay; encrypted-media; picture-in-picture; web-share';
      player.allowFullscreen = true;
      player.referrerPolicy = 'strict-origin-when-cross-origin';
      dialog.querySelector('#player-title').textContent = title;
      dialog.querySelector('#player-title').lang = 'en';
      dialog.querySelector('.player-fallback').href = link.href;
      playerHost.replaceChildren(player);
      activeVideoButton = button;
      document.body.classList.add('video-open');
      dialog.showModal();
      dialog.querySelector('.player-close').focus();
    });
    link.replaceWith(button);
  });
  // Optional size metadata is local to Pages; a network/API failure never hides
  // the fixed, versioned release link or replaces it with untrusted markup.
  fetch(releaseURL).then(response => response.ok ? response.json() : null).then(release => {
    if (release && Number.isSafeInteger(release.bootstrap_bytes) && release.bootstrap_bytes > 0) {
      const size = document.querySelector('#download-size');
      size.textContent = `${(release.bootstrap_bytes / 1048576).toFixed(1)} MiB · ${size.textContent}`;
    }
  }).catch(() => {});
})();
