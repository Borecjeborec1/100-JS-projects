//console.log('Hello World');

//Declaring variables
const body = document.querySelector('body');
const button = document.getElementById('btn');
var colors = ['black', 'pink', 'yellow', 'green', 'white', 'cyan', 'blue', 'skyblue'];

//Event Listeners
button.addEventListener('click', function () {
  let randomNumber = Math.floor(Math.random() * 8);
  body.style.backgroundColor = colors[randomNumber];
});

//Functions
