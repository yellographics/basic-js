const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let letters = email.split('');
  console.log(letters.length);
  let domain = [];
  for (let i = (letters.length - 1); i >= 0; i--){    
    if (email[i] !== '@'){
      domain.unshift(email[i]);
    } else break;
  }
  
  domain = domain.join('');
  
  return domain;
}

module.exports = {
  getEmailDomain
};
