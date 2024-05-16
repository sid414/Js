function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500));  // [200,400,500]

// paramter ek hai but argument kaafi hai toh us case mein we use rest operator(...)/or spread operator use case pe depend hota hai kab rest bolna hai kab spread


function calculateCartPrices(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrices(200,300,400,2000));  // here val1=200,val2=300, n output mein ayga [400,2000]

const user = {
    username:"sid",
    price:100
    // prices :100
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// is trh ke method mein type safety check krni padti hai like agr price ko prices krdiya toh undefined ayga prices ki value

handleObject({
    username:"sam",
    price:399
})

// hum object aise pass kr skte hai

const MyNewArray=[200,400,500,1000]
function returnSecondValue(getarr){
    return getarr[1];
}
// console.log(returnSecondValue(MyNewArray));

console.log(returnSecondValue([200,400,500,1000]));