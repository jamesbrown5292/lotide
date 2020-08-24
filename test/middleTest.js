const middle = require("../middle");
const { assert } = require("chai");
describe("#middle", () => {
  it("should return 1 when passed [4, 1, 4]", () => {
    assert.strictEqual(1, middle([4, 1, 4]));
  });
});