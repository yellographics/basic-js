const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {  
  if(!Array.isArray(arr)){
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }  

  const newArray = [...arr]; 
  const result = [];

  for (let i = 0; i < arr.length; i++){
    if (newArray[i] === '--discard-prev'){
      if((i-1 >= 0) && newArray[i-2] !== '--discard-next'){
        result.pop();
      }
    } else if (newArray[i] === '--discard-next'){
      if(i+1 < newArray.length){
        i++;      
      }
    } else if (newArray[i] === '--double-prev'){
      if ((i-1 >= 0) && newArray[i-2] !== '--discard-next'){
        result.push(newArray[i-1]);
      }
    } else if (newArray[i] === '--double-next'){
      if(i+1 < newArray.length){
        result.push(newArray[i+1]);
      }
    } else result.push(newArray[i]);
  }
  
  return result;

}

module.exports = {
  transform
};

