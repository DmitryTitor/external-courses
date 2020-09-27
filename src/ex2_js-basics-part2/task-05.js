function getMaxValuePositiveElementsArray(arrPositiveElements) {
    let maxValue = arrPositiveElements[0];
    for (let i = 0; i < arrPositiveElements.length; i++) {
        console.log('max = ' + maxValue);
        if (arrPositiveElements[i+1] > maxValue) {
            maxValue = arrPositiveElements[i+1];
            console.log('New max = ' + maxValue + ' index = ' + i+1);
        }
    }
    return maxValue;
}

module.exports = getMaxValuePositiveElementsArray;