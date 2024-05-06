let score =true

console.log(score);
console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score)
console.log(valueInNumber); 
// basically Number () converts the string to number but abc or sid or 23si cant be converted to number but they are being converted by NUmber fn() so to check for this calculate typeof which tells whether the string is a number or not

// nan in case of not conversion or undefined
// 0 in case of null or in case of bool false
// 1 in case of bool true

console.log(typeof valueInNumber); // type of nan is number

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let somenumber =33
let stringNumber =String(somenumber)
console.log(typeof stringNumber);
console.log(stringNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);