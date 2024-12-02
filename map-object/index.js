const athlete1 = { name: "Alice", averageTime10KmMins: 58.3 };
const athlete2 = { name: "Dave", averageTime10KmMins: 53.2 };
const athlete3 = { name: "Micky", averageTime10KmMins: 64.5 };
const athlete4 = { name: "Judy", averageTime10KmMins: 66.0 };

const athletes = new Map();
function addAthlete(athlete, time) {
  athletes.set(athlete, time);
}

function getSummary() {
  athletes.forEach((value, key) =>
    console.log(
      `${key.name} average time is ${key.averageTime10KmMins} but today Alice achieved ${value}`
    )
  );
}

addAthlete(athlete1, 57.3);
addAthlete(athlete2, 61.1);
addAthlete(athlete3, 59.9);
addAthlete(athlete4, 61.6);

getSummary();
