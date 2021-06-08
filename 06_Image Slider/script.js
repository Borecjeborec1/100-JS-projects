//console.log('Hello World');

//Declaring the variables
const buttonLeft = document.getElementById('btnLeft');
const buttonRight = document.getElementById('btnRight');
const container_div = document.getElementById('container');
const images = ['car1.jpg', 'car2.jpg', 'car3.jpg', 'car4.jpg', 'car5.jpg'];
let number = 0;

container_div.style.backgroundImage = `url('${images[number]}')`;

//Event Listeners
buttonLeft.addEventListener('click', function () {
  number--;
  if (number < 0) {
    number = images.length - 1;
  }
  container_div.style.backgroundImage = `url('${images[number]}')`;
});
buttonRight.addEventListener('click', function () {
  number++;
  if (number > images.length - 1) {
    number = 0;
  }
  container_div.style.backgroundImage = `url('${images[number]}')`;
});
//Functions

setInterval(function () {
  console.log(number);
}, 1000);
