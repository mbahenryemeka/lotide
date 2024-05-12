const assertArraysEqual = require("../assertArraysEqual.js");
const middle = require("../middle.js");


assertArraysEqual(middle([1]), [2,3]); // Should fail
assertArraysEqual(middle([1, 2]), []); // Should pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [5]); // Should fail
assertArraysEqual(middle([1, 2, 3, 4]), [2, "string"]); // Should fail
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should pass
