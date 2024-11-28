const jobHunter = {
  name: "Tom Chant",
  username: "TChant44",
  workLocation: "Europe",
};
const jobHunterName = jobHunter.name || jobHunter.username;
console.log(`Hey, ${jobHunterName}`);
