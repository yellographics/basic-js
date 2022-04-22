const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(!arguments.length || (typeof sampleActivity !== 'string')){
    return false;
  }

  const sampleActivityNumber = parseFloat(sampleActivity);

  if(isNaN(sampleActivityNumber) || sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY){
    return false;
  }

  const LOG2 = 0.693;
  const RATE = LOG2 / HALF_LIFE_PERIOD;

  const years = (Math.log(MODERN_ACTIVITY / sampleActivityNumber)) / RATE;

  return Math.ceil(years);

}

module.exports = {
  dateSample
};