/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * find how much a number exceeds or is left to reach one value
 * @param {number} value - number to compare with threshold
 * @param {number} threshold - number to compare with value
 * @returns {number} distance between value and threshold
 */
function getDistanceFromThreshold(value, threshold) {
    const distance = value - threshold;

    return distance;
}

export default getDistanceFromThreshold;
