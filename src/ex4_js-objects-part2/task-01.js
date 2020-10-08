function findProtoProperty(property, obj) {
  if (!Object.prototype.hasOwnProperty.call(obj, property)) {
    return obj[property];
  }
  
  return undefined;
}

module.exports = findProtoProperty;
