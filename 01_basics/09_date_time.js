let myDate = new Date();
console.log(myDate.toDateString());  //Sat May 11 2024
console.log(myDate.toString());  //Sat May 11 2024 06:50:02 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString());  //2024-05-11T06:50:02.855Z
console.log(myDate.toJSON()); // 2024-05-11T06:50:02.855Z
console.log(myDate.toLocaleDateString());  //5/11/2024
console.log(myDate.toLocaleString());  //5/11/2024, 6:50:02 AM
console.log(myDate.toLocaleTimeString());  //6:50:02 AM
console.log(myDate.toTimeString());  //06:50:02 GMT+0000 (Coordinated Universal Time)

console.log(typeof myDate);  //object

// month in javascript starts with 0 when writing in single digit if dd-mm type then month start with 01

// let myNewDate = new Date(2023,0,23);

let myNewDate = new Date(2023,0,23,5,3);
console.log(myNewDate);
console.log(myNewDate.toDateString());
console.log(myNewDate.toLocaleString());

// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("12-01-2023")
console.log(myCreateDate.toLocaleString());

// The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

let myTampStamp = Date.now();
console.log(myTampStamp);
console.log(myCreateDate.getTime());


// With Date.now(), it's like asking your mom what time it is, and she immediately tells you the exact time—no need to check any clock. You just get the time right now, like "It's 3:30 PM." It's quick and simple.
// Date.getTime():

// Now, with Date.getTime(), it's like you have a clock in your room. When you want to know what time it is, you look at your clock and see the time. It's like saying, "My clock says it's 3:30 PM." You're checking the time specifically on your clock.
// So, the first one gives you the current time directly, and the second one gives you the time from a clock you have in your room. Both give you the same information, but they go about it slightly differently.


console.log(Date.now());  // values are in mili second

console.log(Math.round(Date.now()/1000));// converting it into seconds , we can use math.floor or math.round


let newMyDate = new Date();
console.log(newMyDate.getDate());
console.log(newMyDate.getDay());
console.log(newMyDate.getMonth()+1); //+1 as month start from 0

console.log(`${newMyDate.getDay()} and the time`);
// ctrl + space gives properties
newMyDate.toLocaleString('default',{
    weekday: "long",
    
})

