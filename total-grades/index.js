import { studentsArr } from "./studentsArr.js";

function calculateClassAverage(students) {
  const totalGrades = students.reduce(function (total, currentStudent) {
    return total + currentStudent.grade;
  }, 0);
  return totalGrades / students.length;
}

console.log(calculateClassAverage(studentsArr));
