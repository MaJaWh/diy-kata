const humanCatDogYears = (number) => {
  const numberFirst = 15;
  const numberSecond = 9;
  const numberThird = (number - 2) * 4;
  const numberFourth = (number - 2) * 5;

  if (number <= 1) {
    return numberFirst;
  } else if (number === 2) {
    return numberFirst + numberSecond;
  } else {
    return numberFirst + numberSecond + numberThird;
  }
};

module.exports = humanCatDogYears;
