
let budget = 4000
let expensesWeak1 = 700
let expensesWeak2 = 850
let expensesWeak3 = 900
let expensesWeak4 = 650
let earningsWeak1 = 1000
let earningsWeak2 = 1100
let earningsWeak3 = 1200
let earningsWeak4 = 900


let totalExpenses = expensesWeak1 + expensesWeak2 + expensesWeak3 + expensesWeak4
let totalEarnings = earningsWeak1 + earningsWeak2  + earningsWeak3 + earningsWeak4

let remaningBuget = totalEarnings - totalExpenses

let persentageSpent = totalExpenses / budget * 100

let bugetStaftus = ''
if (persentageSpent <= 50) {
    bugetStaftus = 'Great Job! You have managed your expenses well withim the budget.'
}else if(persentageSpent <=75){
    bugetStaftus = 'You are doing okay, but keep an eye on your spending to stay within the budget .'
}else{
    bugetStaftus = 'You have exceeded your buget. Consider reviwing your expenses and making adjusments.'
}

console.log("Monthly Expenses Report");
console.log('-----------------------------------------');

const MonthlyExpenseReport =  `Buget : $ ${budget} \n Total Expenses : ${totalExpenses} \n Total Earnings : ${totalEarnings}  \n Reamaning Budget : ${remaningBuget} \n Percentage Spent: ${persentageSpent} \n \n
${bugetStaftus} \n`


console.log(MonthlyExpenseReport);
