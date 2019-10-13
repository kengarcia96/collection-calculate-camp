'use strict';
var rank_asc = function(collection){
  return collection.map(n => n).sort((a, b) => b - a);
};

module.exports = rank_asc;
