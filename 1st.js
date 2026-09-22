
// let arr = [10, 5, Question 1 — Second Largest Distinct Element.
//  Write a JavaScript program that takes an array of integers and finds the second largest distinct element without using sort().8, 10, 3];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }
    else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

if (secondLargest === -Infinity) {
    console.log("No second largest distinct element");
} else {
    console.log("Second largest element:", secondLargest);
}