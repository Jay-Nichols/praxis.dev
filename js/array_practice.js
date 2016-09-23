"use strict";

var stuff = ['chair', 'hydrogen', 'cactus', 'hospital', 'Audi'];

var emptyArray = [];

//old-school Array style:

var things = new Array('beam', 'lights', 'telephone');
var oldSchoolEmptyArray = new Array();

console.log("The stuff array has " + stuff.length + " items");
console.log("The emptyArray array has " + emptyArray.length + " items");
console.log("The things array has " + things.length + " items");
console.log("The oldSchoolEmptyArray array has " + oldSchoolEmptyArray.length + " items");

console.log("The first thing in the stuff array is " + stuff[0]);
console.log("The second thing in the stuff array is " + stuff[1]);
console.log("The third thing in the stuff array is " + stuff[2]);
console.log("The fourth thing in the stuff array is " + stuff[3]);
console.log("The fifth thing in the stuff array is " + stuff[4]);

for (var i = 0; i < stuff.length; i++) {
	console.log("The item at index " + i + " is " + stuff[i]);
}

for (var i = 0; i < things.length; i++) {
	console.log("The item at index " + i + " is " + things[i]);
}

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function (element, index, array) {

    // element is the shape name
    // index is the iterator
    // array is the shapes array itself

    console.log('The shape at index ' + index + ' is: ' + element);
});

things.forEach(function (element, index, array) {
	console.log(element + " is at " + "index " + index + " in the " + array + " array");
});

stuff.forEach(function (name, indexNumber, fullArray) {
	console.log(name + " has an index value of " + indexNumber + " in the stuff array. All of the array items are: " + fullArray);
});