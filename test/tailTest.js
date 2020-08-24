const tail = require('../tail');
const { assert } = require('chai');

describe("#tail", () => {
  it("should return [2, 3, 4] when passed [1, 2, 3, 4]", () => {
    assert.deepEqual([2, 3, 4], tail([1, 2, 3 , 4]));
  });
});