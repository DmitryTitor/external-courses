function checkTypeArgument(arg) {
    if (isNaN(arg)) {
        return undefined;
    }
    if (typeof arg === 'string') {
        return 'string';
    }
    if (typeof arg === 'number') {
        return 'number';
    }
    return undefined;
};


module.exports = checkTypeArgument;