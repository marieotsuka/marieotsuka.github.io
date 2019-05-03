$(document).ready(function(){

	$('.p1,.p2, .thumbnail').hover(function(){
		$("img", this).toggleClass('mono');
	});

	$('.p3').click(function(){
		$(".card", this).toggleClass('flipped');
	});

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


});

