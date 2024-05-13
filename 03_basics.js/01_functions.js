
// write function then give it a name then parenthesis ()and then function ka scope {}

function MyName(){
console.log("S");
console.log("I");
console.log("D");
console.log("D");
}

// MyName   -->if we write this then it will tell only the refernce but not execute
// MyName()  //execute

function addTwoNumber(number1,number2){
    console.log(number1+number2);
}
// in javascript we dont need to give the type of number1 or 2

//addTwoNumbers()  ->return nan as argument nhi diya
addTwoNumber(3,"4")  //34
addTwoNumber(3,4)  //7
addTwoNumber(3,"a")  //3a
addTwoNumber(3,null)  //3

// Parameters -> jb bhi hum function ki definiton bnate hai tb jo bhi input lete hai then those input are called parameters

//Argument ->jb function ko call kiya jata hai tb uske ander jo value pass krte hai usse hum kehte hai arguments


// in javascript we can store the call function in variable

// const result =addTwoNumber(3,5)  // 8

// console.log("Result:",result);  //result ki value comes undefined so basically function abhi kuch return nhi rk rha hai isliye undefined aaya , n console.log is diff voh bs print krta hai


function addTwoNumbers(number1,number2){

    let result=number1+number2
    return result;

    // return number1+number2  ->we can also do like this

    // console.log("sid")  this will not print as return ke baad hai , return ke baad kuch bhi print nhi hota
}

const result =addTwoNumbers(3,5)  
console.log("Result:",result); 

function loginUserMessage(username ="sam"){
    if(!username){
    // if(username === undefined){
        console.log("Please enter the username");
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("siddharth"))
console.log(loginUserMessage())  // when we do not pass anything tb undefined aata hai not null


// in javascript undefined ya {} empty string ko false value maan liya jaata hai

// we can give defalut value in function loginUserMessage(username ="sam"){} like this