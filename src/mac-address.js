const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let splitted = n.split('-');
  if (splitted.length !== 6){
    console.log(false);
    return false;
  }
  
  splitted = splitted.join('');
  
  
  
  const numbers = ['0', '1' , '2', '3', '4', '5', '6', '7', '8', '9'];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  for (let i = 0; i < splitted.length; i++){
    if (numbers.includes(splitted[i]) || letters.includes(splitted[i])){
      continue;      
    } else {
      console.log(false);
      return false;
    }
  }
  
  console.log(true);
  return true;
}
module.exports = {
  isMAC48Address
};
