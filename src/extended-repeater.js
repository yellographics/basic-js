const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'}) {
  if(typeof str === 'object'){
    str = `${str}`;
  } else if (typeof str === 'null'){
    str = 'null';
  } else str = str.toString(); 

  let additionString = [];
  if(addition !== undefined){
    if (typeof addition === 'object'){
      addition = `${addition}`;
    } else addition = addition.toString();
    if (additionRepeatTimes === undefined){
      additionRepeatTimes = 1;
    }
          
      for (let i = 1; i <= additionRepeatTimes; i++){        
        if (i !== additionRepeatTimes){          
          additionString.push(`${addition}${additionSeparator}`);
        } else {additionString.push(addition)};
      }
      
      additionString = additionString.join('');
      
    
  } 
  let finalString = [str];

  if (repeatTimes === undefined){
    repeatTimes = 1;
  }
  
  if(repeatTimes >= 1){    
    finalString = [];
    for (let i = 0; i < repeatTimes; i++){
      finalString.push(str);      
    }    
  }
  
  for (let i = 0; i < finalString.length; i++){
      if(additionString.length > 0){
        finalString[i] += additionString;
      }
      if(i !== finalString.length - 1){
        finalString[i] = `${finalString[i]}${separator}`;
      }
    }
  
     
  finalString = finalString.join('');
  console.log(finalString);
  return finalString;
}

module.exports = {
  repeater
};
