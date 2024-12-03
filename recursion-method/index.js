import { organizationData } from "./orgData.js";

function searchEmployeeById(data, targetId) {
  let results = [];
  for (let key in data) {
    if (key === "employees") {
      for (let item of data[key]) {
        if (item.id === targetId) {
          results.push(item);
        }
      }
    } else if (typeof data[key] === "object") {
      results = [...results, ...searchEmployeeById(data[key], targetId)];
    }
  }
  return results;
}

const employee = searchEmployeeById(organizationData, 5);
const employee2 = searchEmployeeById(organizationData, 6);

console.log("employee: ", employee);
console.log("employee2: ", employee2);
