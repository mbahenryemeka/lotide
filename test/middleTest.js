const assert = require('chai').assert;
const middle = require("../middle.js");

describe("#middle", () => {
  it('return [2] for [1,2,3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
});



