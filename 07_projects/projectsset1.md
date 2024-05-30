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



```
## Project -2 solution

```Javascript

// yahan pr jo event ke bare mein baat krenge voh  krenge ek submit type ka event

// form jb bhi submit hota hai  toh two ways se hota hai , get type se ya post type se but jb bhi submit hota hai toh uski values url mein ya server ke pass chli jaati hai, but we dont want that toh default function jo hai form ka usko rok lo

// this usecase will give you empty value
// const height=parseInt(document.querySelector('#height').value);

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  //since result is an element so parseInt ki bhi zrurat nhi hai

  // The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // tofixed(2) used ki jo answer aye voh 2 decimal value tk dikhado
    //  results.innerHTML = `<span>${bmi}</spam>`;

    if (bmi < 18.6) {
      results.innerHTML = `<span>Under-weight :${bmi}</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>Over-weight :${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Normal range :${bmi}</span>`;
    }
  }
});
```
