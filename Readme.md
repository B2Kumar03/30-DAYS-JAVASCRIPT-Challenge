# 
<h1 align="center">30-DAYS-JAVASCRIPT-Challenge</h1>

----

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