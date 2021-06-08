//console.log('Hello World');

//Declaring the variables
const cartResult = document.getElementById('cartResult');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const donutPrice = 1.9;
const muffinPrice = 2.3;
const sCakePrice = 11.9;
const bCakePrice = sCakePrice;
const milkshakePrice = 0.8;
let counter = 0;
const sumarize = document.getElementById('sumarize');

//Event Listeners
button1.addEventListener('click', () => {
  counter = counter + donutPrice;
  console.log(counter);
  const newItem = document.createElement('li');
  cartResult.appendChild(newItem);
  newItem.innerText = `Donut: $ ${donutPrice}0`;
  let flooredcounter = Math.floor(counter);
  sumarize.innerText = `Total price is $ ${flooredcounter}`;
});

button2.addEventListener('click', () => {
  counter = counter + muffinPrice;
  console.log(counter);
  const newItem = document.createElement('li');
  cartResult.appendChild(newItem);
  newItem.innerText = `Muffin: $ ${muffinPrice}0`;
  let flooredcounter = Math.round(counter * 10) / 10;
  sumarize.innerText = `Total price is $ ${flooredcounter}`;
});

button3.addEventListener('click', () => {
  counter = counter + sCakePrice;
  console.log(counter);
  const newItem = document.createElement('li');
  cartResult.appendChild(newItem);
  let flooredcounter = Math.round(counter * 10) / 10;
  newItem.innerText = `Strawberry Cake: $ ${sCakePrice}0`;
  sumarize.innerText = `Total price is $ ${flooredcounter}`;
});

button4.addEventListener('click', () => {
  counter = counter + bCakePrice;
  console.log(counter);
  console.log(counter);
  const newItem = document.createElement('li');
  cartResult.appendChild(newItem);
  let flooredcounter = Math.round(counter * 10) / 10;
  newItem.innerText = `Blueberry Cake: $ ${bCakePrice}0`;
  sumarize.innerText = `Total price is $ ${flooredcounter}`;
});

button5.addEventListener('click', () => {
  counter = counter + milkshakePrice;
  console.log(counter);
  const newItem = document.createElement('li');
  cartResult.appendChild(newItem);
  newItem.innerText = `Milkshake: $ ${milkshakePrice}0`;
  let flooredcounter = Math.round(counter * 10) / 10;
  sumarize.innerText = `Total price is $ ${flooredcounter}`;
});
//Functions
