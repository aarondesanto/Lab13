$(document).ready(function() {

$.get('https://www.reddit.com/r/AmazingTechnology/.json', function(response) {
	
	var posts = response.data.children;
	
	$.each(posts, function(index, each) {
		var $div = $("<div class='someClass' />").appendTo($('body'));
		$div.append("<h1>" + each.data.title + "</h1>");
		$div.append("<a href='" + each.data.url + "'><img src='" + each.data.thumbnail + "'></a>");
		$div.append("<h3> Posted by: <span class='author'>" + each.data.author + "</span></h3>");
	});
	
	$('img').attr('alt', "Click here to read this article.")
	
});

});