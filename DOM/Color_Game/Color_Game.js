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
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial color to the square.
	squares[i].style.backgroundColor = colors[i];
	// add click listener to the square.
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor
		// compare color to clicked color
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct"
			changeColors(clickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	})
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}