"use strict";

//skipping even numbers
for (var i = 0; i < 10; i++) {
	if (i % 2 == 0) {
		continue;
	}
	console.log(i + " is an odd number");
}

//numbers divisible by 3
for (var j = 0; j <= 30; j++) {
	if (j % 3 !== 0) {
		continue;
	}
	console.log(j + " is evenly divisible by 3");
}

//breaking
for (var k = 0; k <= 100; k++) {
	if (k == 30) {
		break;
	} else {
		console.log(k);
	}
}

var random = Math.floor((Math.random()*50)+1);

for (var l = 0; l <= 50; l++) {
	if (l % 2 == 0) {
		console.log(l + " is an even number")
	} else {
		console.log(l + " is an odd number")
	}
	if (l == random) {
		console.log("skipping " + random);
		continue;
	}
}

