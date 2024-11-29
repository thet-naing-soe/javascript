const collection = [];

function addBookToCollection(title, author, yearPublished, libraryData) {
  // Explicitly check for title
  title = title || "Unknown Title";

  // Explicitly check for author
  author = author || "Unknown Author";

  // Explicitly check if yearPublished is undefined or null
  yearPublished = yearPublished ?? "Not Specified";

  // Explicitly check for availability at main library
  let availability =
    (libraryData?.locations?.mainLibrary && "Available") || "Not Available";

  // Push the book object to 'collection'
  collection.push({
    title: title,
    author: author,
    yearPublished: yearPublished,
    availability: availability,
  });
}

addBookToCollection("JavaScript: The Good Parts", "Douglas Crockford", 2008, {
  locations: { mainLibrary: true },
});
addBookToCollection("", "William Shakespeare", null, null);
addBookToCollection("House of Giants", "Gemma Small", "", null, {
  locations: { mainLibrary: null },
});
console.log(collection);
