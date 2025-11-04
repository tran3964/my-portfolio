export function initIconStrips() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.icon-strip').forEach(strip => {
    const track = strip.querySelector('.icon-track');
    if (!track) return;

    const pxPerSecDefault = 80;
    let ro;

    function ensureClones() {
      if (track.dataset.duplicated) return;
      track.innerHTML += track.innerHTML; // duplicate once for seamless loop
      track.dataset.duplicated = '1';
    }

    function removeClones() {
      if (!track.dataset.duplicated) return;
      const half = track.children.length / 2;
      while (track.children.length > half) track.lastElementChild.remove();
      delete track.dataset.duplicated;
    }

    function apply() {
      const stripW = strip.clientWidth;
      const trackW = track.scrollWidth;
      const overflow = trackW > stripW + 1;

      if (!overflow || prefersReduced) {
        strip.classList.remove('is-loop');
        removeClones();
        strip.style.removeProperty('--speed');
        return;
      }

      ensureClones();
      const oneLoopPx = track.scrollWidth / 2;
      const pxPerSec = parseFloat(strip.dataset.speed) || pxPerSecDefault;
      const seconds = Math.max(6, oneLoopPx / pxPerSec);

      strip.style.setProperty('--speed', `${seconds}s`);
      strip.classList.add('is-loop');
    }

    ro = new ResizeObserver(apply);
    ro.observe(strip);
    ro.observe(track);
    requestAnimationFrame(apply);
  });
}
