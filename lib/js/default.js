var isMobile = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);

if (isMobile) {
  $('body').addClass('mobile');
} else {
  $('body').addClass('pc');
}

$('#menu').on('click', function() {
  $('#main').addClass('main-tral');
  $('#main-layer').css('display', 'block');
  $('body').css('overflow', 'hidden');
})

$('#main-layer').on('click', function() {
  $('#main').removeClass('main-tral');
  $('#main-layer').css('display', 'none');
  $('body').css('overflow', '');
})
