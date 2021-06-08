//console.log('Hello World');

/*const blackCoffeeButton = document.getElementById('button1');
const latteCoffeeButton = document.getElementById('button2');
const cappuccinoCoffeeButton = document.getElementById('button3');
const americanoCoffeeButton = document.getElementById('button4');
const espressoCoffeeButton = document.getElementById('button5');
*/
const buttons = document.querySelectorAll('#button');
let price = 0;
const caffeeName = document.getElementById('newCoffee');
const priceResult = document.getElementById('price');

Array.from(buttons).forEach((b) => {
  b.addEventListener('click', newCaffee);
});

function newCaffee() {
  priceResult.innerText = priceResult.innerText + ' + ' + this.innerText;
}
