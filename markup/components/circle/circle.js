$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready;
  var $circle = $('.circle-rotateOuter');
  
  $('.rotationHover').hover(
    // handerlIn
    function () {
      var deg = $(this).data('deg')
      $circle.css('transform', 'translate(-50%, -50%) rotate('+deg+'deg)')

    },
    // handerlOut
    function () {
      
    }
  )
});

