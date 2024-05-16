const myObject ={
    js:'javascipt',
    cpp:'c++',
    rb: 'ruby',
    swift : 'swift by apple'
}
// for objects for of loop was not working so we can use for in loop

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


for (const key in myObject) {
//    console.log(key); // it will give key 
   //console.log(myObject[key]); // give the values

//    console.log(`${key} shortcut is for ${myObject[key]}`);

}

const programming =["js","cpp","py","rb","java"]
for(const key in programming){
    // console.log(key); -->gives key -0,1,2,3,4
    // console.log(programming[key]);

}
// arays mein key by default hoti hai starting from 0 to arr.length-1

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const itr in map){
    console.log(itr); // kuch bhi nhi aaya
 
}

// so map is not iterable in for in loop
