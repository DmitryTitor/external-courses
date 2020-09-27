function getMaxValuePositiveElementsArray(arrPositiveElements) {
    let maxValue = arrPositiveElements[0];
    for (let i = 0; i < arrPositiveElements.length; i++) {
        if (arrPositiveElements[i+1] > maxValue) {
            maxValue = arrPositiveElements[i+1];
        }
    }
    return maxValue;
}

module.exports = getMaxValuePositiveElementsArray;