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
  if (!Array.isArray(arr)) {
    throw new Error('arr parameter must be an instance of the Array!')
  };

  const transformedArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case '--discard-next':
        i += 1;
        break;
      case '--discard-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          transformedArray.pop();
        }
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          transformedArray.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          transformedArray.push(arr[i - 1]);
        }
        break;
      default:
        if (i > 0 && arr[i - 1] !== '--discard-next') {
          transformedArray.push(arr[i]);
        }
    }
  }
  return transformedArray.concat();
  // remove line with error and write your code here
}

module.exports = {
  transform
};
