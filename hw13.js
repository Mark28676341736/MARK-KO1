/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const DEPOSIT = {
  id:67234,                
  type: 'deposit',    
  amount: 100         
};
console.log(id, type, amount)

const WITHDRAW = {
  id:13313,                
  type: 'withdraw',    
  amount: 500         
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,
};

const {balance='1000' } = account
console.log(balance)

  // Історія транзакцій

const transactionHistory = [deposit, withdraw];

const history = {
  transactions: [],
};
console.log(transaction)
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    return{
      ammont,
      type
    }
  }
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    balance +=amount;
    const transaction = createTransaction( amount, type)
}
console.log(deposit, balance)
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
  if (amount > balance) {
    console.log('Зняття такої суми неможливе, недостатньо коштів.');
    return; 
  }
}
  /*
   * Метод повертає поточний баланс
   */
   function getBalance(account) {
    return account.balance

  }
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
   function getTransactionDetails(id) {
      return account.transactions.find(transaction => transaction.id === id);

   },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  function getTransactionTotal(type) {
    return account.balance
  },


  // hw12 dest.

  function countTotalSalary(salaries) {
  let total = 0;
  for (const salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}
console.log(countTotalSalary({
  Mark: 142,
  Sam: 293,
  Frye: 31,
}));
