//onsole.log('Hello World');

//Declaring the variables
const activeScore = document.getElementById('activePoints');
const higherButton = document.getElementById('higherBtn');
const lowerButton = document.getElementById('lowerBtn');
var score = 0;

//Event Listeners
higherButton.addEventListener('click', function () {
  score++;
  if (score < 0) {
    activeScore.style.color = 'red';
    activeScore.innerText = score;
  } else if (score == 0) {
    activeScore.style.color = 'black';
    activeScore.innerText = score;
  } else {
    activeScore.style.color = 'green';
    activeScore.innerText = score;
  }
});

lowerButton.addEventListener('click', function () {
  score--;
  if (score < 0) {
    activeScore.style.color = 'red';
    activeScore.innerText = score;
  } else if (score == 0) {
    activeScore.style.color = 'black';
    activeScore.innerText = score;
  } else {
    activeScore.style.color = 'green';
    activeScore.innerText = score;
  }
});
