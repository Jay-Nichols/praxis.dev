"use strict";

$(document).ready(function() {
	$('#clickToHighlight').click(function(event) {
		event.preventDefault();
		$('.highlightedtext').toggleClass('highlight');
	});
});

$(document).ready(function() {
	$('#ozzy').children().css('font-weight', 'bold');
});	

//highlight every other one using each()

$(document).ready(function() {
	$('#gnr').children().each(function(index) {
		if (index % 2 !== 0) {
			$(this).css('background-color', '#FF0');
		}
	});
});