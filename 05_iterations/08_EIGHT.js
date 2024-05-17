// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// The reduce method in JavaScript is a powerful array method that executes a reducer function on each element of the array (or typed array), resulting in a single output value. This method is especially useful for accumulating values or transforming an array into a different data structure.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

// in this accumulator first take the value from initalvalue,currentvalue comes form array given, n accumulator ek hi baar puchta hai initialvalue se ,second time jo array ka sum ie result aaya voh le leta hai

// callbackFn
// A function to execute for each element in the typed array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

// accumulator
// The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

// currentValue
// The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

// currentIndex
// The index position of currentValue in the typed array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

// array
// The  array reduce() was called upon.

// initialValue Optional
// A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the typed array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the typed array, and callbackFn starts executing with the second value in the typed array as currentValue. In this case, if the typed array is empty (so that there's no first value to return as accumulator), an error is thrown.


const myNums=[1,2,3]

const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
},3)
// here after },3) ->is initial value
// console.log(myTotal);
 
// now using arrow function

const MyTotal =myNums.reduce((acc,currval)=>acc+currval,3)
console.log(MyTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const PriceToPay =shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(PriceToPay);