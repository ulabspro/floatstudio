$(document).ready(function () {
  $(".specialist-list").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<div class="slick-arrow slick-prev"><i class="icon icon-prev"></div>',
      nextArrow: '<div class="slick-arrow slick-next"><i class="icon icon-next"></div>',

      responsive: [{
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      }]
  });
});