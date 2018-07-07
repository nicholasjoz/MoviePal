var yelp = "https://api.yelp.com/v3/businesses/search/(movietheaters)"+theaterSelect;
var omdbData = "http://www.omdbapi.com/?t="+movieTitle+"apikey=3efbbefc";
var omdbPoster = "http://img.omdbapi.com/?t="+moveTitle+"&apikey=3efbbefc&t=";
var metacritic ="https://api-marcalencc-metacritic-v1.p.mashape.com/search/"+movietitle+"/movie";
//var fandango = "http://api.fandango.com/v1/?op=theatersbypostalcodesearch&postalcode="+postCode+"&apikey=g9syenqx5p58hcztdkthzf3z&sig=9b58ee950f5f0b07283c53a74be80f6ab721f18b2377c606dcf6895937382ed8";
var movieTitle=$("searchBox").val().trim();
$(document).ready(function(){
	$("#searchButton").on("click", function(){
$.ajax({
	url: omdbData,
	method: "GET"
  }).then(function(omdbDataResponse) {
	console.log(omdbDataResponse);

  });

  $.ajax({
	url: omdbPoster,
	method: "GET"
  }).then(function(omdbPosterResponse) {
	console.log(omdbPosterResponse);
  });

  /*$.ajax({
	url: fandango,
	method: "GET"
  }).then(function(fandangoResponse) {
	console.log(fandangoResponse);
  });*/

  $.ajax({
	url: yelp,
	method: "GET"
  }).then(function(yelpResponse) {
	console.log(yelpResponse);
	});
})
})