$(document).ready(function() {
  var topsliderHeight = $('#topslider').height();
  var $topbar = $('.topbar');
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > topsliderHeight) {
      $topbar.addClass('is-scrolled')
    } else {
      $topbar.removeClass('is-scrolled')
    }
    
  })
});
