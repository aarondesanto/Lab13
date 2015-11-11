$(document).ready(function() {

$.get('https://www.reddit.com/r/AmazingTechnology/.json', function(response) {
	console.log(response.data.children[0].data);
});

});