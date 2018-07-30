function myFunc(x,y){
	//some code
}

//Multiple Parameters

function sayHello(name, age){
	document.write(name + "is" + age + "years old.");
}

//When calling the function, provide the arguments in the same order in which you defined them.
function sayHello(name, age){
	document.write(name + "is" + age + "years old");
}

sayHello("John",20)
//Outputs "John is 20 years old."

//After defining the function, you can call it as many times as needed.
//JavaScript functions do not check the number of arguments received.

//Function Return
//A function can have an optional return statement. It is used to return a value from the function.
//This statement is useful when making calculations that require a result.

//When Javascipt reaches a return statement, the function stops executing.

