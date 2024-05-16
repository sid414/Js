// Immediately Invoked Function Expressions (IIFE)
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// jaise hi function likha usse immediate execute krwana hai,
// use of it-global scope se pollution nhi chahiye so we create alg ek scope to remove that pollution and plus we want it immediatley gets executed

// named iife
(function chai(){
    console.log('DB Connected');
})();
//()  ->first parenthesis is function ki definition
//()  ->second parenthesis is function ka call/execution

// ; yahan yeh lgana zruri hai coz immediate invoke function hai yeh invoke toh hogya but isse pta nhi hai ki actual mein context rokna khan hai , toh aisi situation mein js mein end krna padta hai through semicolon

((name)=>{
    console.log(`DB Connected Two ${name}`);
})('sid'); // now it will run

