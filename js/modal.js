var modal = document.getElementById("my-modal");
var button = document.getElementById("open-modal");
var close = document.getElementsByClassName("close")[0];


//open the modal
button.onclick = function() {
	modal.style.display = "block";
}

//close modal by clicking the x
close.onclick = function() {
	modal.style.display = "none";
}

//close modal by clicking anywhere 
window.onclick = function() {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

