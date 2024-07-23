#

<h1 align="center">30-DAYS-JAVASCRIPT-Challenge</h1>

---

<h2 align="center">Day 01 :Variables and Data types</h2>

```
//Activity 1 :Variable Declaration

var age=20
console.log(age);

let name="Bittu"

console.log(name);


//Activity 2 :Constant Declaration


const isLoggedIn=false

console.log(isLoggedIn);

//Activity 3 :Data types

let number=123456
console.log(typeof number);
let string="Hello World"
console.log(typeof string);
let boolean=true
console.log(typeof boolean);
let nullValue=null
console.log(typeof nullValue);
let object={massage:"Hello"}
console.log(typeof object);
let arr=[1,2,3,4]
console.log(typeof arr);

//Activity 4 :Reassigning Variables

let gender="Male"
console.log(gender);
gender="Female"
console.log(gender);

//Activity 5 :Understanding const

const pi=3.7
console.log(pi);
pi=3.70   //TypeError: Assignment to constant variable.
console.log(pi);
Output :-
20
Bittu
false
number
string
boolean
object
object
object
Male
Female
3.7

```

<h2 align="center">Day 02 :Operators</h2>

```
// Activity 1 : Arithmetic Operations

//addition
let a = 10;
let b = 20;
let sum = a + b;
console.log("Sum:", sum);

//subtraction
let c = 10;
let d = 20;
let sub = c - d;
console.log("Different :", sub);

//multiplecation
let x = 10;
let y = 20;
let xy = c - d;
console.log("Multiple :", xy);

//devision
let m = 20;
let n = 10;
let div = m / n;
console.log(div);

//modules
let i = 10;
let j = 20;
let mod = i % j;
console.log("Modules : ", mod);

//Activity 2 : Assignment Operators

let k = 10;

k += 1;
console.log(k);
k -= 1;
console.log(k);

//Activity 3 : Comparison Operators

let num1 = 10;
let num2 = 12;
//greaterthan operator
let result = num1 > num2;
console.log(`${num1},${num2} is greaterthan :${result}`);

//lessthan operator
let result1 = num1 < num2;
console.log(`${num1},${num2} is lessthan :${result1}`);

num1 = 100;
num2 = 100;
//lessthan equal operator
result = num1 <= num2;
console.log(`${num1},${num2} is equal :${result}`);

//greaterthan equal operator
result1 = num1 >= num2;
console.log(`${num1},${num2} is equal :${result1}`);

//Double '==' operator
result = num1 == num2;
console.log(`${num1},${num2} is equal :${result1}`);

//Scrict '===' operator
result1 = num1 === num2;
console.log(`${num1},${num2} is equal :${result1}`);

//Activity 4 : Logical Operators

// AND operator
num1 = 10;
num2 = 30;
console.log("AND Operator :", num1 > num2 && num1 < num2);

// OR Operator
console.log("AND Operator :", num1 > num2 || num1 < num2);

// NOT Operator
console.log("NOT Operator :", !num1 > num2 || num1 < num2);

//Activity 5 : Ternary Operators

num1 = -10;
result = num1 < 0 ? "Negative" : "Positive";


// Output :
        // Sum: 30
        // Different : -10
        // Multiple : -10
        // 2
        // Modules :  10
        // 11
        // 10
        // 10,12 is greaterthan :false
        // 10,12 is lessthan :true
        // 100,100 is equal :true
        // 100,100 is equal :true
        // 100,100 is equal :true
        // 100,100 is equal :true
        // AND Operator : false
        // AND Operator : true
        // NOT Operator : true //
```

<h2 align="center">Day 03 : Control Structures</h2>

```
//Activity 1 : if-Else Statements

let num = 10;
if (num < 0) {
  console.log("Number is negative");
} else if (num == 0) {
  console.log("Number is zero");
} else {
  console.log("Number is positive");
}

let personAge = 18;
if (personAge >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//Activity 2 : Nested  if-Else Statements
let a = 10;
let b = 20;
let c = 30;
if (a > b && a > c) {
  console.log("a is greater");
} else if (b > a && b > c) {
  console.log("b is greater");
} else {
  console.log("c is greater");
}

//Activity 3 : Switch case

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

//Activity 4 : Conditional (Ternary) Operator
num = 13;
num % 2 == 0 ? console.log("Number is EVEN") : console.log("Number is ODD");

//Activity 5 : Conbining Conditions
let year = 2024;
let isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
console.log(year, "is leapYear :", isLeapYear);


//Output :
        // Number is positive
        // You are eligible to vote
        // c is greater
        // Wednesday
        // Number is ODD
        // 2024 is leapYear : true

```

