const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i += 1) {
    result.push([]);
    for (let j = 0; j < cols; j += 1) {
      let count = 0;
      for (let k = -1; k <= 1; k += 1) {
        for (let l = -1; l <= 1; l += 1)  {
          if (
            i + k >= 0 &&
            i + k < rows &&
            j + l >= 0 &&
            j + l < cols &&
            !(k === 0 && l === 0) &&
            matrix[i + k][j + l]
            ) {
              count++;
          }
        }
      }
      result[i].push(count);
    }
  }
  return result;
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
