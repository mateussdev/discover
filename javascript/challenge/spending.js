/*  ### Sistema de gastos familiares

Crie um objeto que pussuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [1000, 1000, 2500, 250.5],
    expenses: [84, 110, 700, 1110]
};

function sum(array){
    let total = 0;

    for(let value of array){
        total += value;
    }

    return total;
};

// 5.450,5

function calculateBalance(){
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);
    const total = calculateIncomes - calculateExpenses;

    const itsOk = total >= 0;

    let balanceText = "negativo";

    if(itsOk){
        balanceText = "positivo";
    }

    console.log(`Seu saldo foi ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()

// COMO EU FIZ
/* 
let family = {
    incomes: [2500, 1500, 1800, 250.5],
    expenses: [84, 250, 1000, 2000]
};

function sum(array){
    let total = 0;

    for(let value of array){
        total += value;
    }

    return total;
}

function calculateSpending(){
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);
    const total = calculateIncomes - calculateExpenses;

    const itsOk = total >= 0;

    let balance = "saldo negativo";

    if (itsOk) {
        balance = "saldo positivo"
    }

    console.log(`Você tem um ${balance} de ${total} reais.`)
}

calculateSpending()
*/
