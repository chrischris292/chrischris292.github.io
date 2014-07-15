$(function() {
	var client_id = ['852883697dbc2729c2934881a48be4fc', '49dcd7c8d4369c8f509b828c844c2814'];
	 SC.initialize({
        client_id: client_id[0]
    });
	SC.get('/tracks', { tags: "seattle", limit: 5 }, function(tracks) {
		console.log(tracks)
  	});

});