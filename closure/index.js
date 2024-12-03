/* 
- The account balance should start at zero.

- The function should return an object containing 
  3 functions. One for depositing money, one for 
  withdrawing money, and a getBalance function which 
  logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract 
  from it. 
*/

function createBankAccount(name) {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amount) {
      balance -= amount;
    },
    getBalance() {
      console.log(`${name} has £${balance} in their account.`);
    },
  };
}

const daveAccount = createBankAccount("dave");
const wendyAccount = createBankAccount("wendy");

daveAccount.deposit(33);
wendyAccount.deposit(66);

daveAccount.withdraw(24);
wendyAccount.withdraw(14);

daveAccount.getBalance();
wendyAccount.getBalance();
