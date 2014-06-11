// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["jquery"], function($) {
	// $('body').append('jQuery ' + $.fn.jquery + ' loaded!');
	$(document).ready(function(){
		$("#getGeo").click(function(){
			var addr = $("#addrBox").val();
			getLangLat(addr);
		});	
		var getLangLat = function(addr){
			$.ajax({
				url:"https://maps.google.com/maps/api/geocode/json?address="
				+addr+"&sensor=false", 
				success: handleMapResponse
			});
		};
		var handleMapResponse = function(d){
			console.log("handleMapResponse", d);
			var lat = d.results[0].geometry.location.lat,
				lng = d.results[0].geometry.location.lng,
				formatted_address = d.results[0].formatted_address;
				$("#content").html("")
					.append("<p><em>Formatted Adress</em>: "+ formatted_address 
						+", <em>Latitude</em>: "+ lat +", <em>Longitude</em>: "+ lng +"</p>");
			initialize(lat,lng, formatted_address);
		};
		var initialize = function( lat, lng, formatted_address) {
			console.log("initialize Map", lat,lng);
			var myLatlng = new google.maps.LatLng(lat, lng);
			var myOptions = {
			zoom: 10,
			center: myLatlng
			};
			var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
			var marker = new google.maps.Marker({
		      	position: myLatlng,
		      	map: map,
		      	title: formatted_address
		  	});
	    };
	});
});
