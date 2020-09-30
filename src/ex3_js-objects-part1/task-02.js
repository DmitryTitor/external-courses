function outputArrayProperties(obj) {
  Object.entries(obj).forEach(property => {
    let [key, value] = property;
    console.log(`Ключ: ${key} Значение:${value}`);
  });

  return;
}

module.exports = outputArrayProperties;
