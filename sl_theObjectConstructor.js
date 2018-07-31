var person = {
	name:"John",
	age:42,
	favColor:"green"

};

//This allows you to create only a single object.
//Sometimes, we need to set an "object type" that can be used to create a number of objects of a singletype.
//The standard way to create an "object type" is to use an object constructor function.


function person(name, age, color){
	this,name = name;
	this.age = age;
	this.favColor = color;
}

//creating Objects

var p1 = new person("John",42,"green");
var p2 = new person("Amy",21,"red");

document.write(p1.age); //Outputs 42
document.write(p2.name); //Outputs "Amy"

//Initialization
var John = {name: "John", age: 25};
var James = {name: "James", age: 21};

//Using Object Initializers

var John = {
	name: "John",
	age: 25
};
var James = {
	name: "James",
	age: 21
};