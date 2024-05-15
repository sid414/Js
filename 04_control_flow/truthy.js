const userEmail="si@ddharth.ai"
// const userEmail=[] 
// const userEmail={}
 
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

// here we havent compare, aur ek string ko true maan liya gya hai , empty string hoti toh false maan lete n empty array toh true

// ****falsy values *******

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ***** truthy values ****
// "0", 'false', " ", [], {}, function(){}


// array ko check krne ka treeka
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


const emptyObj = {}
// Object.keys(emptyObj) will return an array
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//false ==0 ->true
// false =='' ->true
// 0='' ->true

 
// Nullish Coalescing Operator (??): null undefined

let val1;
val1= 5 ?? 10
console.log(val1); //5
// in cases of appwrite or databse they return two values to shyd voh null ya undefined bhej de un cases ke liye this is used.

let val2;

// val2 = null ?? 10
// console.log(val2); // 10 
// val2 =undefined ?? 15
// console.log(val2)

val2 = null ?? 10 ?? 20
console.log(val2) // jo sbse pehle wala 10 hai vhi output hoga

// basically yeh error fallback option hai

// terniary operator and Nullish Coalescing Operator are both different 

//***** terniary operator **

// condition ?true:false

const IceTeaPrice =100
IceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80");

