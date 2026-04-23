(function () {
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }

  const modal = document.getElementById('modal-approve');
  const sheet = document.getElementById('sheet-create');

  function openOverlay(el) {
    if (!el) return;
    el.hidden = false;
    requestAnimationFrame(() => el.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    const first = el.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (first) setTimeout(() => first.focus({ preventScroll: true }), 50);
  }

  function closeOverlay(el) {
    if (!el) return;
    el.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => { el.hidden = true; }, 400);
  }

  const approveBtn = document.getElementById('btn-approve');
  if (approveBtn) approveBtn.addEventListener('click', () => openOverlay(modal));

  const createBtn = document.getElementById('btn-create-order');
  if (createBtn) createBtn.addEventListener('click', () => openOverlay(sheet));

  [modal, sheet].forEach((el) => {
    if (!el) return;
    el.addEventListener('click', (e) => {
      if (e.target === el || e.target.closest('[data-close]')) {
        closeOverlay(el);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (modal && modal.classList.contains('is-open')) closeOverlay(modal);
    if (sheet && sheet.classList.contains('is-open')) closeOverlay(sheet);
  });

  document.querySelectorAll('[data-chip-group]').forEach((group) => {
    group.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip-filter');
      if (!chip) return;
      group.querySelectorAll('.chip-filter').forEach((c) => c.classList.remove('is-selected'));
      chip.classList.add('is-selected');
    });
  });

  document.querySelectorAll('[data-segmented]').forEach((seg) => {
    seg.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      seg.querySelectorAll('button').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  document.querySelectorAll('.modal-line').forEach((line) => {
    line.addEventListener('click', () => line.classList.toggle('is-selected'));
  });

  document.querySelectorAll('.alert__close').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const alert = e.currentTarget.closest('.alert');
      if (!alert) return;
      alert.style.transition = 'opacity 200ms, transform 200ms';
      alert.style.opacity = '0';
      alert.style.transform = 'translateY(-4px)';
      setTimeout(() => alert.remove(), 220);
    });
  });
})();
