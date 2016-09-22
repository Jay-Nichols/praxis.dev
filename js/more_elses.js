"use strict";

var a = 1;
var b = -3;
var c = 8;

if (a < b) {
	console.log(a + " is less than " + b);
} else if (c < b) {
	console.log(c + " is less than " + b);
} else if (b >= a) {
	console.log(b + " is greater than or equal to " + a);
} else {
	console.log(b + " is less than " + a + " which is less than " + c);
}

var houston = 3000000;
var sanAntonio = 1500000;

if (sanAntonio >= houston) {
	console.log("San Antonio is the bigger city");
} else {
	console.log("Houston is the bigger city");
}

var gnrIsGood = true;
var limpBizkitIsGood = false;

if (limpBizkitIsGood && gnrIsGood) {
	console.log("Limp Bizkit is the superior band.");
} else {
	console.log("Limp Bizkit sucks balls and always will. GNR is the best of all time.");
}

