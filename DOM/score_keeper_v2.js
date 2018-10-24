// select all buttons.
let p1score = document.querySelector(".p1score");
let p2score = document.querySelector(".p2score");
let game = document.querySelector(".game");
let field = document.querySelector(".field");
let pOne = document.querySelector(".pOne");
let pTwo = document.querySelector(".pTwo");
let reset = document.querySelector(".reset");

let gameover = false;

// Player 1
let score1 = 0;
pOne.addEventListener("click", function(){
	if (!gameover) {
		score1++;
		p1score.textContent = score1;

		if (score1 >= field.value) {
			p1score.classList.add("green");
			gameover = true;
		}
	}
})

// Player 2
let score2 = 0;
pTwo.addEventListener("click", function(){
	if (!gameover) {
		score2++;
		p2score.textContent = score2;

		if (score2 >= field.value) {
			p2score.classList.add("green");
			gameover = true;
		}
	}
})

// game point
field.addEventListener("change",function(){
	game.textContent = field.value;
})

// reset game
reset.addEventListener("click",function(){
	// window.location.reload();
	p1score.textContent = 0;
	p2score.textContent = 0;
	p1score.classList.remove("green");
	p2score.classList.remove("green");
	game.textContent = 0;
	field.value = 0;
})