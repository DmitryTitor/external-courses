function sumTwoNumWithRound(num1, num2) {
  if (num1 + num2 !== 0) {
    return Math.round(((num1 + num2) * 1000)) / 1000;
  }

  return undefined;
}

module.exports = sumTwoNumWithRound;
