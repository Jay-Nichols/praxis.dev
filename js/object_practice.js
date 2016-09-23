"use strict";

//creating new objects
//old-school way:
var firstObject = new Object();
console.log(typeof firstObject);

//newer way:

var someObject = {};
console.log(typeof newObject);

//now add properties to the objects
someObject.verb = "strong";
someObject.noun = "abacus";

console.log("Using dot notation, the newObject's verb property is: " + someObject.verb);
console.log("Using array notation, the newObject's noun property is: " + someObject['noun']);

//adding functions to objects, also called methods

someObject.alert = function() {
	alert("Just click OK. This isn't for anything");
}

someObject.whatsYourName = function(firstName, lastName) {
	console.log(firstName + " " + lastName);
}

someObject.alert();
someObject.whatsYourName("Jay", "Nichols");

//adding "this" to the mix:

someObject.usingThis = function() {
	alert("The object's noun is: " + this.noun);
	alert("The object's verb is: " + this.verb);
} 

someObject.usingThis();
