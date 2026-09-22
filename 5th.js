// Question 6 — Find the Missing Number An array contains n distinct numbers from 1 to n + 1, but exactly one number is missing. 
// Write a JavaScript program to find the missing number

let arr = [4,2,4,5,2,7,5,8];

let n = arr.length + 1;

// Sum of numbers from 1 to n
let total = n * (n + 1) / 2;

// Sum of elements in the array
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

// Missing number
let missing = total - sum;

console.log("Missing number:", missing);
