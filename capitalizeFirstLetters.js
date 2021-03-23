    // capitalizeFirstLetters.js

const assert = require('assert');


// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(string) {
  let words = new Array();
  string.split` `.forEach(word => word.length > 0
  	?words.push(word[0].toUpperCase() + word.slice(1))
    :words.push(''))
  return words.join` `;
}


// Check that it works with several words
assert.strictEqual(capitalizeFirst("i am learning TDD"), "I Am Learning TDD")

// Check that it works with one word
assert.strictEqual(capitalizeFirst("javascript"), 'Javascript');

// Check that it works with one letter
assert.strictEqual(capitalizeFirst("m"), 'M');

// Check that it works with an empty string
assert.strictEqual(capitalizeFirst(""), "");

// Check that it works with a whitespace string
assert.strictEqual(capitalizeFirst(" "), " ");

// Check that it works with an integer
assert.strictEqual(capitalizeFirst(1), 1);
