/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let arrForNull = new Array(matrix[0].length).fill(0);
  matrix.forEach((item) => {
    const arrForNullItem = new Array(item.length).fill(0);
    item.forEach((el, index) => {
      if (el === 0) arrForNullItem[index] = 1;
      if (arrForNull[index] !== 1) result += el;
    });
    arrForNull = arrForNullItem;
  });
  return result;
}

module.exports = getMatrixElementsSum;
