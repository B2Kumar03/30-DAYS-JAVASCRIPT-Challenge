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
