$(function() {
	var client_id = ['852883697dbc2729c2934881a48be4fc', '49dcd7c8d4369c8f509b828c844c2814'];
	 SC.initialize({
        client_id: client_id[0]
    });
	SC.get('/tracks', { tags: "seattle", limit: 5 }, function(tracks) {
		console.log(tracks)
  	});
	  	
	var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=669ed02065341f9f903674d47bb1ac36&tags=yokota+air+base&safe_search=1&per_page=20";
	var src;
	$.getJSON(url + "&format=json&jsoncallback=?", function(data){
	    $.each(data.photos.photo, function(i,item){
	        src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	        $("<img/>").attr("src", src).appendTo("#images");
	        if ( i == 3 ) return false;
	    });
	});
});