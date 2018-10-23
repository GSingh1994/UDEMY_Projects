var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");

var pickedColor = colors[3];

var colorDisplay = document.querySelector("span");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial color to the square.
	squares[i].style.backgroundColor = colors[i];
	// add click listener to the square.
	squares[i].addEventListener("click", function() {
		alert(this.style.backgroundColor)
	})
}


