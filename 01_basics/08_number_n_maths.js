const score =400
console.log(score);

const balance = new Number(100) // here we are defining an object of number type
console.log(balance);

console.log(balance.toString().length); //tostring converts number to string and then we can apply string prop
console.log(balance.toFixed(1))
// Note: Number has comparatively less prototype properties (methods) than String

// Methods with examples:
// 1. balance.toString() // This converts a number into string
// 2. balance.toString().length // Once we convert it to String, all properties / methods of Strings are now open to us, such as length
// 3. balance.toFixed(2) // Used to reduce or round of to specific decimal values
//     - Use Cases 
//         a. After calculation of GST
//         b. In Ecommerce website


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));
// precision mein priority decimal ke pehle milti hai ,calculation n value pe dependency honi chahiye 

// const otherNumber = 23.8966
//     otherNumber.toPrecision(3) // Output - 23.9
//     otherNumber = 123.8966
//     otherNumber.toPrecision(3) // Output - 124    
//     otherNumber = 1123.8966
//     otherNumber.toPrecision(3) // Output - 1.12e+3 (exponential value)

const hundreds = 100000
console.log(hundreds.toLocaleString());  //1,000,000 by default acc to us standard
console.log(hundreds.toLocaleString('en-IN'));  // now indian standard ke acc comas lgega

//  Other methods
//     .MAX_VALUE
//     .MIN_VALUE
//     .MAX_SAFE_INTEGER
//     .MIN_SAFE_INTEGER



// ******** Maths *********

console.log(Math );  // yeh apne aapmein ek object hai jismein bahaut saari prop hai

// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,3,4,5));
// console.log(Math.max(4,6,2,8));

console.log(Math.random());  // value come b/w 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)
// Math.random() tricks -----
// Math.random()*10
// Math.random()*10 + 1 // This assures that values are atleast 1 & more than 1
// (Math.random()*10) + 1 // To avoid any BODMAS rule miscalculation

// ---- Trick to randomize value between range ----
// const min = 10
// const max = 20
// const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)