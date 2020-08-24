# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jamesbrown5292/lotide`

**Require it:**

`const _ = require('@jamesbrown5292/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: asserts a confirmation or error message depending on if two arrays are equal or not.
* `assertEqual(...)`: returns a confirmatory message verifying that two arguments are equal or a fail message if they are not.
* `assertObjectsEqual(...)`: asserts a confirmation or error message depending on if two objects are equal or not.
* `countLetters(...)`: takes a string and returns an object where the keys are the letters that appear and the string and the values are counts of each letter.
* `countOnly(...)`: takes a collection of items and return counts for a specific subset of those items. The user must pass in an object with values to count as properties and a true or false for if the user wants the property to be counted.
* `eqArrays(...)`: allows the user to verify that two arrays are equal.
* `eqObjects(...)`: allows the user to verify that two objects are equal.
* `findKey(...)`: takes in an object and a callback and scans the object, returning the first key for which the callback returns a truthy value. 
* `findKeyByValue(...)`: takes in an object and a value and scans the object, returning the first key which contains the given value.
* `flatten(...)`: takes in a multidimensional array and returns a one dimensional array.
* `head(...)`: returns the first item in an array.
* `letterPositions(...)`: takes in a string and returns an object showing the indices of each letter that appears in the string.
* `map(...)`: takes an array and a callback function and performs the callback on every item in the array.
* `middle(...)`: returns the middle item in an array of odd length, returns the middle two items in an array of even length.
* `tail(...)`: returns an array minus the head value.
* `takeUntil(...)`: collects items from a provided array until a provided callback function returns a truthy value. Returns an array of collected items.
* `without(...)`: returns a subset of a given array, removing unwanted elements passed in as items on an 'items to remove' array.