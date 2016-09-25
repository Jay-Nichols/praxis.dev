"use strict";

//id selector
$(document).ready(function() {
	var contents = $('#hello').html();
	console.log(contents);
	var paragraph = $('#lorem');
	console.log(paragraph.html());
	var anchor = $('#anchor').html();
	console.log(anchor);
});

//class selector with css 

$(document).ready(function() {
	$('.centerText').css('background-color', '#FF0');
	$('.modified').css('text-decoration', 'underline');
});

//element selector

$(document).ready(function() {
	$('p').css('color', '#00F');
	$('a').css('color', '#F00');
});

//multiple selectors

$(document).ready(function() {
	$('*').css('font-family', 'helvetica');
	$('.centerText, a').css('border', '1px solid black');
});