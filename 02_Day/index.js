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
        // NOT Operator : true