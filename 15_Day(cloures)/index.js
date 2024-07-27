//Activity 1:Understanding Closures

//write a function that returns another function,where the inner function accesses a variable from the outer functions scope.Call the inner function and log the result
function outerFunction() {
  let outerVariable = "Hello, World!";
  return function innerFunction() {
    console.log(outerVariable);
  };
}
const result = outerFunction();
result();

//create a closure that maintains a private counter.Implement function to increment and get the current value of the counter
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count += 1;
    },
    getCount: function () {
      return count;
    },
  };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

//Activity 3:Prectical Closures

//write a function that generate unique Ids.Use a closure to keep track of the last generated ID and increment it with each call
function createUniqueIdGenerator() {
  let lastId = 0;
  return function () {
    lastId += 1;
    return lastId;
  };
}
const generateUniqueId = createUniqueIdGenerator();
console.log(generateUniqueId()); // 1
console.log(generateUniqueId()); // 2
console.log(generateUniqueId()); // 3

//create a closure that captures a user name and returns a function that greets the user by name
function createGreetingFunction(userName) {
  return function () {
    console.log(`Hello, ${userName}!`);
  };
}
const greetJohn = createGreetingFunction("John");
greetJohn();
const greetBittu = createGreetingFunction("Bittu");
greetBittu();

//Activity 3:Closures in Loops

//Write a loop that create an array of function .Each function should log its index when called.Use a closure to ensure each function logs the correct index.
function createFunctions() {
  const functions = [];
  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log(i);
    });
  }
  return functions;
}
createFunctions()[0]();

//Activity 4:Module pattern

//Use closures to create a simple module for managing a collection of items implement methods to add,remove,and list items
function createModule() {
  const items = [];
  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    listItems: function () {
      console.log(items);
    },
  };
}
// Usage
const module1 = createModule();
module1.addItem("Item 1");
module1.addItem("Item 2");
module1.listItems();
module1.removeItem("Item 1");
module1.listItems();

//Activity 7:Memoization

//write a function that memoizes the results of another function.Use a closure to store the results of previous computations
function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] === undefined) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
}
// Usage
function add(a, b) {
  return a + b;
}
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3

//Create a memoized version of a function that calculates the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
function memoizedFactorial(n, cache = {}) {
  if (cache[n] !== undefined) {
    return cache[n];
  } else {
    const result = n * memoizedFactorial(n - 1, cache);
    cache[n] = result;//
    return result;
  }
}
console.log(memoizedFactorial(5)); // Output: 120
