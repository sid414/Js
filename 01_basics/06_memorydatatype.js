// Stack(Primitive) , Heap (Non Primitive)

// Whenever stack memory is used toh apne jo vairable declare kiya uska aapko ek copy milta hai , aur jb heap ein chle jaye toh vhan milta hai refernce original value ka,so any change there will lead to change in originalvalue.

let myYoutubename = "avc@yotube";

let anothername =myYoutubename
anothername ="xyz"

console.log(myYoutubename); //avc@youtube
console.log(anothername); //xyz

let userOne ={
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo =userOne

userTwo.email="user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// output of both user2@gmail.com

