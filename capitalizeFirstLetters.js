// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

function capitalizeFirstLetters(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        if (i === 0) {
            output += input[0].toUpperCase();
        } else if (i > 0) { 
            if (input[i-1] === ' ') { 
                output += input[i].toUpperCase();
            } else if (input[i-1] !== ' ') { 
                output += input[i];
            }
        }
    }
    return output;
};

// Check c'est bien une fonction
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check que la fonction accepte un seul argument 
assert.strictEqual(capitalizeFirstLetters.length, 1);

// check que la fonction transforme bien la chaine de caractère avec plusieurs mots
assert.strictEqual(capitalizeFirstLetters('je suis un test'), 'Je Suis Un Test');

// check que la fonction transforme bien la chaine de caractère avec un seul mot
assert.strictEqual(capitalizeFirstLetters('test'), 'Test');

// check que la fonction marche pour une chaine de caractère d'un seul caractère
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// check que la fonction marche pour une chaine de caractère vide
assert.strictEqual(capitalizeFirstLetters(''), '');

//check que la function marche avec une chaine de caractère vide 
assert.strictEqual(capitalizeFirstLetters(''), '');
