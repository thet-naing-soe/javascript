function Character(name) {
  this.name = name;
  this.collectedItemsArr = [];
  this.addItem = function (item) {
    this.collectedItemsArr.push(item);
    console.log(`${this.name} now has ${this.collectedItemsArr.join(", ")}`);
  };
}
const wizard = new Character("Merlin");
wizard.addItem("wand");
wizard.addItem("map");
wizard.addItem("potion");
const witch = new Character("Merlin");
witch.addItem("sword");
witch.addItem("cloak of invisibility");
