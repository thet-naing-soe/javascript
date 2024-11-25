const dailyStepsArr = [10000, 12000, 8000, 15000, 11000, 19000, 13000];

// .every() returns true if every item passes the test.
const areAllOver10k = dailyStepsArr.every(function (stepCount) {
  return stepCount >= 10000;
});
// console.log(areAllOver10k);
// .some() returns true if one or more items pass the test.
const areSomeOver10k = dailyStepsArr.some(function (stepCount) {
  return stepCount >= 10000;
});
// console.log(areSomeOver10k);
const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76];

// .find() returns the value of the first item that passes the test.
const invoiceOver1k = invoicesUSDArr.find(function (invoice) {
  return invoice > 1000;
});
// console.log(invoiceOver1k);
// .findIndex() returns the index of the first item that passes the test.
const invoiceIndexOver1k = invoicesUSDArr.findIndex(function (invoice) {
  return invoice > 1000;
});
// console.log(invoiceIndexOver1k);
// .indexOf() gives us the index of a given item in the array.
// console.log(invoicesUSDArr.indexOf(201));

// .at() takes a positive or negative integer and returns the item at that index.
//Negative integers count back from the end of the array.
console.log(invoicesUSDArr.at(-2));
