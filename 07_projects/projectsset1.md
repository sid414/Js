# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1
```javascript
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
## Project -3

```javascript



// const clock = document.querySelector('#clock');
const clock = document.getElementById('clock');

// both are same use anyone

// let date = new Date()
// console.log(date.toLocaleTimeString());

// ismein main jitni baar page refresh hoga  updated time aata rhega but we want ki jo yeh date hai voh hr baar run ho n console mein update hota reh

// so for that setinterval methods controls javascript events

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// ab hr second mein values aai rhengi

```
## Project -3

```javascript

let RandomNumber = parseInt(Math.random() * 10 + 1);

const Submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let PLayGame = true;

if (PLayGame) {
  // agr game khel pa rhe hai toh submit ke upar sunna padega , toh uske liye hum addeventlistner add krenge , n sbse pehle iske baad function(e) ke ander hum e.preventdefault krenge taki values ko khin mt lekr jao hum denge isse

  Submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease Enter a Valid Number');
  } else if (guess < 1) {
    alert('PLease Enter a Valid Number more than 1');
  } else if (guess > 100) {
    alert('PLease Enter a Valid Number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`GAME OVER .Random Number was ${RandomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // if val is lower or higher r equal

  if (guess === RandomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < RandomNumber) {
    displayMessage(`Number is Too Low`);
  } else if (guess > RandomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  UserInput.value = '';
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // PEHLE EK BUTTON BANANA HOGA
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game </h2>`;
  startOver.appendChild(p);
  PLayGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    RandomNumber = parseInt(Math.random() * 10 + 1);

    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);
    PLayGame = true;
  });
}

```
