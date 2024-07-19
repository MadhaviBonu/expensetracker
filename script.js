document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get expense name and amount
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    
    // Add expense to the list
    const expenseList = document.getElementById('expense-list');
    const li = document.createElement('li');
    li.textContent = ${expenseName}:$${expenseAmount.toFixed(2)};
    expenseList.appendChild(li);
    
    // Update total amount
    const totalAmountElement = document.getElementById('total-amount');
    const currentTotal = parseFloat(totalAmountElement.textContent);
    const newTotal = currentTotal + expenseAmount;
    totalAmountElement.textContent = newTotal.toFixed(2);
    
    // Clear input fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
});
