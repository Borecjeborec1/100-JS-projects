//console.log('Hello World');

//Declaring the variables
const form = document.getElementById('message');
const button = document.getElementById('btn');
const lastMessage = document.getElementById('lastMsg');
const activeMessage = document.getElementById('formInput');

//Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (activeMessage.value === '') {
    alert('You have to write something, if you want to PASS it.');
  } else {
    lastMessage.innerHTML = activeMessage.value;
    activeMessage.value = '';
  }
});

button.addEventListener('click', function (e) {
  e.preventDefault();
  if (activeMessage.value === '') {
    alert('You have to write something, if you want to PASS it.');
  } else {
    lastMessage.innerHTML = activeMessage.value;
    activeMessage.value = '';
  }
});
