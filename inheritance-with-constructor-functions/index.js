function Event(name, location, date) {
  this.name = name;
  this.location = location;
  this.date = date;
}

Event.prototype.getDetails = function () {
  return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`;
};
function Conference(name, location, date, keynoteSpeaker) {
  Event.call(this, name, location, date);
  this.keynoteSpeaker = keynoteSpeaker;
}
Conference.prototype = Object.create(Event.prototype);
Conference.prototype.constructor = Conference;
Conference.prototype.getDetails = function () {
  const eventBasics = Event.prototype.getDetails.call(this);
  return `${eventBasics}, KeyNoet Speaker: ${this.keynoteSpeaker}`;
};

const conference = new Conference(
  "10 Nights of JS",
  "Scrimba HQ",
  "2025-09-29",
  "Ashley Smith"
);
console.log(conference.getDetails());
