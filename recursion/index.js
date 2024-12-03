let str = "SCRIMBA";

function reverseStr(str) {
  if (str.length === 0) {
    return str;
  } else {
    return reverseStr(str.slice(1)) + str.slice(0, 1);
  }
}

console.log(reverseStr(str));
