const assert = require('chai').assert;
const tail = require("../tail.js");

describe("#tail", () => {
  it('return ["Lighthouse","Labs"] for ["Yo Yo","Lighthouse","Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo","Lighthouse","Labs"]), ["Lighthouse","Labs"]);
  });
});


    
  
  
 