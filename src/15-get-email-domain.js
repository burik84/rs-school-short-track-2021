/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regexp = /@(\w+)[-_]?(\w+)\.(\w+)/gi;
  return email.match(regexp)[0].replace('@', '');
}

module.exports = getEmailDomain;
