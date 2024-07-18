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

