var url = "programsdata.json";


$.getJSON(url, function(data){
    var all = data.programs;

    var stats = [];

    for (i = 0; i < all.length; i++) { 
        stats.push('<div class="program">');
         $.each(all[i], function(key, value) {
             //display the key and value pair
             stats.push('<div class="property" data-key="'+ key +'">' + value + "</div>");
         });
         stats.push('</div>');
     }

    $('#data').append(stats.join(""));

});
