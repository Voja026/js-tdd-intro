// capitalizeFirstLetters.js
import { strictEqual } from 'assert';

// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetters(string) {
  let convertedArray = [];

  string.split(' ').forEach((word) => {
    convertedArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  
  return convertedArray.join(' ');
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
