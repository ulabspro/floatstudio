$(document).ready(function () {
  $('.topslider-list').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    dotsClass: 'topslider-dots'
  });
});


// var is_nowScrolling = false
// var scrollTime = '3000'
//
// var stopScrolling = function () {
//   setTimeout(function () {
//     is_nowScrolling = false
//   }, 300)
// }
//
// function scrollTo(scrollTop) {
//   is_nowScrolling = true
//   $('body').animate(
//     {
//       scrollTop: scrollTop
//     },
//     '2000',
//     stopScrolling
//   );
// }
//
// function getScrollDirectionDecorator(fn) {
//   var lastScrollTop = 0;
//
//   return function () {
//     var top = $(window).scrollTop();
//     var scrollDirection = (top < lastScrollTop) ? 'up': 'down';
//     lastScrollTop = top;
//     fn(scrollDirection)
//   }
// }
//
//
// $(document).ready(function() {
//   var $window = $(window),
//     winHeight = $window.height(),
//     lastScrollTop = 0,
//     topsliderHeight = $('#topslider').height(),
//     $scrollIcon = $('.topslider-scroll');
//
//   function onScroll (scrollDirection) {
//     if ($('.topslider-scroll').visible() && !is_nowScrolling) {
//       if (scrollDirection == 'down') {
//         scrollTo(topsliderHeight + 100)
//       }
//       if (scrollDirection == 'up') {
//         scrollTo(0)
//       }
//     }
//     lastScrollTop = top;
//   }
//
//   // $window.on('scroll', onScroll);
//   $window.on('scroll', getScrollDirectionDecorator(onScroll));
//
// });


// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
//     else if (event.detail) {(delta = -event.detail / 3);}
//
//     handle(delta);
//     if (event.preventDefault) {(event.preventDefault());}
//     event.returnValue = false;
// }
//
// function handle(delta) {
//     var time = 10;
//     var distance = 500;
//
//     $('html, body').stop().animate({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time );
// }
// $(document).ready(function() {
//   // Stuff to do as soon as the DOM is ready;
//   if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
//     window.onmousewheel = document.onmousewheel = wheel;
// });
//
