function getMaxValuePositiveElementsArray(arrPositiveElements) {
    let maxValue = arrPositiveElements[0];
    for (let i = 1; i < arrPositiveElements.length; i++) {
        if (arrPositiveElements[i] > maxValue) {
            maxValue = arrPositiveElements[i];
        }
    }
    
    return maxValue;
}

module.exports = getMaxValuePositiveElementsArray;