<h2 align="center">Day 04 : Loops</h2>

```
//Activity 1 :For loop

//print 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//multiplication of table 5
let tableOf = 5;
for (let i = 1; i <= 10; i++) {
  console.log(tableOf * i);
}

//Activity 2 :while loop

//calculate sum of 1 to 10 using while loop
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

//print number from 10 to 1 using while loop
i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

//Activity 3 :Do...while loop

//print number 1 to 5 using do while loop
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

let num = 5;
let fact = 1;
i = 1;
do {
  fact = fact * i;
  i++;
} while (i <= num);

console.log(fact);

//Activity nested loop

//print pattern
// "*"
// "*" "*"
// "*" "*" "*"
// "*" "*" "*" "*"
// "*" "*" "*" "*" "*"

let n = 5;
let bag = "";
for (let i = 1; i <= n; i++) {
  bag = "";
  for (let j = 1; j <= i; j++) {
    bag += "* ";
  }
  console.log(bag);
}

// Activity 5 : Loop Control Statements

//write a program to print 1 to 5 but skip 5

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

//write a program to print 1 to 10 but stop the loop when the value is 7
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}

```

<h2 align="center">Day 05 : Functions</h2>

```
//Activity 1 : Function Declaration

// write a function to check the number is odd orr even
function isEvenOrOdd(n) {
  if (n % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}

//wite a function to calculate the squre of a number and return it
function squre(n) {
  return n * n;
}

//Activity 2 :Function expression

//write a function expression to find the maxium two string and return the result
const maxFinderBetweenTwoNumber = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

//write a function expresson to concatenate two string and return the result
const concatTwoString = function (a, b) {
  return a + b;
};

//Activity 3 :Arrow function

//Write an arrow function to calculate the sum of two number and return the result
const sumOfTwoNumber = (a, b) => a + b;

//write an arrow function to check if a string conatins a specifuc character and return a boolean value
const checkIfStringContains = (str, char) => str.includes(char);

//Activity 4 :Function Parameters and Default values

//write a function that takes two parameters and returns their product.Provide a default value for the second parameter
function product(a, b = 1) {
  return a * b;
}

//write a function that takes a persons name and age and return a greeting message .Provide a default value for the age.
function greeting(name, age = 18) {
  return `Hello ${name} you are ${age} years old`;
}

//Activity 5 :Higher order function
//write a higher-order function that takes a function and a number ,and calls the function that many times
function higherOrderFunction(func, n) {
  for (let i = 0; i < n; i++) {
    func();
  }
}

//write a higher-order function that takes two functions and a value ,applies the first function to the value ,and then applies the second function to the result
function higherOrderFunction2(func1, func2, value) {
  return func1(func2(value));
}

```

<h2 align="center">Day 06 : Arrays</h2>

```
//Activity 1: Array creation and access

//create an array 1 to 5 and log the array to the console
var arr = [1, 2, 3, 4, 5];
console.log(arr);

//access the first and last element of the array and log them ti the console.
console.log(arr[0]);
console.log(arr[4]);

//Activity 2 : Array methods

//use the push method to add the new element at last and log the updated value
arr.push(6);
console.log(arr);

//use the pop method to remove the last element and log the updated value
arr.pop();
console.log(arr);

//use the shift method to remove the first element from the array and log the updated array
arr.shift();
console.log(arr);

//use the 'unshift' method to add a new number to the beginning of the array and log the updated array
arr.unshift(0);
console.log(arr);

//Activity 3 : Array Methods(Intermediate)

//use the 'mp' method to create new array where each number is doubled and log the new array.
var arr2 = [1, 2, 3, 4, 5];
var arr3 = arr2.map(function (x) {
  return x * 2;
});
console.log(arr3);

//use the 'filter' method to create new array with only even numbers and log the new array
var arr4 = arr2.filter(function (x) {
  return x % 2 == 0;
});
console.log(arr4);

//use the 'reduce' method to calculate the sum of all numbers in the array and log the result
var result = arr4.reduce((ele, acc) => ele + acc, 0);
console.log(result);

//Activity 4:Array Iteration

//use a for loop to iterate over the array and log each element to the console
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//use a "forEach" loop to iterate over the array and log each element to the console
arr.forEach(function (x) {
  console.log(x);
});

//Activity 5:Multi-diamensional Arrays

//create a two-diamensional array (matrix) and log the entire array to the console
var arr5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr5);

//Access and log a specific element from the two-diamensional array
console.log(arr5[1][1]);

```

