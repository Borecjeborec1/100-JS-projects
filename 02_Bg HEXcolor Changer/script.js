//console.log('Hello World');

//Declaring the variables
const button = document.getElementById('btn');
const paragraph = document.getElementById('paragraph');
const body = document.querySelector('body');
const hexCode = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Event Listeners
button.addEventListener('click', function () {
  var hex = '#';
  for (let i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * 16);
    hex += hexCode[randomIndex];
  }
  paragraph.innerHTML = 'Your color is: ' + hex;
  body.style.backgroundColor = hex;
});

//Functions
