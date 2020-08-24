const eqArrays = require('../eqArrays');
console.log(eqArrays([ [2, 3], [4] ], [ [2, 3], [4]  ])); // => true
console.log(eqArrays(   [[2, 3], [4]]  , [[2, 3], [4, 5]]   )); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false