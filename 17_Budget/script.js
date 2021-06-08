//console.log('Hello World');

const newMainDiv = document.getElementById('newMainDiv');

document.getElementById('calculate').addEventListener('click', calculate);

function calculate() {
  this.budget = document.getElementById('budgetInput').value;
  this.expense = document.getElementById('expenseInput').value;
  if (this.budget !== '' && this.expense !== '') {
    document.getElementById('budgetValue').innerText = `$ ${this.budget}`;
    document.getElementById('expenseValue').innerText = `$ ${this.expense}`;
    let result = this.budget - this.expense;
    document.getElementById('resultValue').innerText = `$ ${result}`;
    const newBudgetCol = document.createElement('div');
    newMainDiv.appendChild(newBudgetCol);
    newBudgetCol.classList.add('col');
    newBudgetCol.classList.add('s4');
    const newBudgetHeading = document.createElement('h6');
    newBudgetCol.appendChild(newBudgetHeading);
    newBudgetHeading.innerText = this.budget;
    newBudgetHeading.style.color = 'red';
    newBudgetHeading.style.marginLeft = `50px`;

    const newExpenseCol = document.createElement('div');
    newMainDiv.appendChild(newExpenseCol);
    newExpenseCol.classList.add('col');
    newExpenseCol.classList.add('s4');
    const newExpenseHeading = document.createElement('h6');
    newExpenseCol.appendChild(newExpenseHeading);
    newExpenseHeading.innerText = this.expense;
    newExpenseHeading.style.color = 'red';
    newExpenseHeading.style.marginLeft = `50px`;

    const newBalanceCol = document.createElement('div');
    newMainDiv.appendChild(newBalanceCol);
    newBalanceCol.classList.add('col');
    newBalanceCol.classList.add('s4');
    const newBalanceHeading = document.createElement('h6');
    newBalanceCol.appendChild(newBalanceHeading);
    newBalanceHeading.innerText = result;
    newBalanceHeading.style.marginLeft = `50px`;
  }
}
