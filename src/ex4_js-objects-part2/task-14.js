function getRandomInteger(min, max) {
  const integerMin = Math.round(min);
  const integerMax = Math.round(max);

  return Math.round(integerMin - 0.5 + Math.random() * (integerMax - integerMin + 1));
}

module.exports = getRandomInteger;
