const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays.js");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([4,5,6], [4,5,6]), true);
assertEqual(eqArrays([],[], true));