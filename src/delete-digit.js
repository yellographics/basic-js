const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // переводим число в строку и делаем из нее массив
  const numberArray = String(n).split('');  

  // создаем массив, в который будем запихивать массивы строк
  const array = [];

  // заводим цикл для сплайса, внутри добавляем временный массив
  for (let i = 0; i < numberArray.length; i++){
    let tempArray = [...numberArray];
    tempArray.splice(i, 1);
    console.log(tempArray)
    array.push(tempArray);
  }

  for (let i = 0; i < array.length; i++){
    array[i] = Number(array[i].join(''));
  }
  
  
  return Math.max(...array);

}

module.exports = {
  deleteDigit
};
