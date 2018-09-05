$(document).ready(function(){

// CURSOR OVERLAY
  function setBounds(){
    $('#bg').width($('body').width()).height($('body').height());
  } //prevent scrolling via cursor

  window.setTimeout(setBounds, 500);

  $(window).resize(function() {
    setBounds();
  });

  $(document).on('mousemove', function(e){
    console.log('cursormove');
      $('#cursor').css({
         left:  e.pageX - 150,
         top:   e.pageY - 150
      });
  });

// SHOW/HIDE TAGS
  $('.taxonomy li').click(function(){
      $(this).toggleClass('selected');
      var tag = $(this).attr('id');
      $('.post-list li').removeClass('active');
      $('.'+tag).addClass('active');
  });
  $('.subtitle').click(function(){
    $('.post-list li').addClass('active');
  });
// PROCESS IMAGES
  var imgList = $('#content #images').children();
  var captionList = $(".caption li").map(function() {
                     return $(this).text();
                  }).get();
  $('#cap').text(captionList[0]);

  var count = 1;

  $('#images, #next').click(function(){
    showNext();
  });

  $('#prev').click(function(){
    showPrev();
  });

  function showNext(){
    if (count<imgList.length){
      count++;
    }else{
      count = 1;
    }
    showImg(count);
  }

  function showPrev(){
    if(count>1){
      count--;
    }else{
      count = imgList.length;
    }
    showImg(count);
  }

  function showImg(index){
    $('#images img').hide();
    $('#images img:nth-child('+index+')').show();
    $('#cap').text(captionList[index-1]);
  }


// EXTERNAL LINKS
  $('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
  });

// IMAGE EXCEPTIONS
  var pptvideo = "<video src='/images/ppt/ppt.mp4' autoplay controls loop></video>"
  $('.ppt #images').append(pptvideo);


});
