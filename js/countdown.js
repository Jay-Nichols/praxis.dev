"use strict";

// this will hold the number of millisectonds until July 4
var countdownDate = new Date("July 4, 2017 00:00:00").getTime();


//this function counts down every 1000 milliseconds
var x = setInterval(function() {

	//get today's date and time
	var now = new Date().getTime();

	//calculate distance between now and countdownDate
	var distance = countdownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000); 

	document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "Happy Birthday, Jay!"
	}