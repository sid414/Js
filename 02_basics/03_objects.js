// In JavaScript, objects are typically created using either the Object() constructor or through literal notation, where we define key-value pairs within curly braces.

// In JavaScript, most objects are based on the Object type and inherit properties and methods from Object.prototype. This acts as a blueprint for objects, giving them common functions like toString(). However, objects with a null prototype don't inherit from Object.prototype. Changes to Object.prototype affect all objects unless overridden. To prevent unintended changes, Object.prototype itself has an unchangeable prototype, This means its prototype is always null and cannot be changed ensuring stability and security in JavaScript's core features.


// singleton - means constructor se object bnate hai toh singleton ek object bnta hai mtlb ki yeh apne trh ka ek hi object hai,but hum dusri trh se bnate hai toh multiple instance bn jate hai singletion nhi hota

// so literals mein jb object ko declare krte hai toh singleton nhi bnta hai,constructor se humesha bnega.
// Object.create  -->constructor type
 
//Object literals

// in objects we can define key as well as value but in arrays we cannot
myArray= ["s","i"]
myArray[1]

const mySum = Symbol("key1")
// symbol ko as a key in object direct nhi kr skte hai 
const Jsuser ={
    name:"sid",
    0:"si",
    age:18,
    location:"Jaipur",
    email:"sid@gmail.com",
    isLoggedIn :false,
    lastloggedIn :["Monday","Saturday"],
    // mySum: "mykey1" , // not used as symbol
    [mySum]: "mykey1"
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
// console.log(Jsuser[email]); // --> this will show error n say email is not defined as object mein jo left hand side ie key jo hai string ki form mein consider krta hai toh isliye hume email ko string ki form mein dena padega

// console.log(Jsuser);

console.log(Jsuser[0]);  // isko dot se access nhi krskte only through square notation


// console.log(Jsuser.mySum); // it gives the answer but agr datatype dekhenge toh yeh symbol kr trh use nhi hua hai

// console.log(typeof Jsuser.mySum); // string

// for using like symbol we have to keep mysum in sqaure brackets also jb jsuser ko print krenge toh ab voh bolega ki symbol[key1] : 'mykey1'

console.log(typeof mySum);  // symbol
console.log(typeof [mySum]); //object
console.log(Jsuser[mySum]);  //mykey1  correct syntax for symbol access

Jsuser.email="sid@yahoo.com"
// through this we can overwrite the values

// console.log(Jsuser); 

// Object.freeze(Jsuser) // after this changes will not overwrite
Jsuser.email="sid@microsoft.com"

// console.log(Jsuser);

// javascript ke ander func ko type1 citizenship se treat kiya jata hai mtlb ki func mein discrimination nhi hota we can treat them as variable

Jsuser.greeting = function(){
    console.log("Hello JSuser");
}
console.log(Jsuser.greeting); //[Function(anonymous)]  -->function ka reference return hua hai

console.log(Jsuser.greeting());
// Hello Jsuser
Jsuser.greetingTwo= function(){
    console.log(`Hello JS user,${this.name}`);
}  // string interpolation -> string ko convert kiya backticks mein
// koi bhi variable likhna hai toh $ lgake curly braces , jb bhi same object ko reference krna hai then we write this and dot lgayenge to object kii prop ko access kr skte hai

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
// ek undefined bhi aa rha hai uska reason hai ki jo greeetingTwo function hai uska koi return type nhi hai sp it implicitly/automatically return undefined