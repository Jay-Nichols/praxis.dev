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


// mouse events

//click
$(document).ready(function() {
	$('#hello').click(function() {
		alert("You just clicked on " + $('#hello').html());
	});
});

$(document).ready(function() {
	$('p').dblclick(function() {
		alert("You just double clicked on a paragraph.");
	});
});

//hover
$(document).ready(function() {
	$('.modified').hover(
		function() {
			$(this).css('background-color', '#FF0');
		},
		function() {
			$(this).css('background-color', '#FFF')
		}
	);
});

//keyboard events
$(document).ready(function() {
	$('#textfield').keydown(function() {
		alert("You triggered the keydown event");
	});
});

//using on method to trigger events

$(document).ready(function() {
	$('#textfield').on('keyup', function() {
		alert("Using on method with keyup event");
	});
});
