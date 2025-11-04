// src/utils/typewriter.js
export function typewriter(el, {
  speed = 22,          // chars per second
  delay = 0,           // ms before start
  keepCaret = false,   // keep caret after typing ends
  cursorChar = null,   // null = 1px bar, or pass '|' '▌' '▍' '▎' '_'
  loop = false,        // repeatedly erase and retype
  backSpeed = 40,      // chars per second when erasing (if loop)
  pause = 1200,        // pause between type & erase (if loop)
} = {}) {
  if (!el) return;

  // If reduced motion, show full text immediately
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const original = (el.textContent ?? '').trim();

  // Prepare container
  el.classList.add('typewriter');
  el.textContent = '';
  const textSpan = document.createElement('span');
  textSpan.className = 'tw-text';
  el.appendChild(textSpan);

  let caret;
  if (cursorChar) {
    caret = document.createElement('span');
    caret.textContent = cursorChar;
    caret.style.marginLeft = '2px';
    caret.className = 'tw-caret';
    el.appendChild(caret);
  } else {
    caret = document.createElement('span');
    caret.className = 'tw-caret';
    el.appendChild(caret);
  }

  if (reduceMotion) {
    textSpan.textContent = original;
    if (!keepCaret) caret.remove();
    el.classList.add('-done');
    return;
  }

  const typeDelay = 1000 / Math.max(1, speed);
  const backDelay = 1000 / Math.max(1, backSpeed);

  let i = 0, dir = 1, timer;

  const tick = () => {
    if (dir > 0) {
      // typing
      textSpan.textContent = original.slice(0, i);
      i++;
      if (i <= original.length) {
        timer = setTimeout(tick, typeDelay);
      } else if (loop) {
        setTimeout(() => { dir = -1; tick(); }, pause);
      } else {
        if (!keepCaret) caret.remove();
        el.classList.add('-done');
      }
    } else {
      // erasing (for loop)
      i--;
      textSpan.textContent = original.slice(0, i);
      if (i > 0) {
        timer = setTimeout(tick, backDelay);
      } else {
        setTimeout(() => { dir = 1; tick(); }, pause);
      }
    }
  };

  setTimeout(tick, delay);
}

/**
 * Attach to any elements matched by `selector`.
 * Triggers when element enters viewport (once by default).
 * Use data-speed / data-delay / data-loop / data-cursor on the element to override defaults.
 */
// export function attachTypewriter(selector = '[data-ty]', options = {}) {
//   const els = Array.from(document.querySelectorAll(selector));
//   if (!els.length) return;

//   const io = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (!entry.isIntersecting) return;
//       const el = entry.target;
//       if (el.dataset.typed === '1') return; // already done
//       el.dataset.typed = '1';

//       typewriter(el, {
//         ...options,
//         speed    : +el.dataset.speed   || options.speed    || 22,
//         delay    : +el.dataset.delay   || options.delay    || 0,
//         keepCaret: el.dataset.keepcaret === 'true' || options.keepCaret || false,
//         loop     : el.dataset.loop     === 'true' || options.loop     || false,
//         backSpeed: +el.dataset.backspeed || options.backSpeed || 40,
//         pause    : +el.dataset.pause     || options.pause     || 1200,
//         cursorChar: el.dataset.cursor || options.cursorChar || null,
//       });

//       // If not looping, unobserve to keep perf tidy
//       if (el.dataset.loop !== 'true' && !options.loop) io.unobserve(el);
//     });
//   }, { root: null, threshold: 0.2 });

//   els.forEach((el) => io.observe(el));
// }

export function attachTypewriter(selector, defaults = {}) {
  const els = Array.from(document.querySelectorAll(selector));
  els.forEach(el => run(el, defaults));
}

function run(el, defaults) {
  const speed     = parseInt(el.dataset.speed || defaults.speed || 24, 10);
  const delay     = parseInt(el.dataset.delay || defaults.delay || 0, 10);
  const cursorChr = el.dataset.cursor ?? defaults.cursorChar ?? '▌';

  // Preserve inner HTML (tags stay)
  const src = el.innerHTML;

  let i = 0;
  let out = '';
  let inTag = false;

  // Start empty
  el.innerHTML = '';

  const tick = () => {
    // reveal characters one by one
    while (i < src.length) {
      const ch = src[i++];
      out += ch;

      if (ch === '<') inTag = true;
      if (ch === '>') inTag = false;

      // stop only after writing one visible (non-tag) character
      if (!inTag) break;
    }

    // When done typing
    if (i >= src.length) {
      el.innerHTML = out;
      return;
    }

    // Append blinking cursor outside tags
    el.innerHTML = out + `<span class="ty-cursor">${cursorChr}</span>`;
    setTimeout(tick, speed);
  };

  setTimeout(tick, delay);
}

