/* while (condition){
 * 	 //code block
 * }
 */

//The while loop repeats through a block of code, as long as a specified condition is true.
var x = 1;
	while (x <= 5){
		document.write(x + "<br/>");
		x = x + 1;
	}

//pitfalls
//If you forget to increase the variable used in the condition, the loop will never end.

/* The do while loop
 *
 * do
 * {
 *		//code block
 * }
 * while (condition)
 */

var i = 20;
do {
	document.write(i+"<br/>");
	i++
}
while (i <= 25);
