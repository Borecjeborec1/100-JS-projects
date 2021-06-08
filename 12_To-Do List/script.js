//console.log('Hello World');

//Declaring the variables
const buttonAdd = document.getElementById('btnAdd');
const buttonDeleteAll = document.getElementById('btnDelete');
const addInput = document.getElementById('addItem');
const valueUL = document.getElementById('valueUL');
const myError = document.getElementById('error');
let counter = 0;

//Event Listeners
buttonAdd.addEventListener('click', function () {
  if (counter >= 0 && counter < 9) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    counter++;
    newTodo.classList.add('newTodo');
    newTodo.innerText = addInput.value;
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completedButton');
    todoDiv.appendChild(completedButton);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.classList.add('deleteBtn');
    todoDiv.appendChild(deleteBtn);

    valueUL.appendChild(todoDiv);

    completedButton.addEventListener('click', () => {
      todoDiv.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
      counter--;
      todoDiv.classList.toggle('fall');
      todoDiv.addEventListener('transitionend', () => {
        todoDiv.remove();
      });
    });

    buttonDeleteAll.addEventListener('click', () => {
      counter = 0;
      todoDiv.classList.toggle('fall');
      todoDiv.addEventListener('transitionend', () => {
        todoDiv.remove();
      });
    });
  } else {
    myError.innerText = "You can't have more than 9 upcoming tasks";
    addInput.value = '';
  }
});

//Functions
