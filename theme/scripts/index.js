// IMAGE INDEX
$(function(){

	var indexList = [
		['#metaform-cards-img','<div class="black">WORD</div><div class="white"><img src="/images/list/blob.svg"></div>'],
	 	['#hidden-characters-img','<p class="inline">Books</p><div id="para">&para;</div>']
	 ];


	console.log('ind');
	for(var i=0; i<indexList.length; i++){
		$(indexList[i][0]).html(indexList[i][1]);
	}
	
});