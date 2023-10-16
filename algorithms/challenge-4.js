function findSmallest(num1, num2, num3) {
  let smallestNumber;

  if (num1 <= num2 && num1 <= num3) {
    smallestNumber = num1;
    return smallestNumber;
  } else if (num2 <= num1 && num2 <= num3) {
    smallestNumber = num2;
    return smallestNumber;
  } else {
    smallestNumber = num3;
    return smallestNumber;
  }
}
module.exports = findSmallest;
