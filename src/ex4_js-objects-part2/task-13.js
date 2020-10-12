function getRandomIntegerLessOneHundred() {
  const min = 0;
  const max = 100;

  return min - 0.5 + Math.random() * (max - min + 1);
}

module.exports = getRandomIntegerLessOneHundred;
