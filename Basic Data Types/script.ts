//* The most common primitive data type in TypeScript is String, Number and Boolean.
//* Other data types are Any, Array, Object, Function, Enum, Interface, null and undefined.

let myName = "Mir";

//* By doing this, the typescript will infer the data type
//* and it will set the data type of myName to string ( myName: string )
//* so know i wont be able to assign any other data type. For example myName = 12 

let age;

//* If I declare a variable without assigning any data 
//* typescript wont be able to infer the data type,
//* hence it will set the data type to any.

age = 68

age = "banana";

//* By setting a data type to any, the typescript will accept any data type.
//* This spoils the main purpose of using typescript.