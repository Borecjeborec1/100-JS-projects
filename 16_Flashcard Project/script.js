//console.log('Hello World');
const resultDiv = document.getElementById('result');

document.getElementById('addQuestion').addEventListener('click', newCard);

function newCard(x, y) {
  this.question = document.getElementById('textarea1').value;
  this.answer = document.getElementById('textarea2').value;
  const newDiv = document.createElement('div');
  newDiv.style.border = `1px solid red`;
  newDiv.style.padding = `20px`;
  newDiv.style.margin = `20px`;
  newDiv.style.width = `200px`;
  const newQuestion = document.createElement('h4');
  newQuestion.innerText = this.question;
  const newShowHide = document.createElement('p');
  newShowHide.innerText = 'Show/Hide answer';
  newShowHide.addEventListener('click', () => {
    newAnswer.classList.toggle('displayNone');
  });
  const newAnswer = document.createElement('h6');
  newAnswer.innerText = this.answer;
  newAnswer.classList.add('displayNone');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'delete';
  deleteBtn.classList.add('btn');
  resultDiv.appendChild(newDiv);
  newDiv.appendChild(newQuestion);
  newDiv.appendChild(newShowHide);
  newDiv.appendChild(newAnswer);
  newDiv.appendChild(deleteBtn);
}

function enwidk() {
  this.script = document.getElementById('textarea1').value;
}
