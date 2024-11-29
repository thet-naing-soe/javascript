const studentDetails = {
  firstName: "janaka",
  lastName: "siriwardena",
  age: 28,
  country: "sri lanka",
  email: "j.siri@totalinternet.com",
  discordUsername: "JS1",
  modulesCompleted: ["html", "js", "css"],
};
const deepClonedstudentDetails = structuredClone(studentDetails);
deepClonedstudentDetails.modulesCompleted[0] = "TS";
console.log(studentDetails);
console.log(deepClonedstudentDetails);
