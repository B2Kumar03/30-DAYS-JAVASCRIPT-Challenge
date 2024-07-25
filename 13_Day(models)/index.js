
//Activity 1:Creating and Exporting Modules



//Create a module that exports a function to add two numbers.Import and use this module in another script.
import {addition} from "./module1.js";
console.log(addition(2, 3));


//Create a module that exports an object representing a person with peoperties and methods import and use this module in another script
import {person} from "./module2.js";
console.log("person.name");


//Activity 2:named and default exports


//Create a module that exports multiple functions using named exports.Import and use these function in another script.

import {sum, sub} from "./module3.js";
console.log(sum(2, 3));
console.log(sub(2, 3));

//Create a module that exports a single function using default export.Import and use this function in another script
import sum from "./module4.js";
console.log(sum(2, 3));


//Activity 3:Importing Entire Modules


//Create a module that exports multiple constant and functions.Import the entire modules as an object in another script and use its properties
import * as module5 from "./module5.js";
console.log(module5.PI)
console.log(module5.add(2, 3));
//etc...

//Activity 4:Using Third-Party modules.


//intall a third-party module (eg.,lodas) using npm.Import and user a function from this module in s script.
import {load} from "lodash";
console.log(load("https://www.google.com"));

//intall a third-party module (eg.,axios) using npm.Import and user a function from this module in s script.
import axios from "axios";
console.log(axios.get("https://www.google.com"));

//Activity 5:Module Building(Optional)


//Use a module bundler like Webpack or Parcel to buldle multiple javascript files imto a single file.Write a script to demonstrate the building process

// npm install --save-dev webpack webpack-cli

export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}


import * as math from './module1.js';

console.log(`PI: ${math.PI}`);
console.log(`E: ${math.E}`);
console.log(`Addition (2 + 3): ${math.add(2, 3)}`);
console.log(`Subtraction (5 - 2): ${math.subtract(5, 2)}`);
console.log(`Multiplication (4 * 3): ${math.multiply(4, 3)}`);
console.log(`Division (10 / 2): ${math.divide(10, 2)}`);



const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};






