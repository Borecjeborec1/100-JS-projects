//console.log('Hello World');

const buttons = document.querySelectorAll('.btn');
const output = document.getElementById('output');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.innerText !== 'C' && e.target.innerText !== '=') {
      output.innerText += e.target.innerText;
    } else if (e.target.innerText == '=') {
      output.innerText = eval(output.innerText);
    } else {
      output.innerText = '';
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.keyCode == 96) {
    output.innerText += 0;
  } else if (e.keyCode == 97) {
    output.innerText += 1;
  } else if (e.keyCode == 98) {
    output.innerText += 2;
  } else if (e.keyCode == 99) {
    output.innerText += 3;
  } else if (e.keyCode == 100) {
    output.innerText += 4;
  } else if (e.keyCode == 101) {
    output.innerText += 5;
  } else if (e.keyCode == 102) {
    output.innerText += 6;
  } else if (e.keyCode == 103) {
    output.innerText += 7;
  } else if (e.keyCode == 104) {
    output.innerText += 8;
  } else if (e.keyCode == 105) {
    output.innerText += 9;
  } else if (e.keyCode == 107) {
    output.innerText += '+';
  } else if (e.keyCode == 12) {
    output.innerText = eval(output.innerText);
  } else if (e.keyCode == 13) {
    output.innerText = eval(output.innerText);
  } else if (e.keyCode == 106) {
    output.innerText += '*';
  } else if (e.keyCode == 111) {
    output.innerText += '/';
  } else if (e.keyCode == 109) {
    output.innerText += '-';
  }
});
