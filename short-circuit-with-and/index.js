const accountBalanceUsd = "$45,000,000,000 🤑💰";
const swissBankPassCodesArr = [1234, 5678, 9876, 3434];
const authenticationCheck = (passCode) =>
  swissBankPassCodesArr.includes(passCode) && console.log(accountBalanceUsd);

authenticationCheck(1234);
