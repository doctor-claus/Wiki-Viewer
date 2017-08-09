$(document).ready(function(){
	$("#search").keyup(function(event){
		if(event.keyCode == 13){
			$(".logo").animate({marginTop: '50px'});
			$("#wrap").animate({marginTop: '300px'});
			$(".output").remove();
			$(".container").append("<div class= 'output'></div>")
			var term = $("#search").val();
			var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + term + "&limit=10";
			$.getJSON(url, function(data){
				console.log(data);
				$(".output").html();
				for(var i = (data[1].length - 1); i >= 0; i--){
					$(".output").prepend("<div id= 'result'><div class= 'well'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2></a><p>" + data[2][i] + "</p></div></div>");
				}
				$(".well").animate({opacity: '0'}, function(){
					$(this).animate({opacity: '1'});
				});
			});
		}
	});
});