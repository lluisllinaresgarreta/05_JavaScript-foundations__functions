/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */


/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

/**
 * check number of words contained in given string, if total number of words is greater then 5, then return uppercase string, otherwise, return lower case string
 * @param {string} sentence - setence to check number of words
 * @returns {string} - return uppercase string if total number of words is greater then 5, otherwise, return lower case string
 */
function formatStringByWordsLength(sentence) {
    const words = sentence.split(' ');
    return words.length > 5 ? sentence.toUpperCase() : sentence.toLowerCase();
}
export default formatStringByWordsLength;
