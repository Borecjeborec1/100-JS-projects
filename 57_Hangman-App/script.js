const wordDiv = document.getElementById('wordDiv');
const gLeft = document.getElementById('gLeft');
const guesses = document.getElementById('guesses');
let array = [];

let word = 'propably';
let splittedWord = word.split('');

for (let i = 0; i < word.length; i++) {
  array.push('_');
}
wordDiv.innerText = array.join(' ');
window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode);
  const letter = splittedWord.includes(guess);
  if (letter) {
    const pos = word.indexOf(guess);
    const pos1 = word.lastIndexOf(guess);
    if (pos1 !== -1 && pos !== -1) {
      array.splice(pos, 1, guess);
      array.splice(pos1, 1, guess);

      wordDiv.innerText = array.join(' ');

      if (array.indexOf('_') == -1) {
        guesses.innerHTML = `<h3>WP<br>You had ${gLeft.innerText} Guesses Left</h3> <a class="btn white" style="color:#252525;font-weight:bold" href = "index.html">Play Again</a>`;
      }
    }
  } else {
    gLeft.innerText--;
    if (gLeft.innerText == 0) {
      guesses.innerHTML = `<h3>The word was ${word}</h3> <a class="btn white" style="color:#252525;font-weight:bold" href = "index.html">Play Again</a>`;
    }
  }
});
