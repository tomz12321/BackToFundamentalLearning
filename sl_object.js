var person = {
	name: "John", age: 31,
	favColr: "green", height: 183
};

//You can access object properties in two ways.

objectName.propertiyName
//or
objectName['propertiyName']

//This example demonstrates how to access the age of our person object
var person = {
	name: "John",age: 31,
	favColor: "green",
	height: 183 
};

var x = person.age;
var y = person['age'];

//JavaScript's built-in length property is used to count the number of characters in a property or string/
var course = {name: "JS", lessons: 41};
document.write(course.name.length);
//Outputs 2

//Object Methods
//An object method is a property that contains a function definition

//Use the following syntax to access an object method.
objectName.methodName()

//As you already know, document.write() outputs data. The write() function is actually a method of the document object.
document.write("This is some text");

