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

//show and highlightedtext / fading / fade toggle

$(document).ready(function() {
	$('#ozzySongs').click(function() {
		$('#ozzy').fadeToggle();
	});
	$('#gnrSongs').click(function() {
		$('#gnr').fadeToggle();
	});
});

//sliding 
$(document).ready(function() {
	$('#gnrSongs').click(function() {
		$('#gnr').slideToggle();
	});
});

$(document).ready(function() {
	$('#rhcpSongs').click(function() {
		$('#rhcp').slideToggle();
	});
})

//animation

$(document).ready(function() {
	$('#btn-move').click(function() {
		$('#box1, #box2').animate({
			left: "100px"
		}, 2000);
	});
	$('#btn-scale').click(function() {
		$('#box1, #box2').animate({
			width: "+5%"
		}, 500);
	});
	$('#btn-hide').click(function() {
		$('#box1, #box2').animate({
			opacity: 0
		}, 3000);
	});
	$('#btn-show').click(function() {
		$('#box1, #box2').animate({
			opacity: 1
		}, 5000);
	});
});


