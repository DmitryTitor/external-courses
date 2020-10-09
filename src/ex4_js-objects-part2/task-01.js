function findProtoProperty(property, obj) {
  if (Object.prototype.hasOwnProperty.call(obj.__proto__, property)) {
    return obj[property];
  }
  
  return undefined;
}

module.exports = findProtoProperty;
