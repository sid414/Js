// let a=10
// const b=20
// var c=30

// {}  are call scopes ,object mein they are used but voh object declaration hai but jb yeh function ya if else ke saath aata hai tb isse bola jata hai scope 

// var c=300  //global scope

let a=300;
if(true){
    let a=10
    const b=20
    console.log("Inner:",a);  //block scope

    // var c=30   
    // c =30 // var na bhi declare kre tbhi dikat hai 
}

// console.log(a);
// console.log(b);

// console.log(c);  // so basically error dena chahiye tha c jo hai voh under defined hai but var ne output de diya

// toh ab agr var c=300 bahar declare kiya ab problem aayi coz programmer ko toh 300 chahiye tha but he is getting 30

// Block Level Scope: This scope restricts the variable that is declared inside a specific block, from access by the outside of the block.

// for(let i=0;i<Array.length;i++){
//     const element=array[i]
// }


// console ke ander jo scope check krenge toh woh alg hai but actual mein jb hum code environment ke through check krenge toh voh global scope alg hai

function one(){
    const username="hitesh"

    function two (){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
    return username
}
// console.log(one())


// firstly line 42 will give error n since in js line by line execution is there therefore age function chla hi nhi
// nested function jb hote hai toh child function parent ke function ko access kr skte hai

if(true){
    const username="sid"
    if(username==="sid"){
        const website ="youtube"
        console.log(username+website);
    }
    // console.log(website);
    // console.log(username);
}
// console.log(username);


//***********Interestin *******/
// two techniques
console.log(addone(5)) // this will give output -6
function addone(num){
    return num+1
}
addone(5)
// console.log(addone(5))

// addTwo(5)  // will give error

// console.log(addTwo(5));  // will give error 


const addTwo = function(num){
    return num+2
}
addTwo(5) // not give error 


//kyunki in part-2 jahan function ko variable mein hold bhi krdiya declaration ke saath
// hoisting is a concept which tells how the functions are declared where theya re declared n so on