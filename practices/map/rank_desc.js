'use strict';
var rank_desc = function(collection){
  return collection.map(n => n).sort((a, b) => a - b);
};

module.exports = rank_desc;
