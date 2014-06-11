// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

define(["jquery"], function($) {
	// $('body').append('jQuery ' + $.fn.jquery + ' loaded!');
	$(document).ready(function(){
		var getLangLat = function(addr){
			$.ajax({
				url:"http://maps.google.com/maps/api/geocode/json?address="+addr+"&sensor=false", 
				success:function(d){
					console.log(d.results[0].formatted_address, d.results[0].geometry.location);
					$("#content").html("")
						.append("<p>formatted_address: "+ d.results[0].formatted_address +"</p>")
						.append("<p>Latitude: "+ d.results[0].geometry.location.lat +"</p>")
						.append("<p>Longitude: "+ d.results[0].geometry.location.lng +"</p>");

				}
			});
		};

		$("#getGeo").click(function(){
			var addr = $("#addrBox").val();
			getLangLat(addr);
		});	
	});
});

