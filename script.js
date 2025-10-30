(function(){
  function setLang(lang){
    document.documentElement.lang = (lang==='ar'?'ar':'en');
    document.documentElement.dir = (lang==='ar'?'rtl':'ltr');
    document.querySelectorAll('[data-ar]').forEach(function(el){
      el.textContent = (lang==='ar'? el.getAttribute('data-ar') : el.getAttribute('data-en'));
    });
  }
  function setTheme(t){
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('madar_theme', t);
  }
  document.addEventListener('DOMContentLoaded', function(){
    // language buttons
    document.querySelectorAll('[data-set-lang]').forEach(function(b){ b.addEventListener('click', function(){ setLang(b.getAttribute('data-set-lang')); }); });
    // theme buttons
    document.querySelectorAll('[data-set-theme]').forEach(function(b){ b.addEventListener('click', function(){ setTheme(b.getAttribute('data-set-theme')); }); });
    // load saved theme
    var saved = localStorage.getItem('madar_theme') || 'dark';
    setTheme(saved);
    setLang('ar');
  });
})();