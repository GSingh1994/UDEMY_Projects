let button = document.querySelector("button");
let body = document.querySelector("body");

button.addEventListener("click",function(){
	body.classList.toggle("red");
})