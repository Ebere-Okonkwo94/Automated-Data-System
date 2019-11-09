const taxRate = 0.08;
const spendingThreshold = 15000.00;
const phonePrice = 10500.00;
const screenGuardPrice = 1500.00;

let bankBalance = 22000.00;
let amount = 0;

function calculateTax (amount){
    return amount * taxRate;
}

function formatAmount (amount){
    return "#" + amount.toFixed(2);
}

while (amount < bankBalance){
    amount = amount + phonePrice;

if (amount < spendingThreshold) {
        amount = amount + screenGuardPrice;
    }
}

amount = amount + calculateTax (amount);

console.log("your purchase is: " + formatAmount (amount));

if (amount > bankBalance){
    "you can't afford this purchase";
    
}
bankAccount  = prompt ('please tell me your account balance');
console.log(accountBalance);
