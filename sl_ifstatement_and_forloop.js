if (condition) {
	//statements
}

//example

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2){
	alert("JavaScript is easy to learn.");
}

if(expression){
	//executed if condition is true
}
else{
	//excuted if condition is false
}

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2){
	alert("This is my first condition");
}
else {
	alert("This is my second condition");
}

//else if

var course = 1;
if (course == 1){
	document.write("<h1> HTML Tutorial </h1>");
} else if (course == 2){
	document.write("<h1> CSS Tutorial </h1>");
} else {
	document.write("<h1> JavaScript Tutorial </h1>");
}

//switch

switch (expression){
	case n1:
		statements
		break;
	case n2:
		statements
		break;
	default:
		statements
}

//example

var day = 2;
switch (day) {
	case 1:
		document.write("Monday");
		break;
	case 2:
		document.write("Tuesday");
	case 3:
		document.write("Wednesday");
	case 4:
		document.write("Another day");
}

// The default keyword
var color = "yellow";
switch(color){
	case "blue":
		document.write("This is blue.");
		break;
	case "red":
		document.write("This is red.");
		break;
	case "green":
		document.write("This is green.");
		break;
	case "orange":
		document.write("This is orange.");
		break;
	default:
		document.write("Color not found.");
}

//Loops

/* 	for (statement1; statement2; statement3){
 *		//code block to be executed
 * 	}
 */

 // For loops

 for ( i = 1; i <= 5; i++){
 	document.write(i + "<br/>");
 }

 // Statement 1 is optional, and can be omitted, if your values are set before the loop starts
 var i = 1;
 for (; i<= 5 ; i++){
 	document.write(i + "<br/>");
 }

 // Also, you can initiate more than one value in statement 1, using commas to separate them

 for (i = 1; text = ""; i <= 5; i++){
 	text = i;
 	document.write(i + "<br/>");
 }

 // Statement2: If statement2 returns true, the loop will start over again, if it returns false, the loop will end. Statement 2 is also optional.
 // If you omit statement2, you must provide a break inside the loop. Otherwise, the loop will never end.

 //Statement 3 is used to change the initial variable. It can do anything, including negative increment (i--), positive increment (i = i + 15), or anything else.
 //Statement 3 is also optional, and it can be omitted if you increment your values inside the loop.
var i = 0;
for ( ;i < 10; ){
	document.write(i);
	i++;
}
