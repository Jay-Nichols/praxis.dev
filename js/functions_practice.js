"use strict";

function sayMyName(firstName, lastName) {
	console.log(firstName + " " + lastName);
}

sayMyName("Jay", "Nichols");


//multiples of 5

function multiplesOfFive(number) {
	if (number % 5 == 0) {
		console.log(number + " is a multiple of five");
	} else {
		console.log(number + " is not a multiple of five");
	}
}

multiplesOfFive(12);


alert("I'm going to ask you some questions.");

var response = prompt("Where are you from?");

alert(response + " sounds cool.");

var opinion = confirm("Do you like " + response);

if (opinion) {
	alert("I'm glad you enjoy " + response);
} else {
	alert("That's too bad. I've heard good things about " + response + ", though.");
}

