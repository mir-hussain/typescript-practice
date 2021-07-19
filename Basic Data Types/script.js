//* The most common primitive data type in TypeScript is string, number and boolean.
//* Other data types are: 
//* any, array, object, Function, enum, interface, type alias, null and undefined.
var myName = "Mir";
//* By doing this, the typescript will infer the data type
//* and it will set the data type of myName to string ( myName: string )
//* so know i wont be able to assign any other data type. For example myName = 12 
var age;
//* If I declare a variable without assigning any data 
//* typescript wont be able to infer the data type,
//* hence it will set the data type to any.
age = 68;
age = "banana";
//* By setting a data type to any, the typescript will accept any data type.
//* This spoils the main purpose of using typescript.
//* We can avoid that by explicitly declaring the data type.
var myAge;
//* The general syntax of declaring a data type is => 
//* [variable] : [preferred data type]
//* By doing this, if we try to assign banana to myAge 
//* we will encounter a big, fat red error
//* We can declare array type by using [] 
var myBrothers = ["Faysal", "Siddique", "Sojib", "Naim"];
//* We can also define the type of array by doing something number[] or string[]
//* In myBrothers array, we can't add anything but string.
