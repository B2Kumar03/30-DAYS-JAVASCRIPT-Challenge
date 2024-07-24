//Activity 1 :Basic Error Handling with `Try-catch`

//Write a function that intentionally throws an error and use 'try-cath' block to handle the error and log an appropriate message to the console.
function throwErrorFunction() {
  throw new Error("This is an intentional error");
}
try {
  throwErrorFunction();
} catch (error) {
  console.error("An error occurred: " + error.message);
}

//Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this eror
function divideFunction(num1, num2) {
  if (num2 === 0) {
    throw new Error("Denominator cannot be zero");
  }
  return num1 / num2;
}
try {
  divideFunction(10, 0);
} catch (error) {
  console.log("Error message :", error.message);
}

//Activity 2:Finally Block

//Write a script that includes a try-catch block a finally block.Log message in the try,catch,and finally blocks to observe the execution flow.
function executeWithTryCatchFinally() {
  console.log("Script started.");

  try {
    console.log("Inside try block.");
    undefinedFunction();
    console.log("This line will not be executed.");
  } catch (error) {
    console.log("Inside catch block.");
    console.log("An error occurred: " + error.message);
  } finally {
    console.log("Inside finally block.");
  }

  console.log("Script ended.");
}
// Execute the function
executeWithTryCatchFinally();

//Activity 3:Custom Error Objects

//Create a custom error class that extends the built-in errorclass.Throw an instance of this custom error in a function and handle it using a try-catch block.
// Define the custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

function riskyFunction() {
  throw new CustomError("Something went wrong in riskyFunction!");
}

try {
  riskyFunction();
} catch (error) {
  if (error instanceof CustomError) {
    console.error(`CustomError caught: ${error.message}`);
  } else {
    console.error(`An unexpected error occurred: ${error.message}`);
  }
}

//Write a function that validates user input (eg.,checking if a string is not empty) and throws a custom error if the validation fails.Handle the custom error using a tru-catch blobk
// Define the custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

function validateInput(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new ValidationError("Input must be a non-empty string.");
  }
  return true;
}
try {
  const userInput = "";
  validateInput(userInput);
  console.log("Input is valid.");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`ValidationError caught: ${error.message}`);
  } else {
    console.error(`An unexpected error occurred: ${error.message}`);
  }
}

//Activity 4:Error Handling in Promises

//create a promise that randomly resolves or rejects .Use `.catch()` to handle the rejection and log an appropriate message to the console.
const promise = new Promise((resolve, reject) => {
  const randomNum = Math.random();
  if (randomNum < 0.5) {
    console.log(randomNum);
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});
promise
  .then((message) => console.log(message))
  .catch((message) => console.log(message));

//Use try-catch within an async function to handle errors from a ppromise that randomly resolves or rejects, and log the error message

async function handlePromise() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
handlePromise();

//Activity 5:Graceful Error Handling in Fetch

//Use the `fetch` API to request data from invalid URL and handle the error using `.catch()` .Log an appropriate error message to the console.
fetch("https://example.com/invalid-url")
  .then((response) => response.json())
  .catch((error) => console.log(error.message));

//Use the `fetch` API to request data from an invalid URL within an async function and handle the error using try-catch.Log an appropriate error messag.
async function handleFetch() {
  try {
    const response = await fetch("https://example.com/invalid-url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
