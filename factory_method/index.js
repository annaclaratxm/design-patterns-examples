// Classes concretas
class DebitCard {
  constructor(amount) {
    this.amount = amount; // o amount fica armazenado na instância
  }

  pay() {
    console.log(`Pagando com debit no valor de R$ ${this.amount}`);
  }
}

class CreditCard {
  constructor(amount) {
    this.amount = amount; // o amount fica armazenado na instância
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
    return new ExpensesClass(amount); // passa amount aqui
  }
}

// Código do cliente
function main() {
  const expensesTypes = ["credit", "debit"];
  const amounts = { credit: 500, debit: 200 }; // valores de exemplo

  try {
    expensesTypes.forEach((type) => {
      // Aqui pegamos o valor do objeto amounts
      const amount = amounts[type];
      // Criamos a instância já com o amount
      const expenses = ExpensesFactory.createExpenses(type, amount);
      // Chamamos pay sem passar parâmetro
      expenses.pay();
    });
  } catch (err) {
    console.error("Erro ao processar gasto...", err.message);
  }
}

main();
