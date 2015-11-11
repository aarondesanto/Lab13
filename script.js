$(document).ready(function() {


$.get('https://www.reddit.com/r/AmazingTechnology/.json', function(response) {
	
	var post = response.data.children;
	
	function someFunc(num, prop) {
		console.log(post[num].data[prop]);
	}
	console.log(response.data.children[0].data);
	someFunc(0, "thumbnail");
	someFunc(0, "author");
	someFunc(0, "url");
	someFunc(0, "title");
});

});