/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = n
    .toString()
    .split('')
    .map((item) => +item);
  const min = Math.min.apply(null, arrN);
  const findIndex = arrN.findIndex((item) => item === min);
  arrN.splice(findIndex, 1);
  const result = arrN.map((item) => item.toString()).join('');
  return +result;
}

module.exports = deleteDigit;
