var ary = [];

var input = prompt ("what would you like to do?");

while (input !== "quit") {
	if (input === "list") {
		// alert("Your list is " + ary);
		openList();
	}else if (input === "new") {
		newTodo();
    }else if (input === "delete"){
		delTodo();
    }
	input = prompt("what would you like to do ?");
}
    // console.log(ary);
	console.log("OK your list has been saved");

	function openList() { 
		console.log('******');
		var line = console.log(ary.forEach (function (newLine,i) {console.log(i + ':'+newLine)}));
		console.log('******');
	}
	function newTodo() { 
		var newTodo = prompt("Enter new ToDo");
		ary.push(newTodo);
		console.log("Added new ToDo")
	}
	function delTodo() {
	    var del = prompt('Which index?');
		del = ary.splice(del,1);
		console.log('item deleted!')	
	}