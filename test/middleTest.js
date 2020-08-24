const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const { assert } = require("chai");
//test cases
/*assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
assertArraysEqual(middle([1, 8]), []);
assertArraysEqual(middle([1, 2, 3,]), [2]);
assertArraysEqual(middle([1]), []);*/
describe("#middle", () => {
  it("should return 1 when passed [4, 1, 4]", () => {
    assert.strictEqual(1, middle([4, 1, 4]))
  })
})