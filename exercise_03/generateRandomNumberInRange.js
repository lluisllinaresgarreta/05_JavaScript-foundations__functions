/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * generate a rounded random number depending on a limit
 * @param {number} limit - the maximum value of the random number
 * @returns {number} - the generated random number
 */
function generateRandomNumberInRange(limit) {
  return Math.round(Math.random() * limit);
}

export default generateRandomNumberInRange;
