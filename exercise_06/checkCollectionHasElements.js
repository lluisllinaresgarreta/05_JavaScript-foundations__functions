/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * get length of a collection and check whether it is empty or not
 * @param {Array} collection - collection to check
 * @returns {Boolean} - true if collection has elements, false otherwise
 */
function checkCollectionHasElements(collection) {
    return collection.length > 0;
} 
export default checkCollectionHasElements;
