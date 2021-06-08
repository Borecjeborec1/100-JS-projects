//console.log('Hello world');

//Declaring the variables
const answer_div = document.getElementById('display');

//Event Listeners

//Functions
function main(value) {
  var button = value.innerText;
  if (button === '=') {
    answer_div.innerText = eval(answer_div.innerHTML);
  } else if (button === 'C') {
    answer_div.innerText = '';
  } else {
    if (answer_div.innerHTML == '0') {
      answer_div.innerHTML = button;
    } else {
      answer_div.innerHTML += button;
    }
  }
}

answer_div.innerText = '';
