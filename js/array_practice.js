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


//manipulating arrays
console.log(oldSchoolEmptyArray);
oldSchoolEmptyArray.push('handlebar moustaches', 'banana seat bikes');
console.log(oldSchoolEmptyArray);
oldSchoolEmptyArray.unshift('acid rock');
console.log(oldSchoolEmptyArray);
var removedLastItem = oldSchoolEmptyArray.pop();
console.log(removedLastItem);
console.log(oldSchoolEmptyArray);
oldSchoolEmptyArray.push('banana seat bikes');
console.log(oldSchoolEmptyArray);
var removedFirstItem = oldSchoolEmptyArray.shift();
console.log(removedFirstItem);
console.log(oldSchoolEmptyArray);
oldSchoolEmptyArray.unshift('acid rock');
console.log(oldSchoolEmptyArray);
var index = oldSchoolEmptyArray.indexOf('acid rock');
console.log(index);
index = oldSchoolEmptyArray.indexOf('banana seat bikes');
console.log(index);
console.log(stuff);
var removed = stuff.splice(1, 2);
console.log(removed);
console.log(stuff);
stuff.splice(1, 0, 'hydrogen', 'cactus');
console.log(stuff);
stuff.splice(stuff.indexOf('hydrogen'), 2, 'pick', 'caterpillar', 'tank');
console.log(stuff);
stuff.reverse();
console.log(stuff);
stuff.sort();

//split/join
var nouns = "shirt, telegraph pole, detritus";
console.log(nouns);
var nounArray = nouns.split(", ");
console.log(nounArray);

var nounString = nounArray.join(", ");
console.log(nounString);





