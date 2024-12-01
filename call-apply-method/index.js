function displayPolitician(currentSituation) {
  // console.log(this);
  console.log(
    `${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`
  );
}

const politician1 = {
  name: "Carly Fowler",
  age: 40,
};
const politician2 = {
  name: "Dave Bland",
  age: 55,
};
displayPolitician.call(politician1, "In jail for corruption");
displayPolitician.call(politician2, "Resigned due to incompetence");
displayPolitician.apply(politician1, ["In jail for corruption"]);
