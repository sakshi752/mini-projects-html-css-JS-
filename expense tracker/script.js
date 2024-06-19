const transactionForm = document.getElementById('transactionForm');
const msg = document.createElement('p');
const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const clearBtn = document.getElementById('clearBtn');

const updateSummary = () => {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(({ amt, type }) => {
        if (type === 'income') {
            totalIncome += parseFloat(amt);
        } else {
            totalExpense += parseFloat(amt);
        }
    });

    const totalBalance = totalIncome - totalExpense;

    balance.textContent = `$${totalBalance.toFixed(2)}`;
    income.textContent = `$${totalIncome.toFixed(2)}`;
    expense.textContent = `$${totalExpense.toFixed(2)}`;

    localStorage.setItem('balance', JSON.stringify(totalBalance));
    localStorage.setItem('expense', JSON.stringify(totalExpense));
    localStorage.setItem('income', JSON.stringify(totalIncome));
}

const createTransactionCard = (amt, desc, type) => {
    const transaction = document.createElement('li');
    transaction.classList.add('transactionCard');
    transaction.classList.add(`${type === "income" ? "income" : "expense"}`);
    transaction.innerHTML = `<div>
        <p>${type === 'income' ? 'income' : desc}</p>
        <span>${type}</span>
    </div>
    <div>
        <p>$${amt}</p>
        <span class="date">${getCurrentDateTime()}</span>
    </div>`;


    const transactionList = document.getElementById('transactionList');
    transactionList.appendChild(transaction);

    // Update summary whenever a transaction card is created
    updateSummary();
}

const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US');
}

const loadTransactions = () => {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

   

    if (transactions.length === 0) {
        const transactionList = document.getElementById('transactionList');
        transactionList.innerHTML = ''; // Clear existing content
        msg.textContent = 'No transactions present';
        transactionList.appendChild(msg);
    } else {
        transactions.forEach((transaction) => {
            createTransactionCard(transaction.amt, transaction.desc, transaction.type);
        });
    }
    updateSummary();
}

const deleteAll = () => {
    localStorage.removeItem('transactions'); // Remove all transactions from localStorage
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = ''; // Clear transaction list in the DOM
    msg.textContent = 'No transactions present';
    transactionList.appendChild(msg);
    updateSummary(); // Update summary (balance, income, expense)
}

// Call loadTransactions only once when the page loads
window.addEventListener('load', loadTransactions);

transactionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const amt = parseFloat(document.getElementById("amt").value);
    const desc = document.getElementById("desc").value;
    const type = document.querySelector('input[name="type"]:checked').value;

    // Retrieve current balance from localStorage
    const currentBalance = parseFloat(JSON.parse(localStorage.getItem('balance')));

    if (currentBalance < amt && type==='expense') {
        alert('Your balance is less than the expense amount. Transaction cannot be added.');
    } else {
       
        const transaction = { amt, desc, type };
        const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

        transactions.push(transaction);

        localStorage.setItem('transactions', JSON.stringify(transactions));

        // Remove the "No transactions present" message if it exists
        if (msg.parentElement) {
            msg.parentElement.removeChild(msg);
        }

        // Call this function to create transaction if balance is sufficient
        createTransactionCard(amt, desc, type);

        // Update summary (balance, income, expense)
        updateSummary();
    }

    // Clear the form fields
    document.getElementById("amt").value = '';
    document.getElementById("desc").value = '';
    document.querySelector('input[name="type"]:checked').checked = false;
});

clearBtn.addEventListener('click', deleteAll);
