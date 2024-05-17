const myNumbers =[1,2,3,4,5,6,7,8,9,10]

let newNums=myNumbers.map((num)=>num+10)

// newNums=myNumbers.map((num)=>{
//     return num+10
// })

// map automatically returns values
// The filter and map methods in JavaScript are both used to create new arrays from existing arrays, but they serve different purposes and operate differently. Here’s a detailed comparison:

// 1- filter
// The filter method creates a new array with all elements that pass a test implemented by the provided function.

//2- Map
// The map method creates a new array with the results of calling a provided function on every element in the calling array. It is used to transform elements in an array.


// The map and filter methods in JavaScript are both used to create new arrays from an existing array, but they serve different purposes and have distinct behaviors. Here’s a detailed comparison:

// Purpose
// map: Used for transforming every element in an array.
// filter: Used for selecting elements that satisfy a certain condition.

// Return Value
// map: Returns a new array with the same number of elements, where each element is the result of applying a transformation function to the original elements.
// filter: Returns a new array containing only the elements that satisfy the condition specified by the provided function. The number of elements in the resulting array can be less than or equal to the original array.

// Callback Function
// map: The callback function should return the transformed value for each element.
// filter: The callback function should return a boolean value (true or false). If true, the element is included in the new array; if false, it is excluded.

// chaining method

// newNums= myNumbers.map().map().filter() // isse hum kehte hai chaining 2-3 methods we can use directly

newNums=myNumbers
        .map((num)=> num*10)
        .map((num)=>{ return num+1}) // ismein jo num hai uski value is jo bhi pehle method ke lgne ke baad value aayi hai voh
        .filter((num)=> num>=40)

console.log(newNums);