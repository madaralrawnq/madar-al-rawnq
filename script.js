(function(){
  function setLang(lang){
    document.documentElement.lang = (lang==='ar'?'ar':'en');
    document.documentElement.dir = (lang==='ar'?'rtl':'ltr');
    document.querySelectorAll('[data-ar]').forEach(function(el){
      el.textContent = (lang==='ar'? el.getAttribute('data-ar') : el.getAttribute('data-en'));
    });
  }
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('[data-set-lang]').forEach(function(b){ b.addEventListener('click', function(){ setLang(b.getAttribute('data-set-lang')); }); });
    setLang('ar');
  });
})();