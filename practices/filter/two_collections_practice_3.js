'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter((num) => collection_b.filter(n => num % n === 0).length > 0);
}

module.exports = choose_divisible_integer;
