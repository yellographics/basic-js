const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newArray = [...names];
  
  let unique = new Set(names);
  
  //console.log(unique);
  
  for (let item of unique){
    let k = 0;
    for (let i = 0; i < newArray.length; i++){      
      if(newArray[i] === item){
        if(k !== 0){
          newArray[i] = `${newArray[i]}(${k})`;
        }  
        k++;
      }      
    }
    
  }
  
  console.log(newArray);
  return newArray;
}

module.exports = {
  renameFiles
};
