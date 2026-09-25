/* ═══════════════════════════════════════════════════════════════════════
   Рисует вкладки и карточки каталога из data.js.
   Грузится ДО app.js — тот включает переключение уже на готовой разметке.

   Раздел, добавленный в панели управления, появляется на сайте сам:
   вкладки строятся из CATEGORIES, карточки — из OFFERS.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* Каталог объявлен глобальными const (data.js или data.php), а const мимо
     window не переприсвоить — работаем с локальными копиями. На адресе
     index.html?draft=1 подставляется черновик из панели: его кладёт в
     localStorage кнопка «Предпросмотр». Боевой адрес это не затрагивает. */
  var site   = typeof SITE       !== 'undefined' ? SITE       : {};
  var cats   = typeof CATEGORIES !== 'undefined' ? CATEGORIES : [];
  var offers = typeof OFFERS     !== 'undefined' ? OFFERS     : [];

  if (/[?&]draft/.test(location.search)) {
    try {
      var draftFile = localStorage.getItem('kvartal_admin_draft:file');
      if (draftFile) {
        var d = new Function(draftFile + '\n;return { SITE: SITE, CATEGORIES: CATEGORIES, OFFERS: OFFERS };')();
        site = d.SITE || site; cats = d.CATEGORIES || cats; offers = d.OFFERS || offers;
      }
    } catch (e) { /* битый черновик — показываем боевой каталог */ }
  }

  window.WHITECASH = { site: site };

  /* ── тексты сайта из панели ───────────────────────────────────────── */
  var brand = String(site.brand == null ? '' : site.brand).trim();
  if (brand) {
    /* [data-brand] — крупная надпись на первом экране: она тоже должна
       переезжать вслед за названием, которое меняют в панели. */
    Array.prototype.forEach.call(document.querySelectorAll('.brand__word, [data-brand]'), function (n) {
      n.textContent = brand;
    });
    document.title = brand + ' — дебетовые и кредитные карты, займы МФО онлайн';
    /* Надпись ссылки-логотипа тоже из панели: иначе после переименования
       сайта голосовое управление и скринридер зовут её старым именем. */
    var brandLink = document.querySelector('a.brand');
    if (brandLink) brandLink.setAttribute('aria-label', brand + ' — на главную');
  }
  var eyebrow = document.querySelector('.hero .eyebrow');
  if (eyebrow && site.tagline) {
    var dot = eyebrow.querySelector('.dot');
    eyebrow.textContent = '';
    if (dot) eyebrow.appendChild(dot);
    eyebrow.appendChild(document.createTextNode(site.tagline));
  }

  var tabsBox = document.getElementById('tabs');
  var panelsBox = document.getElementById('panels');
  if (!tabsBox || !panelsBox) return;

  /* ── помощники ────────────────────────────────────────────────────── */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function initials(name) {
    return String(name || '?').trim().split(/[\s-]+/).slice(0, 2)
      .map(function (w) { return w.charAt(0); }).join('').toUpperCase();
  }
  /* Транслитерация не нужна: id собираем из индекса, чтобы он всегда был
     валидным и не совпал с чужим. */
  function slug(i) { return 'c' + i; }

  function plural(n, one, few, many) {
    var m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
    return many;
  }

  /* ── карточка ─────────────────────────────────────────────────────── */
  function cardHTML(o, cta, uid) {
    var logo = o.logo
      ? '<span class="card__logo"><img src="' + esc(o.logo) + '" alt="" width="38" height="30" loading="lazy"></span>'
      : '<span class="card__logo card__logo--text" style="background:' + esc((o.tone && o.tone.bg) || '#3f7020') +
        ';color:' + esc((o.tone && o.tone.ink) || '#fff') + '">' + esc(initials(o.partner)) + '</span>';

    var specs = (o.specs || []).filter(function (p) { return p && (p[0] || p[1]); }).map(function (p) {
      return '<li><span class="specs__row"><span class="specs__k">' + esc(p[0]) + '</span>' +
             (p[1] ? ': <b>' + esc(p[1]) + '</b>' : '') + '</span></li>';
    }).join('');

    /* Доступное имя кнопки: видимое слово + продукт и банк. Иначе на
       странице получилось бы 29 ссылок с одинаковым именем «Оформить». */
    var name = esc(cta) + '<span class="vh"> — ' + esc(o.title) +
               (o.partner ? ', ' + esc(o.partner) : '') + '. Откроется в новой вкладке</span>';

    var href = o.url ? esc(o.url) : '';
    var go = href
      ? '<a class="btn" href="' + href + '" target="_blank" rel="noopener" ' +
        'id="' + uid + '-cta">' + name + ' <span class="ext" aria-hidden="true">↗</span></a>'
      : '<span class="btn" aria-disabled="true" style="opacity:.6;cursor:default">Скоро</span>';

    return '' +
      '<li class="card">' +
        '<div class="card__top">' + logo +
          '<span><span class="card__partner">' + esc(o.partner) + '</span>' +
          (o.tag ? '<br><span class="card__tag">' + esc(o.tag) + '</span>' : '') + '</span>' +
        '</div>' +
        '<h3 id="' + uid + '-title">' + esc(o.title) + '</h3>' +
        (o.headline ? '<p class="card__headline">' + esc(o.headline) + '</p>' : '') +
        (o.note ? '<p class="card__note">' + esc(o.note) + '</p>' : '') +
        (specs ? '<ul class="specs" role="list">' + specs + '</ul>' : '') +
        '<p class="card__go">' + go + '</p>' +
      '</li>';
  }

  /* ── вкладки и панели ─────────────────────────────────────────────── */
  var tabsHTML = '', panelsHTML = '', shown = 0;

  cats.forEach(function (c, i) {
    var list = offers.filter(function (o) { return o.cat === c.id && !o.hidden; });
    var id = slug(i);
    var first = shown === 0;
    shown++;

    tabsHTML += '<button type="button" class="tab" role="tab" id="tab-' + id + '"' +
      ' aria-controls="panel-' + id + '" aria-selected="' + (first ? 'true' : 'false') + '"' +
      ' tabindex="' + (first ? '0' : '-1') + '">' + esc(c.label) +
      ' <span class="tab__n" aria-hidden="true">' + list.length + '</span>' +
      '<span class="vh">, ' + list.length + ' ' +
      plural(list.length, 'предложение', 'предложения', 'предложений') + '</span></button>';

    var body = list.length
      ? '<ul class="cards" role="list">' +
          list.map(function (o, n) { return cardHTML(o, c.cta || 'Оформить', id + '-' + n); }).join('') +
        '</ul>'
      : '<p class="empty">В этом разделе пока нет предложений. Загляните позже.</p>';

    panelsHTML += '<div class="panel" role="tabpanel" id="panel-' + id + '"' +
      ' aria-labelledby="tab-' + id + '"' + (first ? '' : ' hidden') + '>' +
      '<p class="panel__count">' + list.length + ' ' +
      plural(list.length, 'предложение', 'предложения', 'предложений') + ' в разделе «' + esc(c.label) + '»</p>' +
      body + '</div>';
  });

  tabsBox.innerHTML = tabsHTML;
  panelsBox.innerHTML = panelsHTML;

  /* Ссылки в шапке и подвале ведут на нужную вкладку — им нужен её id. */
  var byCat = {};
  cats.forEach(function (c, i) { byCat[c.id] = 'tab-' + slug(i); });
  Array.prototype.forEach.call(document.querySelectorAll('[data-jump]'), function (a) {
    var t = byCat[a.getAttribute('data-jump')];
    if (t) a.setAttribute('data-tab', t); else a.removeAttribute('data-jump');
  });

  /* ── лента логотипов на первом экране ─────────────────────────────── */
  var row = document.getElementById('partners-row');
  if (row) {
    var seen = {}, items = '';
    offers.forEach(function (o) {
      if (!o.logo || o.hidden || seen[o.logo]) return;
      seen[o.logo] = true;
      if (Object.keys(seen).length > 12) return;
      items += '<li><img src="' + esc(o.logo) + '" alt="' + esc(o.partner) + '" height="26" loading="lazy"></li>';
    });
    if (items) row.innerHTML = items; else row.closest('.partners').hidden = true;
  }

  /* Число предложений на первом экране держим в согласии с каталогом. */
  var total = offers.filter(function (o) { return !o.hidden; }).length;
  var stat = document.querySelector('.hero__stats b');
  if (stat) stat.textContent = String(total);
  var stats = document.querySelectorAll('.hero__stats li');
  if (stats[1]) stats[1].querySelector('b').textContent = String(cats.length);
})();
