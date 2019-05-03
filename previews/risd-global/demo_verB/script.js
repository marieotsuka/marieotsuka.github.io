$(document).ready(function(){
   console.log('load');

// $(window).on('resize scroll', function() {
//   $('.color').each(function() {
//       var activeSection = $(this).attr('id');
//     if ($(this).isInViewport()) {
//       $('#fixed-' + activeSection).addClass(activeSection + '-active');
//     } else {
//       $('#fixed-' + activeSection).removeClass(activeSection + '-active');
//     }
//   });
// });


});


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom-500 > viewportTop && elementTop < viewportBottom-500;
};

$(window).on('resize scroll', function() {
  $('section').each(function() {
    if ($(this).isInViewport()) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});