$(document).ready(function() {

$.get('https://www.reddit.com/r/ImaginaryTechnology/.json', function(response) {
	
	var posts = response.data.children;
	
	$.each(posts, function(index, post) {
	
		var $div = $('<div />').attr('class', 'postWrapper').appendTo($('body'));
		
		var $title = $('<h1 />').append(post.data.title);
		
		var $thumbLink = $('<a />').attr('href', post.data.url);
		var $thumb = $('<img />').attr({ class: 'thumbs', src: post.data.thumbnail, alt: 'Click to view post' }).appendTo($thumbLink);
		
		var $author = $('<h3 />').append("Posted by: ");
		var $authorSpan = $('<span />').attr('class', 'authorSpan').append(post.data.author).appendTo($author);
		
		var $divImg = $('<img />').attr({ class: 'dividerImg', src: 'images/divider.gif' });
		
		$div.append($title, $thumbLink, $author, $divImg);
		
	});
	
	$('div.postWrapper').hover(
		function () {
			$(this).addClass('hovered');
		}, function () {
			$(this).removeClass('hovered');
		}
	);
	
	
	
	
	console.log(posts[0]);
});

});