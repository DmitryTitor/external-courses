function findProtoProperty(property, obj) {
  const protoObj = Object.getPrototypeOf(obj);
  
  if (protoObj.hasOwnProperty(property)) {
    return protoObj[property];
  }
  
  return undefined;
}

module.exports = findProtoProperty;
