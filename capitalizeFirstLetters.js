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

// Check that capitalizeFirstLetters is a function
strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms javaScript correctly
strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// Check that it works for a 1-character string
strictEqual(capitalizeFirstLetters('x'), 'X');

// Check that it works for an empty string
strictEqual(capitalizeFirstLetters(''), '');
