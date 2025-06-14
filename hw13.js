/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  transactionType: 0,

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: ++this.transactionType,
      amount,
      type,
    };
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;

    const { id, type, amount: value } = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions = [...this.transactions, { id, type, amount: value }];
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    const { balance } = this;

    if (amount > balance) {
      console.log('недостатньо коштів');
      return;
    }

    this.balance -= amount;

    const { id, type, amount: value } = this.createTransaction(amount, Transaction.WITHDRAW);

    this.transactions = [...this.transactions, { id, type, amount: value }];
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    const { balance } = this;
    return balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      const { id: currentId, type, amount } = transaction;
      if (currentId === id) {
        return { id: currentId, type, amount };
      }
    }
    return null;
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      const { type: currentType, amount } = transaction;
      if (currentType === type) {
        total += amount;
      }
    }

    return total;
  },

  getFirstTwoTransactions() {
    const [first, second] = this.transactions;
    return { first, second };
  },
};
