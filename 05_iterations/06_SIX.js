// const coding= ["js","ruby","cpp","java","py"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);  // undefined mtlb ki usne return kuch bhi nhi kra,so foreach value return nhi krta


// The filter method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array. Here’s a detailed breakdown of how filter works:

// Syntax
// array.filter(callback(element, index, array), thisArg);

// callback: A function that is called for every element in the array. It takes three arguments:

// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array filter was called upon.
// thisArg (optional): Value to use as this when executing the callback


const myNum =[1,2,3,4,5,6,7,8,9,10]

// const newNum= myNum.filter((num)=>(num>5))
// const newNum= myNum.filter((num)=>num>5)

const newNum =myNum.filter((num)=>{
    // num>5  // aise likhenge toh since scope start hogya hai to it will return []

    return num>5 // [,6,7,8,9,10]
})
console.log(newNum);
// here agr hum scope open krte hai toh return statement likhna is very imp

// reason for empty array -If the filter method does not use a return statement, the callback function will implicitly return undefined for each element. Since undefined is treated as false in the context of the filter method, none of the elements will satisfy the condition, and the resulting array will be empty.

// filter opeartion is a call back fn and it returns value.Filter method expects a function that returns a boolean value to determine whether each element should be included in the new array. 

const newNUM= []
myNum.forEach((num)=>{

    if(num>4){
        newNUM.push(num);
    }
})
console.log(newNUM);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const UserBooks = books.filter((bk)=>{
    return  (bk.genre=== 'History')
  })
//   console.log(UserBooks);

  let userbooks = books.filter((num)=> num.publish>=2000)

  userbooks=books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre === 'History'
  })

  console.log(userbooks);
