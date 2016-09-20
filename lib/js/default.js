var isMobile = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);

if (isMobile) {
  document.body.classList.add('mobile');
} else {
  document.body.classList.add('pc');
}

var main = document.getElementById('main');
var mainLayer = document.getElementById('main-layer');
var btnMenu = document.getElementById('menu');
var nav = document.querySelector('nav');

btnMenu.onclick = function() {
  main.classList.add('main-tral');
  mainLayer.style.display = 'block';
}

mainLayer.onclick = function() {
  main.classList.remove('main-tral');
  mainLayer.style.display = 'none';
}