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
	};
			console.log(log);
};