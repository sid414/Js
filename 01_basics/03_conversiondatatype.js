let score =true

// console.log(score);
// console.log(typeof(score));
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(valueInNumber); 

// *****basically Number () converts the string to number but abc or sid or 23si cant be converted to number but they are being converted by NUmber fn() so to check for this calculate typeof which tells whether the string is a number or not ******

// nan in case of not conversion or undefined/string
// 0 in case of null or in case of bool false
// 1 in case of bool true

// console.log(typeof valueInNumber); // type of nan is number

// "33" => 33
// "33abc" => NaN(Not in number)
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let somenumber =33
let stringNumber =String(somenumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);


// ************Operations*********//

let value =3
let negativeValue = -value
console.log(negativeValue);

// console.log(2+2);  // addition
// console.log(2-2);  // subtract
// console.log(2*2); // multiply
// console.log(2/2); // divide
// console.log(2**2); // 2 raise to power 2
// console.log(2**3); //2 raise to power 3
// console.log(2%2); //remainder

let str1 ="hello"
let str2 =" sid"
let str3=str1+str2
// console.log(str3);

console.log(1+"2");  //12
console.log(1+"2" +"3"); //123
console.log(1+2+"3"); //33
console.log("1"+2);  //12
console.log("1"+2 +3);   //123
console.log("1"+2 +"3"+"4");  //1234
console.log(1+2+("3"+"4"));  //334
console.log(("3"+"4")+1+2); //3412
console.log(("3"+"4")+(1+2)); //343


// not do this conversion very bad method
console.log(+true); //convert true to 1
console.log(+"");  // conveert "" to 0

let num1,num2,num3

num1=num2=num3=2+2


let gameCounter=100
gameCounter++ //postfix - usage ke baad increment hoti hai
++gameCounter   // prefix -pehle i value incement hojati hai
console.log(gameCounter);




