const course={
    courseName :"js in hindi",
    price:"999",
    courseInstructor:"hitesh",
}
// course.courseInstructor  -->correct way

// another method to extract

const{courseInstructor}=course
// kya value extract krni hai aur khan se krni hai

console.log(courseInstructor);

// agr hume lgta hai courseinstructor bada naam hai toh hum usse apne hisab se bhi naam de skte hai

const{courseInstructor:ins}=course
console.log(ins);
// this is how we can destructure any value


// react concept whan by default ek props hota hai toh vhan yeh props.company ki jagah we can do {company}

// const navbar =({company}) =>{

// }
// navbar(company="siddharth")


 // Api - jb aapko apna kaam kisi aur ke sr pe dalna hai,api is jo values aati hai backend se un values ko aap kaise likhte hai,earlier values use to come in xml structure but now it comes in json structure

 
  

// {
//     "name":"siddharth",
//     "coursename":"js",
//     "price":"free"
//  }
  // this is json structure object k trh hi hai ,proper json mein keys bhi string ki trh hoti hai n values bhi string mein hoti hai

//   kyi baar api array ke form mein bhi milti hai


