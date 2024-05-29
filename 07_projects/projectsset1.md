# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1
``` javascript
console.log("siddharth)
const buttons = document.querySelectorAll('.button');

// console.log(buttons)//we will get the nodelist

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click',function(e){
    // event hota hai saath mein carry krna hota hai ,voh joh event object hai usmein bahaut saari details hoti hai

    console.log(e)
    console.log(e.target) // likhne se yeh ota chl jata hai event aa khan se rha hai

    if(e.target.id =='grey' ){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id =='white' ){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id =='blue' ){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id =='yellow' ){
      body.style.backgroundColor=e.target.id;
    }if(e.target.id =='purple' ){
      body.style.backgroundColor=e.target.id;
    }
  })
});
