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
        // [ 100, 2, 3, 4, 10, 20 ]
        // [ 1, 2, 3, 4 ]
        // 21
        // Product is : 10
        // Getdetails, Name is Bittu and age is 21 and address is Delhi
        // { name: 'Bittu', age: '21', address: 'Delhi' }
