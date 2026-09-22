// Question 3 — Longest Word in a Sentence 
// Write a JavaScript program that takes a sentence and finds the longest word in it. If multiple words have the same maximum length, print the first one.
let sentence = "JavaScript is a powerful programming language";

let words = sentence.split(" ");
let longestWord = "";

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

console.log("Longest word:", longestWord);