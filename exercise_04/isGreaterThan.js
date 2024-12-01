/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * check whether one number is greater than a given number
 * @param {number} value - the number to check
 * @param {number} threshold - the number to compare with 
 * @returns {boolean} - true if the value is greater than the threshold, false otherwise
 */
function isGreaterThan(value, threshold) {
    return value > threshold;
}

export default isGreaterThan;
