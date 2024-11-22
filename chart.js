const ctxExpense = document.getElementById('expenseChart').getContext('2d');
const ctxIncome = document.getElementById('incomeChart').getContext('2d');

function renderCharts() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const categories = {};
    transactions.forEach(transaction => {
        if (!categories[transaction.category]) {
            categories[transaction.category] = 0;
        }
        categories[transaction.category] += transaction.amount;
    });

    const expenseData = Object.keys(categories).map(key => categories[key]);
    const expenseLabels = Object.keys(categories);

    new Chart(ctxExpense, {
        type: 'pie',
        data: {
            labels: expenseLabels,
            datasets: [{
                label: 'Expenses by Category',
                data: expenseData,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false // Allow for custom sizes
        }
    });

    const incomeData = transactions.filter(t => t.category === 'income').map(t => t.amount);
    const incomeLabels = transactions.filter(t => t.category === 'income').map(t => t.date);

    new Chart(ctxIncome, {
        type: 'line',
        data: {
            labels: incomeLabels,
            datasets: [{
                label: 'Income Over Time',
                data: incomeData,
                borderColor: '#36A2EB',
                fill: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false // Allow for custom sizes
        }
    });
}

document.addEventListener('DOMContentLoaded', renderCharts);