<h2 align="center">Day 07 : Objects</h2>

```
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

```

<h2 align="center">Day 08 : ES6 Features of js</h2>

```
// Activity 1 : Template Literals

//use template literals to create a string that includes variables for a person's name and age log the string to the console
let person_name = "Bittu";
let age = 21;
let result = `Personal name is ${person_name} and age is ${age}`;
console.log(result);

//create a multi-line strgin using template literals and log it to the console.
let multi_line = `This is a multi line string
created using template literals
`;
console.log(multi_line);

//Activity 2 :Destructing


//use array destructing to extract the first and second elements from an
const fruit = ["apple", "banana", "papaya", "coconut", "orange"];
const [first_ele, second_ele] = fruit;
console.log(`First element of fruits collection is ${first_ele}`);
console.log(`Second element of fruits collection is ${second_ele}`);

const book={
  title:"The Great Gatsby",
  author:"F. Scott Fitzgerald",
  year:"1991"
}
const {title,author,year}=book;
console.log(title);
console.log(author);
console.log(year);



//Activity 3:Spread and Rest Operators


//use the spread operator to create a new array that includes all elements of and existing array plus additional elements and log the  new array to the console
const myArray = [1, 2, 3, 4]; //referance
const myNewArray = [...myArray, 10, 20];
myNewArray[0] = 100;
console.log(myNewArray);
console.log(myArray);

function sum(...args) {
  return args.reduce((ele, acc) => ele + acc, 0);
}
console.log(sum(10, 11));

//Activity 4: Default parameters

//write a function that takes two perameters and retur their product,with the second parameters having a default calue of 1. Log the result of calling this function with and whithout the second parameters.
function productFinder(num1, num2 = 1) {
  return num1 * num2;
}
console.log("Product is :", productFinder(10));

//Activity 5: Enhanced Object literals

//use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {
  name: "Bittu",
  age: 21,
  address: "Delhi",
  getDetails: function () {
    return `Name is ${this.name} and age is ${this.age} and address is ${this.address}`;
  },
};
console.log(`Getdetails, ${person.getDetails()}`);

//create an object with computed property names based on variables and log the object to the console.
let propName1 = "name";
let propName2 = "age";
let propName3 = "address";

let person1 = {
  [propName1]: "Bittu",
  [propName2]: "21",
  [propName3]: "Delhi",
};
console.log(person1);


//Output :
        // Personal name is Bittu and age is 21
        // This is a multi line string
        // created using template literals

        // First element of fruits collection is apple
        // Second element of fruits collection is banana
        // The Great Gatsby
        // F. Scott Fitzgerald
        // 1991
        // [ 100, 2, 3, 4, 10, 20 ]
        // [ 1, 2, 3, 4 ]
        // 21
        // Product is : 10
        // Getdetails, Name is Bittu and age is 21 and address is Delhi
        // { name: 'Bittu', age: '21', address: 'Delhi' }


```

<h2 align="center">Day 09 : DOM Manipulation</h2>

<h4> HTML  Code</h4>

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Manipulation</title>
  </head>
  <body>
    <h1 id="heading">Hello,world</h1>
    <h1 class="backChangeElement">Please change my backeground</h1>
    <ul id="ulElement"></ul>
    <h1 id="addClass">Add and Remove classlist from this element</h1>

    <h1 id="changer">For change my content click on click me button</h1>
    <button >Click me</button>
<div style="padding: 5px;border: 1px solid black ; margin: 10px;" id="hoveMe">Hover on me</div>
    <img
      src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      width="100%"
      alt=""
      id="image"
    />
  </body>
</html>
<script src="./index.js"></script>

```

<h4>Output of HTML :</h4>
<img src="https://github.com/B2Kumar03/project2Image/blob/main/image.png?raw=true" alt="Alt text" />

<h4> JavaScript  Code :</h4>

```
//Activity 1 :Selection and Manipulation Elements

//Selct an HTML eleent by its id and change its text
const heading=document.getElementById("heading")
heading.innerText="Hello,india"

//Select an HTML element by its class and change its class and change its background color
const backgroundChanger=document.getElementsByClassName("backChangeElement")
backgroundChanger[0].style.backgroundColor="red"


//Activity 2:Creating and Appending Elements


