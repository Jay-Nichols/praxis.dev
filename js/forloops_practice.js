"use strict";



for (var i = 0; i < 10; i++ ) {
	console.log(i);
}

for (var j = 10; j > 0; j = j - 2) {
	console.log(j);
}

for (var k = 100; k > 0; k = k - 5) {
	console.log(k);
}



//Selecting even numbers using modulus

// for (var l = 0; l < 20; l++) {
// 	if (l % 2 = 0) {
// 		console.log(l + " is an even number");
// 	} else {
// 		console.log(l + " is an odd number");
// 	}
// }

var random = Math.ceil(Math.random()*10);
var solution;

for (var i = 1; i <= 10; i++) {

    solution  = random * i;
    console.log(random + 'x' + i + '=' + solution);
};


