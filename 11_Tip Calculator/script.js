//console.log('Hello World');

//Declaring the variables
const costInput = document.getElementById('costInput');
const peopleInput = document.getElementById('peopleInput');
const select = document.getElementById('selectService');
const button = document.getElementById('btn');
const price = document.getElementById('price');
const tip = document.getElementById('tip');
const costBad = document.getElementById('costBad');
const peopleBad = document.getElementById('peopleBad');
var cost;
var people;
var percent;

//Event Listeners
button.addEventListener('click', function () {
  if (costInput.value === '') {
    costBad.innerText = 'You have to write the Cost of the Bill.';
  } else if (peopleInput.value === '') {
    peopleBad.innerText = 'You have to write the amount of People.';
  } else {
    setInterval(function () {
      if (select.value === '1') {
        percent = 0.2;
      } else if (select.value === '2') {
        percent = 0.1;
      } else {
        percent = 0.05;
      }
    }, 10);
    cost = costInput.value;
    people = peopleInput.value;
    costBad.innerText = '';
    peopleBad.innerText = '';
    const tipNumber = cost * percent;
    const wholeNumber = (tipNumber / percent + tipNumber) / people;
    tip.innerHTML = 'Tip Amount : ' + tipNumber;
    price.innerHTML = 'Each person Pays : ' + wholeNumber;
  }
});

//Functions
