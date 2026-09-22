// Question 9 — Find the Most Frequent Element
// Write a JavaScript program that finds the element occurring maximum number of times in an array. If two or more elements have the same highest frequency, return the element that appears first in the array.
let arr = [4,2,4,3,2,4,5,2];
let frequency = {};
let maxCount = 0;
let mostFrequent = arr[0];

// Count frequency of each element
for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
        frequency[arr[i]]++;
    } else {
        frequency[arr[i]] = 1;
    }
}

// Find the most frequent element
for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]] > maxCount) {
        maxCount = frequency[arr[i]];
        mostFrequent = arr[i];
    }
}

console.log("Most frequent element:", mostFrequent);
console.log("Frequency:", maxCount);
