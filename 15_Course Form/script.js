//console.log('Hello World');

//Declaring the variables
const nameInput = document.getElementById('nameInput');
const numberInput = document.getElementById('numberInput');
const dateInput = document.getElementById('dateInput');
const findButton = document.getElementById('findButton');
const preloader = document.getElementById('preloader');
const newMainDiv = document.getElementById('newMainDiv');
const newPDiv = document.getElementById('newP');

//Event Listeners
findButton.addEventListener('click', () => {
  findButton.innerText = 'Find Course';
  if (nameInput.value !== '' && numberInput.value !== '' && dateInput.value !== '') {
    addPreloader();
    setTimeout(addCourse, 4000);
  } else {
    const newP = document.createElement('p');
    newPDiv.appendChild(newP);
    newP.classList.add('newP');
    newP.innerText = 'Please fill all of the Požadavky';
    setTimeout(() => {
      newP.innerText = '';
    }, 1000);
  }
});

//Functions
function addPreloader() {
  preloader.classList.remove('displayNone');
  setTimeout(() => {
    preloader.classList.add('displayNone');
  }, 4000);
}

function addCourse() {
  this.name = document.getElementById('nameInput').value;
  this.number = document.getElementById('numberInput').value;
  this.date = document.getElementById('dateInput').value;

  let newCourse = document.createElement('div');
  newCourse.classList.add('newCourseDiv');
  newMainDiv.appendChild(newCourse);
  let nameHeading = document.createElement('h5');
  nameHeading.classList.add('newCourseName');
  nameHeading.innerText = `Name: ${this.name}`;
  newCourse.appendChild(nameHeading);
  let numberHeading = document.createElement('h5');
  numberHeading.classList.add('newCourseNumber');
  numberHeading.innerText = `Telephone Number: ${this.number}`;
  newCourse.appendChild(numberHeading);
  let dateHeading = document.createElement('h5');
  dateHeading.classList.add('newCourseDate');
  dateHeading.innerText = `Date: ${this.date}`;
  newCourse.appendChild(dateHeading);
}
