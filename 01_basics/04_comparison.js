// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2!=1);

// ***** automatically converts string to number ****
// console.log("2"==1);
// console.log("2">1);
// console.log("2">=1);
// console.log(typeof "2");

console.log(null >0); 
console.log(null >=0);
let Num=Number((null ==0))
console.log(Num);
console.log(null ==0);
console.log(null ===0);

// Note:- Equality operator (== or ===) works differently as compared to comparisons operator like(>,>=,<) in javascript. The comparison operator (<,>,>=)convert null to 0 and thats why null>0 is false and null>=0 is true whereas eqaulity converts null to nan and thats why null ==0 or null ===0 is false.

console.log(undefined>0);
console.log(undefined>=0);
console.log(undefined==0);
console.log(undefined<0);

// give false in everyexample of undefined here

// ===(strick check)
console.log("2"===2); //here conversion will not happen as it will check the data type now therefore it will not give false