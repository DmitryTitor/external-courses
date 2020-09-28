function checkTypeArgument(arg) {
    const argType = typeof arg;
    if (isNaN(arg)) {
        return undefined;
    }

    if (argType === 'string') {
        return argType;
    }

    if (argType === 'number') {
        return argType;
    }
    
    return undefined;
};

module.exports = checkTypeArgument;
