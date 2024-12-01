/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 *check a pair of numbers and return true if their sum is 50 or greater than 50 
 * @param {number} summand1 - first number 
 * @param {number} summand2 - second number
 * @returns {boolean} - true if the sum of the two numbers is greater than 50
 */
function isAdditionGreaterThanFifty(summand1, summand2) {
    return summand1 + summand2 > 50;
}
export default isAdditionGreaterThanFifty;
