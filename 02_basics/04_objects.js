// object constructor

const tinderUser=new Object(); //singleton object

// const tinderUser ={}  //non singleton object
// console.log(tinderUser);  //{} empty object

tinderUser.id="12334av"
tinderUser.name="sammy"
tinderUser.isLoggedIN =false;

// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname :{
        userfullname:{
            firstname:"sid",
            lastname:"goenka"
        }
    }
}
// jitne chahe utni nesting kr skte hai

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);


//optional chaining -> like agr fullname exist nhi krta toh question mark lagayenge fullname ke baad, agr yeh value toh yeh kriye 

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
const obj4 ={5:"a", 6:"b"}
// const obj3 ={obj1,obj2}
// console.log(obj3);  //array wali problem ,obj yeh hai first then iske ander values n so on 


// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// const obj3= Object.assign(obj1,obj2)
// we can also write it as 
// const obj3 = Object.assign({},obj1,obj2,obj4)

//  {} --> this is an optional parameter , isko dena acha hai as jitni bhi value sb combine hojygi n guaranted hai result yhi aayga,ie ki it act as a target n agr target nhi hai toh guarantee ho jati hai that it will act as target n baki sb as a source

const obj3={...obj1,...obj2}
console.log(obj3);

// Array of objects
const users =[
    {
    id:1,
    email:"sid@gmail.com"
    },
    {
        id:1,
        email:"sid@gmail.com"
        },
        {
            id:2,
            email:"siid@gmail.com"
            },
            {
                id:3,
                email:"sidd@gmail.com"
                },
]
console.log(users[1].email);

console.log(Object.keys(tinderUser)); // output value ka datatype is arrays

console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser));  // gives an array of key value pair

console.log(tinderUser.hasOwnProperty("isLogged")); // tells whether this prop is available or not