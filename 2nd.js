// Question 2 — Move All Zeros to the End 
// Write a JavaScript program that moves all 0 values to the end of an array while maintaining the relative order of all non-zero elements.
let arr = [0, 5, 0, 3, 8, 2];

let result = [];
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        result.push(arr[i]);
    } else {
        zeroCount++;
    }
}

// Add zeros at the end
for (let i = 0; i < zeroCount; i++) {
    result.push(0);
}

console.log(result);