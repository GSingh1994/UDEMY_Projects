// Check if the number is even

function isEven(x) {
 if (x % 2 ===0) {
 	return ("True")
 }else {
 	return ("false")
 }
}

// Function return factorial of any number

function factorial(y) {
	var result = 1;
	 for (var i = y; i <= y; i--){
		result *= i;
		
	}
	return result;
}

// Replace kebab string to case version

function kebabToSnake(str){
	// var str = "x"
	var result = str.replace(/-/g , "_");
 return result;
}