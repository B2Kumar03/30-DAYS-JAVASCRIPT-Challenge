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

<h2 align="center">Day 03 :Operators</h2>


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