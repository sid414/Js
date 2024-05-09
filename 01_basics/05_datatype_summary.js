// Datatypes are clasified into primitve and non primitve.The diff in b/w them is done in such a way that how the data is stored in memory or how the data can be accessed on the basis of these 2 data is classified.

// *** Primitive ***

// They are call by value that is original data ka refernce nhi diya jata , copy krke diya jata hai n changes occur in copy.

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// symbol mein value bhi same pass krenge to result unique hi ayga n yeh return bhi unique new symbol value

// Symbols are guaranteed to be unique, even if they have the same description. This uniqueness makes them useful for defining properties in objects that are meant to be private or internal, preventing accidental name clashes with other properties.

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// *****Non -primitive (refernce type)***

// Array, Objects, Functions

const heros =["ironman","spiderman","hulk"]; //arrays
let myobj={
    name:"sid",
    age:"20",
}  //curly braces mein are object with key value pair

const myFunction =function(){
    console.log("Hello World");
}
// non primitive type have return type function
console.log(typeof myFunction); //function but it is object funtion
console.log(typeof BigInt); //function
console.log(typeof bigNumber);  //bigint

console.log(typeof scoreValue); //number
console.log(typeof outsideTemp); //object



// JavaScript is a dynamically typed language. This means that variable types are determined at runtime rather than at compile time. In JavaScript, we don't need to explicitly declare the data type of a variable; its type is inferred based on the value assigned to it. 