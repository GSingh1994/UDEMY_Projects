// Select Every button.
let reset = document.getElementsByClassName("reset")[0];
let p1 = document.getElementsByClassName("pOne")[0];
let p2 = document.querySelector(".pTwo");
let p1score = document.querySelector(".p1score");
let p2score = document.querySelector(".p2score");
let field = document.querySelector(".field");
let game = document.querySelector(".game");

// add onclick function.
let score1 = 0;

p1.addEventListener("click",function() {
	score1++;
	p1score.textContent = score1;
	if (score1 >= field.value) {
	// break;
	p1score.style.color = "green";
	p1score = score1
	// alert("p1 wins");
	}	
});   

let score2 = 0;

p2.addEventListener("click",function() {
	score2++;
	p2score.textContent = score2;
	if (score2 >= field.value) {
	p2score.style.color = "green";
	p2score = score2
	// alert("p2 wins");
	}	
});  

// set game score.
field.addEventListener("click",function() {
	game.textContent = field.value;
}); 

// reset game.
reset.addEventListener("click",function() {
	// p1.reset()
	window.location.reload();
})

// if (p1score.style.color = "green") {
// 	alert("Player 1 Wins")
// 		p1score = score1
// }
// if (p2score.style.color = "green") {
// 	alert("Player 2 Wins")
// 	p2score = score2
// }