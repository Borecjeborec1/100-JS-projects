// console.log("Hello World")

const amountInput = document.getElementById("amountInput");
const increaseInput = document.getElementById("increastInput");
const monthsInput = document.getElementById("monthsInput");
const output = document.getElementById("output");


setInterval(main,10);

function main(){
  if(amountInput.value != "" && increaseInput.value !="" && monthsInput.value !=""){
    var mainIncrease = increaseInput.value / 100
    var result = amountInput.value * mainIncrease * monthsInput.value
    output.innerText = `Monthly Payment = ${result}`
  }
};
