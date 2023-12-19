const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const validArr = arr.filter(num => num !== -1);
  let index = 0;

  validArr.sort((a, b) => a- b);
  return arr.map(num => {
    if (num === -1) {
      return num;
    } else {
      return validArr[index++];
    }
  });
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
