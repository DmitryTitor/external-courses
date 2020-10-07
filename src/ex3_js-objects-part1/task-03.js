function checkObjectHasProperty(nameProperty, obj) {
  return Object.prototype.hasOwnProperty.call(obj, nameProperty);
}

module.exports = checkObjectHasProperty;
