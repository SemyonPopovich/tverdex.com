/* TverDEX — главная: карусель hero (3 слайда, стрелки, автосмена, свайп) + прозрачная шапка поверх фото.
   Фото слайдов: assets/img/hero/1.jpg, 2.jpg, 3.jpg. Интервал автосмены — INTERVAL (мс). */
(function () {
  var INTERVAL = 6000;

  // Шапка: прозрачная над фото, сплошная синяя после небольшой прокрутки
  var header = document.querySelector('header');
  if (header && document.body.classList.contains('home')) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var hero = document.querySelector('.hero-carousel');
  if (!hero) return;
  var slides = [].slice.call(hero.querySelectorAll('.hero-slide'));
  var n = slides.length, cur = 0, timer = null;
  if (!n) return;

  function show(i) {
    cur = ((i % n) + n) % n;
    slides.forEach(function (s, k) {
      s.classList.toggle('active', k === cur);
      s.setAttribute('aria-hidden', k === cur ? 'false' : 'true');
    });
  }
  function restart() {
    if (timer) clearInterval(timer);
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(function () { if (!document.hidden) show(cur + 1); }, INTERVAL);
  }

  hero.querySelector('.hero-prev').addEventListener('click', function () { show(cur - 1); restart(); });
  hero.querySelector('.hero-next').addEventListener('click', function () { show(cur + 1); restart(); });

  // свайп на телефоне
  var x0 = null;
  hero.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) { show(dx < 0 ? cur + 1 : cur - 1); restart(); }
    x0 = null;
  }, { passive: true });

  show(0);
  restart();
})();
