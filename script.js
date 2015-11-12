$(document).ready(function() {

$.get('https://www.reddit.com/r/ImaginaryTechnology/.json', function(response) {
	
	var posts = response.data.children;
	
	$.each(posts, function(index, post) {
		
		var $postLink = $('<a />').attr({ class: 'postLink', href: post.data.url, target: '_blank' }).appendTo($('body'));
		
		var $div = $('<div />').attr('class', 'postWrapper').appendTo($postLink);
		
		var $title = $('<h1 />').append(post.data.title);
		
		var $thumb = $('<img />').attr({ class: 'thumbs', src: post.data.thumbnail, alt: 'No Image Preview Available' });
		
		var $author = $('<h3 />').append("Posted by: ");
		var $authorSpan = $('<span />').attr('class', 'authorSpan').append(post.data.author).appendTo($author);
		
		var $divImg = $('<img />').attr({ class: 'dividerImg', src: 'images/divider.gif' });
		
		$div.append($title, $thumb, $author, $divImg);
		
	});
	
	
	
	console.log(posts[0]);
});

});