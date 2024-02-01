function isLipyear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
const isLipyearFound = isLipyear(2020);
console.log(isLipyearFound);