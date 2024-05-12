const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays.js");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1,2,3], [4,5,6]), true);
assertEqual(eqArrays([],[3,5], true));