const user ={
    username:"sid",
    price:99,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);// this keyword hum tb lga rhe hote hai jb hum current context ko refer kr rhe hote hai, this tells about current context/value
    }
}
// user.welcomeMessage // run hojyga but doesnt give output

// user.welcomeMessage()  // ab run hoga n output ->sid, welcome to website

// user.username="sam" // here we change the context

// user.welcomeMessage() // yahan value isliye change hui coz value humne yahan hardcode nhi kri humne kha tha upar ki jo bhi current context hai , us current context mein username ki value ko print kro 

// console.log(this); //{}
//jb hum node environment ke ander hai toh this refer to empty object as global ke ander context nhi hai

// browser ke ander sbse zyada gloabl object jo hai voh hai window object tbhi jb hum console.log(this) krenge in console of browser toh woh window object dega

// arrow function ke ander this nhi hota hai 


function fn(){
    let username="sid"
    console.log(this); //global object in node
    // console.log(this.username); // undefined 
}
// fn() // ab empty function mein jb this print kiya toh usmein hum kaafi global attributes/values milti hai

// functions mein aakr we cant use this yeh object ke ander function mein aakr we cna use this

// const chai =function(){
//     let username="sid"
//     console.log(this.username);
// }
// chai() -->undefined


const chai = () =>{
    let username="sid"
    console.log(this); //{}
    console.log(this.username); //undefined
}
// chai()

// 1st method
// const addTwo =(num1,num2)=>{
//     return num1+num2;
// }

// 2nd method
// const addTwo =(num1,num2)=>  num1+num2; 

// 3rd way
// const addTwo =(num1,num2)=> ( num1+num2); 

// if we need to return an object thats how we do it
const addTwo =(num1,num2)=>(  {username:"sid"});

console.log(addTwo(3,4)) //7

//implicit return -> we have to remove parenthesis // mean ki maan liye aapko return keyword likhne ki zrurat nhi hai coz ek hi line ka statement hai  // curly braces meion wrap kiya toh return statement likhna padega


// *** some terms about arrow funtion
// Lexical scoping means that the scope of a variable (or in this case, the this keyword) is determined by its location in the source code.In the case of arrow functions, the value of this is determined by where the arrow function is defined, not where it's called.


// Ques :-if we use this keyword in function which is not in object will it work?

// Yes, if you use the this keyword in a regular function that is not a method of an object, its behavior will depend on whether you're in strict mode or non-strict mode:

// Non-Strict Mode:
// In non-strict mode, if a regular function is called without any context (i.e., it's not a method of an object), this will refer to the global object (window in browsers, global in Node.js).
// For example:

// function myFunction() {
//   console.log(this); // 'window' (in a browser)
// }

// myFunction();

// Strict Mode:
// In strict mode, if a regular function is called without any context, this will be undefined.

// For example:

// function myFunction() {
// 'use strict';
//   console.log(this); // 'undefined'
// }

// myFunction();