// TverDEX — общая логика сайта (мобильное меню, форма заявки)

function M() {
  var L = {
    ru: { ok: 'Спасибо! Заявка отправлена, мы свяжемся с вами.', fail: 'Не удалось отправить. Напишите нам в мессенджер.', net: 'Ошибка сети. Напишите нам в мессенджер.' },
    en: { ok: 'Thank you! Your request has been sent, we will contact you.', fail: 'Could not send. Please message us in a messenger.', net: 'Network error. Please message us in a messenger.' },
    zh: { ok: '谢谢！您的需求已提交，我们会尽快联系您。', fail: '发送失败，请通过即时通讯工具联系我们。', net: '网络错误，请通过即时通讯工具联系我们。' }
  };
  return L[document.documentElement.lang] || L.ru;
}

document.addEventListener('DOMContentLoaded', function () {
  // Мобильное меню
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      toggle.textContent = nav.classList.contains('is-open') ? '✕' : '☰';
    });
  }

    // Отправка формы заявки на почту через Web3Forms
  document.querySelectorAll('.lead-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var old = btn.textContent;
      btn.disabled = true; btn.textContent = '...';
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d.success) { alert(M().ok); form.reset(); }
        else { alert(M().fail); }
      })
      .catch(function () { alert(M().net); })
      .finally(function () { btn.disabled = false; btn.textContent = old; });
    });
  });
});

// Коллаж: просмотр фото крупно (стрелки, Esc, клик по фону)
(function () {
  var items = [].slice.call(document.querySelectorAll('.gallery .gal-item'));
  var lb = document.querySelector('.lightbox');
  if (!items.length || !lb) return;
  var big = lb.querySelector('img');
  var list = [], cur = 0;
  function loaded() {
    return items.filter(function (it) { return it.querySelector('img'); });
  }
  function show(i) {
    cur = (i + list.length) % list.length;
    big.src = list[cur].querySelector('img').src;
    lb.classList.add('open');
  }
  function close() { lb.classList.remove('open'); big.src = ''; }
  items.forEach(function (it) {
    it.addEventListener('click', function () {
      list = loaded();
      var i = list.indexOf(it);
      if (i > -1) show(i);
    });
  });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', function (e) { e.stopPropagation(); show(cur - 1); });
  lb.querySelector('.lb-next').addEventListener('click', function (e) { e.stopPropagation(); show(cur + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
})();


// WeChat: окошко с номером вместо ссылки
(function () {
  var modal = document.querySelector('.wc-modal');
  if (!modal) return;
  var num = modal.querySelector('.wc-num');
  function close() { modal.classList.remove('open'); }
  [].forEach.call(document.querySelectorAll('[data-wechat]'), function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      num.textContent = el.getAttribute('data-wechat');
      modal.classList.add('open');
    });
  });
  modal.querySelector('.wc-close').addEventListener('click', close);
  modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();