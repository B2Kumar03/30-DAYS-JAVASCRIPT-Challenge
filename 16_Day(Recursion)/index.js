//Activity 1:Basic Recursion

const { log } = require("console");

//Write recursive function to calculate the factorial of a number .Log the result for a few test case.
function factorial(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(10)); //Output: 3628800

//Write a recursive function calculate the nth fibonacci number.Log the result for a few test case.
function fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(24)); // Output: 46368
console.log(fibonacci(25)); // Output: 75025

//Activity 2:Recursion with Arrays

//Write a recursive function to find the sum of all elements in an array.Log the result for few test cases.
function sumArray(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4, 5, 6])); //

//Write a recursive function to find the maximum element in array log the resukt for a few test cases.
function maxElement(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  let max = Math.max(arr[0], maxElement(arr.slice(1)));
  return max;
}
console.log(maxElement([1, 2, 3, 4, 5]));

//Activity 3 :String Manipulation with Recursion

//Write a recursive function to reverse a string.Log the result for few test cases
function reverseString(str) {
  if (str.length == 0) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("Hello World")); // Output: "dlroW olleH"
console.log(reverseString("Python")); // Output: "nohtyP"

//Write a recursive function to check if a string is a palindrome.Log the result for a few test cases
function isPalindrome(str) {
  if (str.length == 0 || str.length == 1) {
    return true;
  }
  if (str[0] != str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, str.length - 1));
}
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//Activity 4:Recursive Search

//Write a recursive function perform a binary search on a sorted array .Log the index of the target element for few test cases
function binarySearch(arr, target) {
  if (arr.length == 0) {
    return -1;
  }
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] == target) {
    return mid;
  }
  if (arr[mid] < target) {
    return binarySearch(arr.slice(mid + 1), target);
  }
  return binarySearch(arr.slice(0, mid), target);
}
console.log(binarySearch([6, 7, 8, 9, 10], 5));
console.log(binarySearch([6, 7, 8, 9, 10], 6));

//Write a recursive function to count the occurences of a target element in an array.Log the result for a few test cases.
function countOccurrences(arr, target) {
  if (arr.length == 0) {
    return 0;
  }
  if (arr[0] == target) {
    return 1 + countOccurrences(arr.slice(1), target);
  }

  return countOccurrences(arr.slice(1), target);
}
console.log(countOccurrences([1, 2, 5, 4, 5, 5, 6], 5));

//Activity 5:Tree Traversal(Optional)

//Write a recursive function to perform an in-order traversal of a binary tree.Log the nodes as they are visited
function InOrderTraversal(root) {
  if (root == null) {
    return;
  }
  InOrderTraversal(root.left);
  console.log(root.val);
  InOrderTraversal(root.right);
}

//Write a recursive function to calculate the depth of binary tree .Log the result for few test cases.
function calculateDepth(root) {
  if (root == null) {
    return 0;
  }
  let leftDepth = calculateDepth(root.left);
  let rightDepth = calculateDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}