//create a new div element with some text content and append it to the body
const newDiv=document.createElement("div")
newDiv.innerText="I am a div element"
newDiv.id="divElemnt"
const body=document.body
body.append(newDiv)

//create a new li element adn add it to an existing ul list
const existingUl=document.getElementById("ulElement")
const newLi=document.createElement("li")
newLi.innerText="Home"
existingUl.appendChild(newLi)
const newLi1=document.createElement("li")
newLi1.innerText="About"
existingUl.appendChild(newLi1)

//Activity 3:Removing element


//Select an HTML element and remove it from the DOM
const removingElement=document.getElementById("divElemnt")
removingElement.remove()

//remove the last child ofa specific HTML element
const removingLastChild=document.getElementById("ulElement")
removingLastChild.removeChild(removingLastChild.lastChild)


//Activity 4:Modifying Attributes and classes


//select and HTML element and change one of its attributes(eg.,src of an image)
const image=document.getElementById("image")
image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&s"


//Add and remove CSS class to/form an HTML element.
const addClass=document.getElementById("addClass")
addClass.classList.add("addClassElement")
addClass.classList.remove("addClassElement")


//Activity 5:Event Handling


//Add a click event listener to a button that changes the test content of a paragraph
const button=document.getElementsByTagName("button")
const paragraph=document.getElementById("changer")
console.log(button);
button[0].addEventListener("click",()=>{
    paragraph.innerText="I changed Thank you !"
})

//Add a mouse event listener to and element that change its border color
const mouse=document.getElementById("hoveMe")
mouse.addEventListener("mouseover",()=>{
    mouse.style.border="2px solid red"
    })






```
<h2 align="center">Day 10 : Event handling</h2>

HTML Code :
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event handling</title>
  </head>
  <body>
    <p id="para">Frontend developer</p>
    <button onclick="changeParaContent()" id="btn">
      Change the Paragraph content
    </button>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s"
      alt="natureImage"
      id="image"
      width="300"
      height="200"
      style="border-radius: 5px"
    />

    <h3
      style="
        background-color: green;
        width: 200px;
        height: 100px;
        padding: 10px;
        color: white;
        border-radius: 5px;
      "
      id="heading"
    >
      Hover on me to change the my background color
    </h3>
    <input type="text" id="keyDown" />
    <input type="text" id="input" />

    <ul id="list" style="display: flex;flex-direction: column;justify-content:space-evenly;height: 200px;text-decoration: none;">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
      <li>Item 6</li>
      <li>Item 7</li>
      <li>Item 8</li>
      <li>Item 9</li>
      <li>Item 10</li>
    </ul>
    <div id="parent">
      <h3>Old child</h3>
    </div>
    <button id="addEvent">Add new child</button>
  </body>
</html>
<script src="./index.js"></script>
```

Javascript Code :

```
//Activity 1:Basic event Handling

//Add a click event listener to a button that changes the text content of a paragraph.
const paragraph = document.getElementById("para");
function changeParaContent() {
  paragraph.textContent = "Full stack developer";
}

//Add a double-click event listener to an image that toggle its visibility
const img = document.getElementById("image");
img.addEventListener("dblclick", () => {
  img.style.display = "none";
});

//Activity 2:Mouse Events

//Add a mouseover event listener to an element that changes its background color
const backgroundChanger = document.getElementById("heading");

backgroundChanger.addEventListener("mouseover", () => {
  backgroundChanger.style.backgroundColor = "black";
});
//Add a mouseout event listener to an element that reset its background color
backgroundChanger.addEventListener("mouseout", () => {
  backgroundChanger.style.backgroundColor = "green";
});

//Activity 3:Keybord Events

//Add a keydown event listener to an element that logs the key pressed to the console
const keyDown = document.getElementById("keyDown");
keyDown.addEventListener("keydown", (e) => {
  console.log(e.key);
});

//Add a keyup event listner to an input field that displays the current values in a paragraph
const input = document.getElementById("input");
const para = document.getElementById("para");
input.addEventListener("keyup", (e) => {
  para.textContent = e.target.value;
});

//Acitvity 5:Event Delegation

//Add a click event listener to a list that logs the text content of the clicked list item using event delegation
const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

//Add an event listener to a parent element that listens for events from dynamicaly added child elements
const button = document.getElementById("addEvent");
const parent=document.getElementById("parent")

button.addEventListener("click", (e) => {
    const h3=document.createElement("h3")
    h3.innerText=`New child`
    parent.appendChild(h3)
});
```
