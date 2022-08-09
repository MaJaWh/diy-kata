const numberToReversedDigits = (number) => {
  const myArray = String(number)
    .split("")
    .reverse()
    .map((number) => {
      return Number(number);
    });
  return myArray;
};

module.exports = numberToReversedDigits;
