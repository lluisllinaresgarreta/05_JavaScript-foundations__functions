/**
 *  * Export JS function "raiseValueToPower2" to raise one number to power of two
 
* - raise base to 2
 
 * - define signature
  * - input: one number
  * - output: one boolean
*/
/**
 * Raise one number to power of two
 * @param {number} base - number to raise to power of two
 * @returns {number} result of raising base to power of two
 */
const raiseValueToPower2 = function (base) {
  const result = Math.pow(base, 2);

  return result;
};

export default raiseValueToPower2;
