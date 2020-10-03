function checkTypeArgument(arg) {
  if (isNaN(arg)) {
    return undefined;
  }

  const argType = typeof arg;

  if (argType === 'string') {
    return argType;
  }

  if (argType === 'number') {
    return argType;
  }
    
  return undefined;
};

module.exports = checkTypeArgument;
