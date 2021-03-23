// capitalizeFirst.js
import { strictEqual } from 'assert';

// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetters(string) {
  let convertedArray = [];

  string.split(' ').forEach((word) => {
    convertedArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  
  return convertedArray.join(' ');
}

module.exports = capitalizeFirst;
