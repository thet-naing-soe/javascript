const postTags = new Set();

function addTag(newTag) {
  postTags.add(newTag);
}

addTag("history");
addTag("romans");
addTag("romans");
addTag("sociology");
addTag("history");
addTag("history");

postTags.forEach((tag) => console.log(tag));
