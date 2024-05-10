const name='sid'
const repoCount = 50

// console.log(name+repoCount+"value");  \\ old way

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName =new String('sidc-dev-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString =gameName.slice(-9,5)
console.log(anotherString);

// Return value in trim
// A new string representing str stripped of whitespace from both its beginning and end. Whitespace is defined as white space characters plus line terminators.
// If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str).

// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const newStringone ="    sid"
console.log(newStringone);
console.log(newStringone.trim());

const url="https://sid.com/sid%20dev"
console.log(url.replace('%20','-'));
console.log(url.includes('sid'));
console.log(url.includes('baie'));

console.log(gameName.split('-'));