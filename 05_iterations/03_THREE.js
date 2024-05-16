// for of
// syntax -> 
// for (const iterator of object) { 
// }


// ["", "" , ""]
// [{},{},{}]

const arr =[1,2,3,4,5]
// here object is not not necessarily a JavaScript object, but rather an iterable object.

for(const val of arr){
    // console.log(val);
}

const greetings ="Hello World"
for(const greet of greetings){
    if(greet ==' '){
        continue;
    }
    // console.log(`Each char is ${greet}`);
}


// Maps  -->The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.No duplicate value is there in it only unique values are there.

// map apne aap mein ek object hai

const map =new Map()
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr', "France")
map.set('In', "India")

// console.log(map);

for (const itr of map) {
    // console.log(itr); // full map print hogya with key and values 
}

// [key,value] ->array ka destructure hogya

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObject ={
    'game1':'NFS',
    'game2':'Spiderman'
}

// for(const [key,value] of myObject){
//     console.log(key,':-',value);
// } // this structure of for of will not work here

// myObject is not iterable here 

