var search_input, title, content, link;
var results = [];
$(document).ready(function(){
	search_input = $("#search-input").val();			
});

$('#btSearch').on("click", function(){
	console.log("procurar");
	search_input = $("#search-input").val();
	if(!search_input){
		console.log("vazio");
	}else{
		results = [];
		searchWiki(search_input);
	}
});
$('#clear').on("click", function(){
	console.log("clear");
	$("#search-input").val("");
	clearSearch();
});

function searchWiki(search_input){
	clearSearch();
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ search_input +"&format=json&callback=?";
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'json',
		success: function(response){
			if(response[1].length == 0){
				var res = confirm("Nenhum resultado encontrado para esse termo. Faça uma nova busc.!");
				if (res == true) {
					$("#search-input").val("");
					clearSearch();
				}
			}else{
				$('#show-results').css('overflow', 'scroll');
				$('#results').css('background-color', '#d0e9ed');

				title = response[1];
				content = response[2];
				link = response[3];
				var size = title.length;
				var li = [];
				for(var i = 0; i < size; i++){
					if(content[i] === ""){
						content[i] = "Conteúdo indisponível";
					}
					results.push({'title': title[i], 'content':content[i], 'link': link[i]});
				}

				for(var i = 0; i < results.length; i++){
					$('#results').append("<a href="+results[i].link+" target='_blank'><li><h3>"+results[i].title+"</h3><p>"+results[i].content+"</p></li><a>");
				}
			}

		}

	});
}

function clearSearch(){
	results = [];
	$('#results').empty();
	$('#show-results').css('overflow', '');
	$('#results').css('background-color', '');
}