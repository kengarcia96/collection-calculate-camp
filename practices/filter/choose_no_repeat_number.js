'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((num,index) => collection.indexOf(num) === index);
}

module.exports = choose_no_repeat_number;
