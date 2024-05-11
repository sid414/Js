
//*********Arrays******
// array mein zruri nhi in javascript ki same type ke elements ho string ,number saath mein rkh skte hai
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
// 1-JavaScript arrays are resizable and can contain a mix of different data types.
// 2-JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// 3-JavaScript arrays are zero-indexed
// 4-JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

//**********shallow copy*********
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

const arr= [0,1,2,3,4,5]
// console.log(arr[2]);

// arr[9]=10; //Increasing the length extends the array by adding empty slots without creating any new elements
// console.log(arr[9]); 

// Decreasing the length property does, however, delete elements.

const Heros=["ironamn","spiderman"];
const arr1= new Array(1,2,3,4) // another way of initalising array

//Array methods

arr.push(6)
// console.log(arr);
arr.pop(); // last value ko remove krdo
// console.log(arr);

arr.unshift(9);
// console.log(arr); //array ke start mein add hota hai hai n due to which baki sare elements ko shift krna padta hai thats why it is less use 

// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

arr.shift();
// console.log(arr);

// console.log(arr.includes(9));  //false
// console.log(arr.indexOf(9));    //-1

const newArr= arr.join()  // join ne array ko bind krdiya hai n usko string mein convert krdiya hai
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);  //string


// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.


// slice ,splice

console.log("A" , arr);
const myn1= arr.slice(1,3)  // 3 is not included ie last range is not included, it does not manipulate original array
console.log(myn1);
console.log("B",arr);


const myn2 = arr.splice(1, 3)  // 3 is included ie last range is included but also the array changes that is that portion gets removed ,it manipulates original array
console.log(myn1);
console.log("C ", arr);
console.log(myn2);
