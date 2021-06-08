//console.log('Hello World');

//Declaring the variables
const valueInput = document.getElementById('enterValue');
const newItemList = document.getElementById('newItemList');
const buttonSend = document.getElementById('buttonSend');

//Event Listeners
buttonSend.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.innerText = valueInput.value;
  newItemList.appendChild(newItem);
  newItem.classList.add('newItem');

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trashButton');
  newItemList.appendChild(trashButton);

  trashButton.addEventListener('click', () => {
    newItem.style.display = 'none';
    trashButton.style.display = 'none';
  });
});

//Functions
