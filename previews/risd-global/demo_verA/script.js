$(document).ready(function(){

	$('.p1,.p2, .thumbnail').hover(function(){
		$("img", this).toggleClass('mono');
	});

	$('.p3').click(function(){
		$(".card", this).toggleClass('flipped');
	});


});