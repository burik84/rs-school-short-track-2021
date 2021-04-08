/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arrN = n
    .toString()
    .split('')
    .map((item) => +item);
  if (arrN.length === 1) return arrN[0];
  while (arrN.length > 1) {
    const result = arrN.reduce((acc, cur) => acc + cur, 0);
    arrN = result
      .toString()
      .split('')
      .map((item) => +item);
  }
  return arrN[0];
}

module.exports = getSumOfDigits;
