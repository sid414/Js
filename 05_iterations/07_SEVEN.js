const myNumbers =[1,2,3,4,5,6,7,8,9,10]

let newNums=myNumbers.map((num)=>num+10)

// newNums=myNumbers.map((num)=>{
//     return num+10
// })

// map automatically returns values
// The filter and map methods in JavaScript are both used to create new arrays from existing arrays, but they serve different purposes and operate differently. Here’s a detailed comparison:

// 1- filter
// The filter method creates a new array with all elements that pass a test implemented by the provided function.

// chaining method

// newNums= myNumbers.map().map().filter() // isse hum kehte hai chaining 2-3 methods we can use directly

newNums=myNumbers
        .map((num)=> num*10)
        .map((num)=>{ return num+1}) // ismein jo num hai uski value is jo bhi pehle method ke lgne ke baad value aayi hai voh
        .filter((num)=> num>=40)

console.log(newNums);