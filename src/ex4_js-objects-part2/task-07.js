function trimStringLargerThenNumber(str, num) {
  if (str.length > num && num >= 1) {
    return str.slice(0, num - 1) + '…';
  }

  return undefined;
}

module.exports = trimStringLargerThenNumber;
