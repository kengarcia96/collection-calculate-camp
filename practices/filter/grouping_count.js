'use strict';

function grouping_count(collection) {

  let getUnique = collection.filter((num, index, self) => self.indexOf(num) === index);
  let result={};
  for (let i = 0; i < getUnique.length; i++) {
      result[getUnique[i]] = collection.filter(b => b === getUnique[i]).length;
  }
  return result;
}

module.exports = grouping_count;
