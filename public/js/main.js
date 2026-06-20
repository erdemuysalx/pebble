(function () {

  // ---------------------------------------------------------------------------
  // Copy button on code blocks
  // ---------------------------------------------------------------------------
  document.querySelectorAll('pre').forEach(function (pre) {
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'copy';
    btn.setAttribute('aria-label', 'Copy code');
    pre.appendChild(btn);

    btn.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      var code = pre.querySelector('code');
      var text = code ? code.innerText : pre.innerText.replace(btn.textContent, '').trim();
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'copied!';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'copy';
          btn.classList.remove('copied');
        }, 1800);
      }).catch(function () {
        btn.textContent = 'failed';
        setTimeout(function () { btn.textContent = 'copy'; }, 1800);
      });
    });
  });

  // ---------------------------------------------------------------------------
  // Project carousel
  // ---------------------------------------------------------------------------
  var carousel = document.querySelector('.project-carousel');
  if (carousel) {
    var dots = Array.from(document.querySelectorAll('.carousel-dot'));
    var autoTimer;
    var INTERVAL = 4000;

    function pageWidth() { return carousel.offsetWidth || 1; }

    function activeDotIndex() {
      var idx = Math.round(carousel.scrollLeft / pageWidth());
      return Math.max(0, Math.min(idx, dots.length - 1));
    }

    function setActiveDot(idx) {
      dots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });
    }

    function scrollToPage(idx) {
      carousel.scrollTo({ left: idx * pageWidth(), behavior: 'smooth' });
    }

    function advance() {
      var next = activeDotIndex() + 1;
      if (next >= dots.length) next = 0;
      scrollToPage(next);
    }

    function startAuto() { autoTimer = setInterval(advance, INTERVAL); }
    function stopAuto()  { clearInterval(autoTimer); }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        stopAuto();
        scrollToPage(i);
        // Delay restart until after the smooth-scroll animation settles (~400 ms),
        // otherwise advance() may read a stale scrollLeft mid-animation.
        setTimeout(startAuto, 450);
      });
    });
    carousel.addEventListener('scroll', function () { setActiveDot(activeDotIndex()); }, { passive: true });
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
    startAuto();
  }

})();
