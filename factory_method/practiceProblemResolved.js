// Classes concretas
class DebitCard {
    constructor(amount) {
        this.amount = amount;
    }

    pay() {
        console.log(`Pagando com debit no valor de R$ ${this.amount}`);
    }
}

class CreditCard {
    constructor(amount) {
        this.amount = amount;
    }

    pay() {
        console.log(`Pagando com credit no valor de R$ ${this.amount}`);
    }
}

// Factory Method
class ExpensesFactory {
    static types = {
        credit: CreditCard,
        debit: DebitCard,
    };

    static createExpenses(type, amount) {
        const ExpensesClass = this.types[type];
        if (!ExpensesClass) {
            throw new Error("Tipo de gasto não suportado.");
        }
        return new ExpensesClass(amount);
    }
}

// Código do cliente
function main() {
    try {
        const creditExpense = ExpensesFactory.createExpenses("credit", 500);
        const debitExpense = ExpensesFactory.createExpenses("debit", 200);

        creditExpense.pay();
        debitExpense.pay();
    } catch (err) {
        console.error("Erro ao processar gasto...", err.message);
    }
}

main();
