const moles = [
  document.querySelector('.mole0'),
  document.querySelector('.mole1'),
  document.querySelector('.mole2'),
  document.querySelector('.mole3'),
  document.querySelector('.mole4'),
  document.querySelector('.mole5'),
];
var counter = 0;
document.querySelector('.start').addEventListener('click', () => {
  document.querySelector('.start').classList.add('disabled');
  setInterval(getUpRandomMole, 1000);
});

function getUpRandomMole() {
  let randomNumber = Math.round(Math.random() * 5);
  moles[randomNumber].classList.add('getUP');
  document.addEventListener('click', (e) => {
    if (e.target === moles[randomNumber]) {
      moles[randomNumber].classList.remove('getUP');
      counter += 1;
      document.querySelector('.counter').innerText = counter;
    }
  });

  setTimeout(() => {
    moles[randomNumber].classList.remove('getUP');
  }, 750);
}

/*for (let i = 0; i < 10; ++i) {
  let randomNumber = Math.round(Math.random() * 6);
  console.log(randomNumber);
}*/
