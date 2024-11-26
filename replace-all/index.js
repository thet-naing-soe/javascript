const paragraph =
  "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring";

console.log(
  paragraph.replaceAll(/(?:^|\.\s)([A-Za-z])/g, (match) => match.toUpperCase())
);
