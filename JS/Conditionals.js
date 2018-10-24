
var age=Number(prompt("How old are you"))

if(age<0){
	console.log("Sorry we have encountered an error")
}

if(age === 21){
	console.log("Happy 21st birthday!!")
}

if(age % 2 !== 0){
	console.log("Your age is odd")
}

if(age % Math.sqrt(age) ===0){
	console.log("your age is perfect square")
}