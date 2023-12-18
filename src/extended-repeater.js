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
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  let result = '';

  for (let i = 1; i <= repeatTimes; i += 1) {
    result += String(str);
    for (let j = 1; j <= additionRepeatTimes; j += 1) {
      result += addition;
      if (j !== additionRepeatTimes) {
        result += additionSeparator;
      }
    }
    if (i !== repeatTimes) {
      result += separator;
    }
  }
  return result;
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
