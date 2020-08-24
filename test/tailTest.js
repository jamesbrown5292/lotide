const assertEqual = require('../assertEqual');
const tail = require('../tail')
//test cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3); // original array should still have 3 elements!

//array with one element should yield an empty array
const tests1 = ["word"];
console.log(tail(tests1));

//An empty array should yield an empty array for its tail
const tests2 = [];
console.log(tail(tests2));