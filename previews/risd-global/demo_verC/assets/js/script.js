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
      $('nav').slideDown(250);
      $('header').removeClass('collapsed');
      $('body').addClass('fixedPos');
    });
    $('.close').click(function(){
      $('nav').slideUp(250);
      $('header').addClass('collapsed');
      $('body').removeClass('fixedPos');
    });

    $('.snapshot').attr('data-scroll-speed', 8)
    // $('.snapshot:nth-child(2n)').attr('data-scroll-speed', 12)

    $('[data-scroll-speed]').moveIt();



    $('.snapshot').each(function(){
      //
      //
      // $(elem).width()
      // $(elem).height()
      $(this).mousemove(function(e){
          // console.log(e.clientX,e.clientY);
          $('.pin', this).css({
            opacity: 1,
            left:  e.pageX-$(this).offset().left-100,
            top:   e.pageY-$(this).offset().top-50
          });
        }).mouseleave(function(){
            $('.pin', this).css({
            opacity: 0,
          });
        });
    });

    $('.snapshot').click(function(){
      $(this).toggleClass('active');
    });

    $('.floater').click(function(){
        $('.snapshot').removeClass('active');
    });

    // $('.snapshots').click(function(){
    //   $('.snapshot').removeClass('active');
    // });
    //
    //   $('img', this).mousemove( function(e){
    //       console.log(e.clientX,e.clientY);
    //         pin.css({
    //           opacity: 1,
    //           left:  e.pageX-100,
    //           top:   e.pageY-50
    //        });
    //     });
    // });

});


// $(document).on("click", function(e) {
//   console.log (  );
//   // $('.snapshot').removeClass('active');
//   //
//   if ($(e.target).attr('class')=="pin_info") {
//     // console.log ($(e.target.attr('class'));
//     $('.snapshot').removeClass('active');
//   }else{
//       $('.snapshot').removeClass('active');
//   }
// });




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
