// Language toggle for bilingual pages.
// The inline <head> script already set html[data-lang] before paint,
// so the correct section is shown without flash. This file just wires
// up clicks on the .lang-switch buttons after the DOM is ready.
(function () {
  'use strict';

  var STORAGE_KEY = 'wattrent.lang';
  var DEFAULT_LANG = 'en';

  function apply(lang) {
    var root = document.documentElement;
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'zh-tw' ? 'zh-Hant-TW' : 'en');
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

    var btns = document.querySelectorAll('.lang-switch [data-set-lang]');
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].getAttribute('data-set-lang') === lang) {
        btns[i].classList.add('active');
      } else {
        btns[i].classList.remove('active');
      }
    }
  }

  // Sync .active state to whatever <html data-lang> already is.
  function syncActive() {
    var current = document.documentElement.getAttribute('data-lang') || DEFAULT_LANG;
    apply(current);
  }

  // Delegated click handler so it works regardless of when buttons render.
  document.addEventListener('click', function (e) {
    var btn = e.target && e.target.closest && e.target.closest('[data-set-lang]');
    if (!btn) return;
    e.preventDefault();
    apply(btn.getAttribute('data-set-lang'));
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncActive);
  } else {
    syncActive();
  }
})();
