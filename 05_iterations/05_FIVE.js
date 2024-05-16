const coding = ["js","ruby","cpp","java","py"]

// for each  ->callback fn dedo 
// kyunki yeh callback hai toh iska naam nhi htoa hai n kyunki yeh function array ki ander chl rha hai toh yeh value hogi apne aap parameter ki trh value lekr aayga

// coding.forEach(  function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

//  both print the same value

function printMe (item){
    // console.log(item);
}

coding.forEach(printMe) // gives same output as above two cases , also sirf refernce dena hai function ko call put nhi krna ie printMe() yeh nhi likhna in forEach only printMe likhna hai

// forEach ke pass kaafi cheezon ka access hota hai ie item,index,arr etc

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

// [{},{},{}] yeh scenario bahaut baar use kiya jaata hai
// array of object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach((item)=>{
    // console.log(item.languageFileName);
    // console.log(item.languageName);
    // console.log(item);
})