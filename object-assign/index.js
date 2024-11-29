const studentDetails = {
  firstName: "janaka",
  lastName: "siriwardena",
  age: 28,
  country: "sri lanka",
  email: "j.siri@totalinternet.com",
  discordUsername: "JS1",
  modulesCompleted: ["html", "js", "css"],
};

// const studentDetailsCopy = { ...studentDetails };

const studentDetailsCopy = {};
Object.assign(studentDetailsCopy, studentDetails);
studentDetailsCopy.modulesCompleted[0] = "react";
console.log(studentDetails);
console.log(studentDetailsCopy);
