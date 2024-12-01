/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

/**
 * transform collection into string
 * @param {Array} collection - collection of elements 
 * @returns {String} - collection as string joined by '|'
 */
function transformCollectionToString(collection) {
    if (collection.length) {
        return collection.join(' | ');
    }
    return '';
}
export default transformCollectionToString;
