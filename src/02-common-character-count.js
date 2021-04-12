/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  for (let i1 = 0; i1 < s1.length; i1++) {
    for (let i2 = 0; i2 < s2.length; i2++) {
      if (s1[i1] === s2[i2]) {
        result += 1;
        // eslint-disable-next-line no-param-reassign
        s2 = s2.replace(`${s2[i2]}`, ' ');
        break;
      }
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
