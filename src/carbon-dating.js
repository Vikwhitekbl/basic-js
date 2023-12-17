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
  const newSampleActivity = parseFloat(sampleActivity);
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }

  if (Number.isNaN(newSampleActivity) || newSampleActivity <= 0 || newSampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  const archeologicalAge = Math.ceil((Math.log(MODERN_ACTIVITY / newSampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
  return archeologicalAge;
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
