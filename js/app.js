/* ═══════════════════════════════════════════════════════════════════════
   Поведение страницы: переключение вкладок каталога, переходы из меню,
   год в подвале. Разметку вкладок делает catalog.js — здесь только логика.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var tablist = document.getElementById('tabs');
  if (tablist) {
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));

    /* Одна функция на всё состояние: и ARIA, и видимость панелей, и точка
       табуляции. Разводить это по веткам — верный способ рассинхронить. */
    function select(tab, moveFocus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (moveFocus) tab.focus();
    }

    tablist.addEventListener('click', function (e) {
      var tab = e.target.closest('[role="tab"]');
      if (tab) select(tab, false);
    });

    tablist.addEventListener('keydown', function (e) {
      var i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      var next = null;
      if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') next = tabs[0];
      else if (e.key === 'End') next = tabs[tabs.length - 1];
      if (!next) return;
      e.preventDefault();
      select(next, true);       /* выбор следует за фокусом: панели статичны */
    });

    /* Ссылки «Дебетовые карты» и т.д. в шапке и подвале: открыть вкладку
       и увести к каталогу. Фокус ставим на заголовок раздела, чтобы
       клавиатура и скринридер оказались там же, где глаз. */
    Array.prototype.forEach.call(document.querySelectorAll('[data-tab]'), function (a) {
      a.addEventListener('click', function () {
        var tab = document.getElementById(a.getAttribute('data-tab'));
        if (!tab) return;
        select(tab, false);
        var sec = document.getElementById('catalog');
        if (sec) setTimeout(function () { sec.focus({ preventScroll: true }); }, 0);
      });
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
