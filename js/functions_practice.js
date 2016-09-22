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