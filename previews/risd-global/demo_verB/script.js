$(document).ready(function(){
   console.log('load');

    // $('header').click(function(){
    //   $('.expanded').eachtoggleClass('dropdown');
    // });
    $('.menu').click(function(){
      $('nav').slideDown();
      $('header').removeClass('collapsed');
    });
    $('.close').click(function(){
      $('nav').slideUp();
      $('header').addClass('collapsed');
    });

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