'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(n => collection_b.includes (n % 2 === 0));
}

module.exports = choose_divisible_integer;
