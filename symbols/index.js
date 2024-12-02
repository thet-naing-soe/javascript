const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951,
};
const libraryNote = Symbol();
book[libraryNote] = "the book has gone missing";
console.log(book[libraryNote]);
