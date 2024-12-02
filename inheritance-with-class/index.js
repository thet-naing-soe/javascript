class Event {
  constructor(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;
  }

  getDetails() {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
  }
}
class TennisMatch extends Event {
  constructor(name, location, date, player1, player2) {
    super(name, location, date);
    this.player1 = player1;
    this.player2 = player2;
  }
  getDetails() {
    const eventBasics = super.getDetails();
    return `${eventBasics} Match: ${this.player1} vs ${this.player2}`;
  }
}

const tennisMatch = new TennisMatch(
  "Grand Slam Final",
  "Wimbledon",
  "2025-07-15",
  "J Bloggs",
  "B Doe"
);
console.log(tennisMatch.getDetails());
