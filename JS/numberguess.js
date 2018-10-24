var Snum = 7;
var guess = Number(prompt("Guess a number!"));

if (guess > Snum){
	alert("Too high guess again")

}
else if (guess < Snum){
	alert("Too low guess again")
}

else{
	alert("Thats right!!!")
}