import {strict as assert} from 'assert';
import capitalize from '../src/capitalize.js';

assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'), 'Hello');

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Function doesnt work properly');
// }
//
// if (capitalize('') !== '') {
//   throw new Error ('Function doesnt work properly');
// }

console.log('All tests passed');
