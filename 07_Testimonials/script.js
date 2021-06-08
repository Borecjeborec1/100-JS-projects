//console.log('Hello World');

//Declaring the variables
const photo_div = document.getElementById('photo');
const name_div = document.getElementById('name');
const text_div = document.getElementById('text');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
let number = -1;
const testimonials = [
  { name: 'Jack', text: 'Apple, Carrot, Pear, Cucumber, Banana, Tomato, Blueberry, Cabbage' },
  {
    name: 'Zoe',
    text:
      'As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon Crest icon.png Targon, heralding major events that reshape worlds. ',
  },
  {
    name: 'Thomas',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
  },
];

//Event Listeners
leftButton.addEventListener('click', moveLeft);

rightButton.addEventListener('click', moveRight);

//Functions

function moveLeft() {
  number--;
  if (number < 0) {
    number = testimonials.length - 1;
  }
  name_div.innerText = testimonials[number].name;
  text_div.innerText = testimonials[number].text;
}

function moveRight() {
  number++;
  if (number > testimonials.length - 1) {
    number = 0;
  }
  name_div.innerText = testimonials[number].name;
  text_div.innerText = testimonials[number].text;
}
