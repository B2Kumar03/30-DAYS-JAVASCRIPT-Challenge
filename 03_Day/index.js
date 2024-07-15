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
        // 2024 is leapYear : true //