const humanCatDogYears = (number) => {
  let catYears = 0;
  let dogYears = 0;

  if (number <= 0) {
    return [0, 0, 0];
  }
  if (number === 1) {
    catYears = 15;
    dogYears = 15;
  }
  if (number === 2) {
    catYears = 24;
    dogYears = 24;
  }
  if (number >= 3) {
    catYears = 24 + (number - 2) * 4;
    dogYears = 24 + (number - 2) * 5;
  }

  return [number, catYears, dogYears];
};

//   const numberFirst = 15;
//   const numberSecond = 9;
//   const numberThird = (number - 2) * 4;
//   //   const numberFourth = (number - 2) * 5;

//   if (number <= 1) {
//     return numberFirst;
//   } else if (number === 2) {
//     return numberFirst + numberSecond;
//   } else {
//     return numberFirst + numberSecond + numberThird;
//   }

module.exports = humanCatDogYears;
