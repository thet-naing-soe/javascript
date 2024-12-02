class Employee {
  constructor(name) {
    this.name = name;
  }
  static getNewIntern(name) {
    return {
      name,
      role: "intern",
      startDate: new Date().toDateString(),
    };
  }
  /*
Challenge:
1. Set up a static method called getNewIntern. 
   getNewIntern should return an object with a 'name' property, 
   a 'role' property which is hard-coded to ‘intern’, and a 
   'startDate' property which should be the time of code execution. 
   (🤔 How can you use JS to get the time right now?)
*/
}

console.log(Employee.getNewIntern("Dave"));
