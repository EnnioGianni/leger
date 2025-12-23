// ===== Main qui bouge — anime les images plumeDeture.png dans les tables =====
(function () {
  const DURATION_MS = 3000;     // durée d’une séquence
  const AMP_X = 10;             // amplitude horizontale (px)
  const AMP_Y = 3;              // amplitude verticale max (px)
  let isAnimating = false;
  let lastScrollY = window.scrollY;

  // Accessibilité : si l’utilisateur préfère moins d’animations, on désactive.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  // Sélectionne toutes les plumes, quel que soit le chemin relatif
  const handImages = Array.from(document.querySelectorAll('table img[src$="plumeDeture.png"]'));
  if (!handImages.length) return;

  // Petite aide pour marquer les images transformables
  handImages.forEach(img => img.classList.add('hand-anim'));

  function animateHand(img) {
    return new Promise(resolve => {
      const start = performance.now();
      let rafId = null;

      function frame(t) {
        const elapsed = t - start;
        const p = Math.min(elapsed / DURATION_MS, 1); // progression 0..1

        // Mouvement oscillant horizontal (sinus), et léger “flottement” vertical
        const x = Math.sin(p * Math.PI * 2) * AMP_X;
        const y = Math.sin(p * Math.PI * 6 + (img._phase || 0)) * AMP_Y;

        img.style.transform = `translate(${x}px, ${y}px)`;

        if (p < 1) {
          rafId = requestAnimationFrame(frame);
        } else {
          img.style.transform = 'translate(0, 0)';
          resolve();
        }
      }

      // phase aléatoire pour éviter que toutes les plumes bougent pareil
      if (typeof img._phase !== 'number') {
        img._phase = Math.random() * Math.PI * 2;
      }

      rafId = requestAnimationFrame(frame);

      // Sécurité: cleanup si l’élément disparaît
      const observer = new MutationObserver(() => {
        if (!document.body.contains(img)) {
          cancelAnimationFrame(rafId);
          observer.disconnect();
          resolve();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }

  // Images visibles (partiellement) dans le viewport
  function getVisibleImages() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return handImages.filter(img => {
      const r = img.getBoundingClientRect();
      return r.bottom > 0 && r.top < vh;
    });
  }

  async function animateHandsSequentially(images, direction) {
    if (isAnimating) return;
    isAnimating = true;

    const sorted = images
      .slice()
      .sort((a, b) => {
        const ta = a.getBoundingClientRect().top;
        const tb = b.getBoundingClientRect().top;
        return direction === 'down' ? ta - tb : tb - ta;
      });

    for (const img of sorted) {
      await animateHand(img);
    }

    isAnimating = false;
  }

  // Détecte la direction du scroll + lance l’animation des visibles
  function onScroll() {
    const current = window.scrollY;
    const direction = current > lastScrollY ? 'down' : 'up';
    lastScrollY = current;

    const visible = getVisibleImages();
    if (visible.length) {
      animateHandsSequentially(visible, direction);
    }
  }

  // Boot
  document.addEventListener('scroll', onScroll, { passive: true });

  // Premier passage : si des images sont déjà visibles
  const firstVisible = getVisibleImages();
  if (firstVisible.length) animateHandsSequentially(firstVisible, 'down');
})();
