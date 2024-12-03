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
