'use strict';

function collect_last_element(collection) {
  return collection.reduce(n => n = collection[collection.length-1]);
}

module.exports = collect_last_element;
