$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};


$(document).ready(function(){
   console.log('load');

    // $('header').click(function(){
    //   $('.expanded').eachtoggleClass('dropdown');
    // });
    $('.menu').click(function(){
      $('nav').slideDown();
      $('header').removeClass('collapsed');
      $('body').addClass('fixedPos');
    });
    $('.close').click(function(){
      $('nav').slideUp();
      $('header').addClass('collapsed');
      $('body').removeClass('fixedPos');
    });

    $('.snapshot').attr('data-scroll-speed', 1)
    $('.snapshot:nth-child(2n)').attr('data-scroll-speed', 2)

    $('[data-scroll-speed]').moveIt();

    // var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene);

    // $('.snapshot').paroller({ factor: 0.1, type: 'foreground', direction: 'vertical' });
    // var f = setMovement.factor($this, width, options);
    // $('#snap').parallor({factor: f});
    // $('.snapshot:nth-child(2n)').attr('data-paroller-factor', 0.3)

});




// // Initialization
// $(function(){
  
// });


// $.fn.isInViewport = function() {
//   var elementTop = $(this).offset().top;
//   var elementBottom = elementTop + $(this).outerHeight();

//   var viewportTop = $(window).scrollTop();
//   var viewportBottom = viewportTop + $(window).height();

//   return elementBottom-500 > viewportTop && elementTop < viewportBottom-500;
// };

// $(window).on('resize scroll', function() {
//   $('section').each(function() {
//     if ($(this).isInViewport()) {
//       $(this).addClass('active');
//     } else {
//       $(this).removeClass('active');
//     }
//   });
// });