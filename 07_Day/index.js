//Activity 1:Object Creation and Access

//create an object representing a book with properties like title,author,and year and log the object to the console.
const book1 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
console.log("Book 1:", book1);

//access and log the title and author properties of the book object
console.log("Title:", book1["title"]);
console.log("Author:", book1.author);

//Activity 02:Object methods

//add a method to the book object that returns a string with the book's title and author, and log the result of calling this method
book1.returnAuthorandTitle = function () {
  return `Author and title ${this.author} and ${this.title}`;
};
const result = book1.returnAuthorandTitle();
console.log(result);

//add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object
book1.updateYear = function (year) {
  this.year = year;
};
book1.updateYear(2001);
console.log("Updated book object  is : ", book1);

//Activity 3:Nested Objects

//create a nested object representing a library with the properties like name and books (an array of book objects) , and log the library object to the console

const library = {
  library_name: "TNB BCA Department Library",
  book: [
    {
      title: "C programming language",
      author: "Denis ritchi",
    },
    {
      title: "C++ programming language",
      author: "Bzarne stroterp",
    },
  ],
};
console.log("Libray name : ", library.library_name);
const books = library.book;
console.log(books);
for (let i = 0; i < books.length; i++) {
  console.log(`Book ${i + 1} :${books[i].title}`);
}

//Activity 4 :The `this` keyword

//add a method to the book object that uses the 'this' keyword to return a string with the book's title and year ,a nd log the result of calling this method
book1.returnAuthorandTitle = function () {
  return `Author and title ${this.author} and ${this.title}`;
};

//Activity 5 :Object iteration

//use for...in loop to iterate over the properties of the book object and log each property and its value
for (const key in book1) {
  console.log(key, book1[key], key, book1[key]);
}

//use object.keys and object.values methods to log all the keys and values of the book object
console.log(Object.keys(book1));
console.log(Object.values(book1));


// output

// Book 1: {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925
//   }
//   Title: The Great Gatsby
//   Author: F. Scott Fitzgerald
//   Author and title F. Scott Fitzgerald and The Great Gatsby
//   Updated book object  is :  {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 2001,
//     returnAuthorandTitle: [Function (anonymous)],
//     updateYear: [Function (anonymous)]
//   }
//   Libray name :  TNB BCA Department Library
//   [
//     { title: 'C programming language', author: 'Denis ritchi' },
//     { title: 'C++ programming language', author: 'Bzarne stroterp' }
//   ]
//   Book 1 :C programming language
//   Book 2 :C++ programming language
//   title The Great Gatsby title The Great Gatsby
//   author F. Scott Fitzgerald author F. Scott Fitzgerald
//   year 2001 year 2001
//   returnAuthorandTitle [Function (anonymous)] returnAuthorandTitle [Function (anonymous)]   
//   updateYear [Function (anonymous)] updateYear [Function (anonymous)]
//   PS C:\Users\hello\OneDrive\Desktop\30Days_js-challange\07_Day> node index.js
//   Book 1: {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 1925
//   }
//   Title: The Great Gatsby
//   Author: F. Scott Fitzgerald
//   Author and title F. Scott Fitzgerald and The Great Gatsby
//   Updated book object  is :  {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     year: 2001,
//     returnAuthorandTitle: [Function (anonymous)],
//     updateYear: [Function (anonymous)]
//   }
//   Libray name :  TNB BCA Department Library
//   [
//     { title: 'C programming language', author: 'Denis ritchi' },
//     { title: 'C++ programming language', author: 'Bzarne stroterp' }
//   ]
//   Book 1 :C programming language
//   Book 2 :C++ programming language
//   title The Great Gatsby title The Great Gatsby
//   author F. Scott Fitzgerald author F. Scott Fitzgerald
//   year 2001 year 2001
//   returnAuthorandTitle [Function (anonymous)] returnAuthorandTitle [Function (anonymous)]   
//   updateYear [Function (anonymous)] updateYear [Function (anonymous)]
//   [ 'title', 'author', 'year', 'returnAuthorandTitle', 'updateYear' ]
//   [
//     'The Great Gatsby',
//     'F. Scott Fitzgerald',
//     2001,
//     [Function (anonymous)],
//     [Function (anonymous)]
//   ]