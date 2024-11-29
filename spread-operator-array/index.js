const lunchMenu = [
  "Greek Salad",
  "Open Sandwich",
  "Parsnip Soup",
  "Flatbread and Dip",
];
const dinnerMenu = ["Lasagne", "Strogonoff", "Tagine", "Katsu Curry"];
const sweetMenu = [
  ["Mixed Berry Ice Cream", "Chocolate"],
  "Chocolate Brownie",
  "Orange Cheesecake",
];

const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu];
eventMenu[8][0] = "Tutti Frutti";
console.log(sweetMenu);
console.log(eventMenu);
