// function that reverse a given array.
function printReverse(ary){
	for (var i = ary.length-1; i >=0 ; i--) {
		console.log(ary[i])
	}
}

// function that check if the array is uniform.
var array = [1,2,3,4,5,6,7];
var array2 = [5,1,1,1,1,1,1];

function isUniform(ary){
	var start = ary[0]
	for (var i = 1; i < ary.length; i++) {
		if (start === ary[i]) {
			return true;
		}else{
			return false;
		}

	}
}

//function that retuns the sum of array
function sumArray(ary){
	var total = 0;
	ary.forEach(element =>{
		total = element + total; 
	}
)
return total;
};              
//                      OR

// var sum = 0;
// 	for (var i = 0; i < ary.length; i++) {
// 		ary[i]
// 		sum = sum + ary[i]
// 	}
// 	return sum;
// ************************************************

//function that retuns maximum number in an array.

function max(ary){
	var max = 0;
	for (var i = 1; i < ary.length; i++) {
	if (ary[i] > max) {
		max = ary[i]
	}	
	}
	return max;
}



// ***************************
// var abc = ['a','b','c','d'];
// //function that print any array in reverse order.
// function printReverse(ary){
// 	for(i = ary.length; i >= 0; i--){
// 		console.log(ary[i]);
// 	}
// }
// printReverse(['a','b','c','d'])


// var uni = [1,4,1,1,1,1];
// //function checks if the array is uniform or not.
// function isUniform(ary1){
// 	var check = ary1[0]
// 	console.log(ary1.every(element => {
// 		return element===check
// 	}))
// }

// //function checks the maximum number in an array.
// function max(ary){
// console.log (Math.max(ary))
// }
// max([0,2,3,4,5,6,7,8])


// //function adds an array
// function sumArray(nums){
// 	var sum = 0;
// 	nums.forEach(function(element) {
// 		sum= sum+element;
// })
// }




