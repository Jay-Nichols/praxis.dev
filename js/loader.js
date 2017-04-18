"use strict";

var myVar;

function loaderFunction() {
	myVar = setTimeout(showPage, 3000);
}

function showPage() {
	document.getElementById("loader").style.display="none";
	document.getElementById("textDiv").style.display="block";
}