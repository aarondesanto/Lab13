$(document).ready(function() {

	$('<h1 />').append("Super Cool 90s Reddit.Com Website!").prependTo($('body'));

	$('<div />').attr('id', 'scrollToTop').prepend('<h4>^ Top</h4>').appendTo($('body'));
	
	$.get('https://www.reddit.com/r/ImaginaryTechnology/.json', function(response) {
		
		var posts = response.data.children;
		
		$.each(posts, function(index, post) {
			
			var $postLink = $('<a />').attr({ class: 'postLink', href: post.data.url, target: '_blank' }).appendTo($('body'));
			
			var $div = $('<div />').attr('class', 'postWrapper').appendTo($postLink);
			
			var $title = $('<h2 />').append(post.data.title).appendTo($div);
			
			var $thumb = $('<img />').attr({ class: 'thumbs', src: post.data.thumbnail, alt: 'No Image Preview Available' }).appendTo($div);
			
			var $author = $('<h3 />').append("Posted by: ").appendTo($div);
			var $authorSpan = $('<span />').attr('class', 'authorSpan').append(post.data.author).appendTo($author);
			
			var $comments = $('<a />').attr({ class: 'commentLink', href: 'http://www.reddit.com/' + post.data.permalink }).append(" View Comments ").appendTo($div);
			
			var $divImg = $('<img />').attr({ class: 'dividerImg', src: 'images/divider.gif' }).appendTo($div);
			
		});
			
	});
	
	$('#scrollToTop').click(function() {
		$('body').animate({ scrollTop: '0' });
	});

});