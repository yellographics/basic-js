const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !Array.isArray(members)){
    return false;
  }

  // array without wrong types
  let stringMembers = [];
  members.forEach(elem => {
    if (typeof elem === 'string'){
      stringMembers.push(elem);
    }
  })

  // create array of letters
  let lettersArray = [];
  stringMembers.forEach(elem => {
    for (let i = 0; i < elem.length; i++){
      if (elem[i] !== ' '){
        lettersArray.push(elem[i].toUpperCase());
        break;
      }
    }
  })

  //sort array of letters
  lettersArray.sort();

  // join into string

 return lettersArray.join('');

}

module.exports = {
  createDreamTeam
};
