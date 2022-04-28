const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let firstString = s1.split('');
  const secondString = s2.split('');
  
  let repeats = 0;
  
  for (let item of firstString){
    let countFirst = firstString.filter(elem => elem === item);
    let countSecond = secondString.filter(elem => elem === item);
    let minCount = Math.min(countFirst.length, countSecond.length);
    if (minCount > 0) {
      repeats += minCount;
    }
    firstString = firstString.filter(elem => elem !== item);
  }
  
  
  console.log(repeats);
  return repeats;
}

module.exports = {
  getCommonCharacterCount
};
