"use strict";

for (var i = 0; i <= 10; i++) {
	console.log("Outer loop count: " + i);
	for (var j = 0; j <= 3; j++) {
		console.log("Inner loop count: " + j);
	}
}

for (var i = 1; i <= 10; i++) {
	var log = '';
	for (var j = 1; j <= i; j++) {
		if (i == 10) {
			log += 0;
		} else {
			log += i;
		}
	}
	console.log(log);
}

var sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
	for (i = 1; i <= 10; i++) {
		sout = sout + "<tr>";

		for (j = 1; j <= 10; j++) {
		sout = sout + "<td>" + i * j + "</td>";
		}
		sout = sout + "</tr>";
	}
sout = sout + "</table>";
document.write(sout);



//playing around with loops

var arrays = [
	[1, 'aegean', true],
	[false, 7.44, 'dorian'],
	['ponce de leon', 908, 88]
];

for (var i = 0; i < arrays.length; i++) {
	var array = arrays[i];
	for (var j = 0; j < array.length; j++) {
		console.log(array[j]);
	}

};