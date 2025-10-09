// Minimal, CSP-safe enhancement only.
(() => {
  const yEl = document.getElementById('y');
  if (yEl) yEl.textContent = new Date().getFullYear();

  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const grid = document.querySelector('.bg-grid');
  const setAnim = () => { if (grid) grid.style.animation = mq.matches ? 'none' : ''; };
  (mq.addEventListener ? mq.addEventListener('change', setAnim) : mq.addListener(setAnim));
  setAnim();
})();
