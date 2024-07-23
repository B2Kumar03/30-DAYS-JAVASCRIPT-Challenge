//Activity 1 :Understanding Promises

//Create a promise that resolves with a message after a 2 second timeout and log the message to the console
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});
promise1.then((res) => console.log(res)).catch((err) => console.log(err));

//create a promise that rejects with an error message after a 2 second timeout handle the error using `.catch()`
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 rejected");
  }, 2000);
});
promise2.then((res) => console.log(res)).catch((err) => console.log(err));

//Activity 2:Chaining Promises

//Create a sequence of promoses that simulate fetcing data from a server.Chain the promises to log message in a specific order
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  });

//Activity 3:Using Async/Await

//Write an async function that aits for a promise to resolve and then logs the resolved value

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 4 resolved");
  }, 2000);
});
async function promiseSolver() {
  const result = await promise4;
  console.log(result);
}
promiseSolver();

//Write an async function that handles a rejected promise using try-catch and logs the error message.
async function asyncHendler() {
  try {
    const result = promise2();
    console.log(result);
  } catch (error) {
    console.log("Error occur in asyncHendler");
  }
}
asyncHendler();

//Activity 4:Fetching Data from an API

//Write an async function that fetches data from an API and logs the data to the console.
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  });

//Use the 'fetch' API to get data from a publuc API and log the response data to the console using async await
async function fetchData() {
  try {
    const data = await fetch("http://fakestoreapi.com/products");
    const dataJson = await data.json();
    console.log(dataJson);
  } catch (error) {
    console.log(error);
  }
}

//Activity 5:Concurrent Promises

//Use 'Promise.all' to write for multiple promises to resolve and log all theoir value
Promise.all([promise1, promise2, promise3, promise4])
  .then((values) => console.log(values))
  .catch((error) => console.log(error));

//Use `Promise.race` to log the value of the first promise that resolves among multiplle promise
Promise.race([promise1, promise2, promise3, promise4])
  .then((values) => console.log(values))
  .catch((error) => console.log(error));
