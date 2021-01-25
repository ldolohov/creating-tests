import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Function doesnt work properly');
}

if (capitalize('') !== '') {
  throw new Error ('Function doesnt work properly');
}

console.log('All tests passed');
