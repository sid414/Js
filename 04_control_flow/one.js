// if(conditon){

// }

const isUserLoggedIn =true;

if(isUserLoggedIn){

}

// if(2 =="2"){
//     console.log("executed");  // output executed as here data type is not checked
// }

// for type checking we have strict equal ie ===
// if(2 ==='2'){
//     console.log("exectued");
// }


// if(3!=2){
//    console.log("1");
// }


const temperature =41
if(temperature<50){
    console.log("less than 50");
}else{
console.log("temperature is greater than 50");
}

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User Power :${power}`);
// }

// console.log(`User Power :${power}`); this will give error as yahan aati hai dikkat scope ki since power ka scope is functional scope toh curly braces ke bahar power is undefined   

const balance =1000
// if(balance >500 ) console.log("test");
if(balance <500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}