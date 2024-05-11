const marvel_heros =["thor","ironman","spiderman"]
const dc_heroes =["superman","flash","batman"]

// marvel_heros.push(dc_heroes);
// console.log(marvel_heros); // merge nhi hue idhr array ke ander array aagya toh since arry koi bhi data le lete hai toh isne array ko bhi data ki trh le liya.push existing array pe push krta hai

// console.log(marvel_heros[3][0]);

const allHeroes=marvel_heros.concat(dc_heroes)
// console.log(allHeroes); //The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.concat return new array

// spread operator (...) ayahn pe hum aur values add kr skte hai ... krke
const all_new_heroes =[...marvel_heros,...dc_heroes]
// console.log(all_new_heroes); //same result as concat

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity); // in flat( depth) depth can be infinity too
console.log(real_another_array);


console.log(Array.isArray("Sidd"));   // gives false
console.log(Array.from("Sidd"));   // converts to array

console.log(Array.from({name:"Sidd"}));  // gives empty array

console.log(Array.from(Object.values({name: "Sidd"}).join("")));  


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //returns a new array from a set of elements






