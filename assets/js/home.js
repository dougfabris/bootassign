function scrollDown() {
  $('html, body').animate({
    scrollTop: $("#p-body").offset().top
  }, 1000);
}

function isScrolledIntoView(elem) {
  var distanciaDaTelaComTopo = $(window).scrollTop();
  var alturaDaLanding = $(elem).outerHeight();

  return (distanciaDaTelaComTopo >= alturaDaLanding);
}

$('#headerButton #talkButton').click(function() {
  $.post('/converse-comigo');
});