const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(array) {
  if(array.length === 0){
    return {};
  }
  let obj = {};
  
  for(let i = 0; i < array.length; i++){
    array[i] = array[i].split('.').reverse();
  }
  
  let keys = [];
  
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      keys.push(array[i].slice(0, j+1));
    }
  }
    
  for (let i = 0; i < keys.length; i++){
    for (let j = 0; j < keys[i].length; j++){
      keys[i][j] = '.' + keys[i][j];
    }   
    keys[i] = keys[i].join("");
  }
  
  let unique = new Set(keys);
  
  for (const entry of unique){
    let count = keys.filter(elem => elem === entry);
    obj[`${entry}`] = count.length;
  }
  
  
  return obj; 
}

module.exports = {
  getDNSStats
};
