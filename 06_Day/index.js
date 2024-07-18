//Activity 1: Array creation and access

//create an array 1 to 5 and log the array to the console
var arr = [1, 2, 3, 4, 5];
console.log(arr);

//access the first and last element of the array and log them ti the console.
console.log(arr[0]);
console.log(arr[4]);

//Activity 2 : Array methods

//use the push method to add the new element at last and log the updated value
arr.push(6);
console.log(arr);

//use the pop method to remove the last element and log the updated value
arr.pop();
console.log(arr);

//use the shift method to remove the first element from the array and log the updated array
arr.shift();
console.log(arr);

//use the 'unshift' method to add a new number to the beginning of the array and log the updated array
arr.unshift(0);
console.log(arr);

//Activity 3 : Array Methods(Intermediate)

//use the 'mp' method to create new array where each number is doubled and log the new array.
var arr2 = [1, 2, 3, 4, 5];
var arr3 = arr2.map(function (x) {
  return x * 2;
});
console.log(arr3);

//use the 'filter' method to create new array with only even numbers and log the new array
var arr4 = arr2.filter(function (x) {
  return x % 2 == 0;
});
console.log(arr4);

//use the 'reduce' method to calculate the sum of all numbers in the array and log the result
var result = arr4.reduce((ele, acc) => ele + acc, 0);
console.log(result);

//Activity 4:Array Iteration

//use a for loop to iterate over the array and log each element to the console
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//use a "forEach" loop to iterate over the array and log each element to the console
arr.forEach(function (x) {
  console.log(x);
});

//Activity 5:Multi-diamensional Arrays

//create a two-diamensional array (matrix) and log the entire array to the console
var arr5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr5);

//Access and log a specific element from the two-diamensional array
console.log(arr5[1][1]);
