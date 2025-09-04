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
        return new ExpensesClass(amount); // passa amount direto
    }
}

// Código do cliente
function main() {
    try {
        // Aqui criamos as instâncias já com o valor, sem usar variável amount fora
        const creditExpense = ExpensesFactory.createExpenses("credit", 500);
        const debitExpense = ExpensesFactory.createExpenses("debit", 200);

        creditExpense.pay(); // Saída: Pagando com credit no valor de R$ 500
        debitExpense.pay();  // Saída: Pagando com debit no valor de R$ 200
    } catch (err) {
        console.error("Erro ao processar gasto...", err.message);
    }
}

main();
