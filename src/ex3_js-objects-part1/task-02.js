function outputArrayProperties(obj) {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`Ключ: ${key} Значение:${value}`);
  });

  return;
}

module.exports = outputArrayProperties;
