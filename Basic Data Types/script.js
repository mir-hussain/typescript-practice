//* The most common primitive data type in TypeScript is string, number and boolean.
//* Other data types are: 
//* any, array, object, Function, enum, interface, type alias, null and undefined.
var myName = "Mir Hussain";
console.log("My name " + myName);
//* By doing this, the typescript will infer the data type
//* and it will set the data type of myName to string ( myName: string )
//* so know i wont be able to assign any other data type. For example myName = 12 
var age;
//* If I declare a variable without assigning any data 
//* typescript wont be able to infer the data type,
//* hence it will set the data type to any.
age = 68;
console.log("Age before re-assignment " + age);
console.log("--------------------------------");
age = "banana";
console.log("age after re-assignment " + age);
console.log("--------------------------------");
//* By setting a data type to any, the typescript will accept any data type.
//* This spoils the main purpose of using typescript.
//* We can avoid that by explicitly declaring the data type.
var myAge;
myAge = 68;
//* The general syntax of declaring a data type is => 
//* [variable] : [preferred data type]
//* By doing this, if we try to assign banana to myAge 
//* we will encounter a big, fat red error
//* What if, we want a variable to have multiple types?
//* In this situation we can use union type. Using union is very easy. 
//* we just need to use a single"pipe" to separate our types.
var id;
id = 123;
id = "ABC";
//* We can declare array type by using [] 
var myBrothers = ["Faysal", "Siddique", "Sojib", "Naim"];
console.log("Arrya of strings ", myBrothers);
console.log("--------------------------------");
//* We can also define the type of array by doing something like number[] or string[]
//* In myBrothers array, we can't add anything but string.
//* We can declare object type by using : object
var person;
person = {
    name: "Mir Hussain",
    profession: "Web Developer"
};
//* This is totally fine, but there is a problem with this approach.
//* In JavaScript array and functions are considered as object.
//* so by using : object we can do something like this => 
person = [1, 2, 3];
var greeting = person = function (firstName, lastName) {
    return "Hello " + firstName + " " + lastName;
};
var greet = greeting("Mir", "Hussain");
console.log("This function is using data type object => " + greet);
console.log("--------------------------------");
//* The better way to declare a object is:
var player;
player = {
    name: "Shakib Al Hasan",
    age: 34,
    country: "Bangladesh"
};
var developer = {
    name: "Mir Hussain",
    age: 68,
    field: "Web Development"
};
console.log("This object id created by using interface " + developer);
console.log("--------------------------------");
//
