const assertEqual = require("../assertEqual");
const tail = require("../tail.js");
// Test case
const words = ["Yo Yo","Lighthouse","Labs"];
const answer = tail(words); // tail function removes the first element in the array giving output of the second and third element.

//Apply the assertEqual function to check the actual and the expected
assertEqual(answer[0], "Lighthouse");
assertEqual(answer[1], "Labs");
assertEqual(words.length, 3);
assertEqual(tail(["test"]).length, 0); // tail of array with one element only should be empty
assertEqual(tail([]).length, 0);
assertEqual(answer.length, words.length - 1);
