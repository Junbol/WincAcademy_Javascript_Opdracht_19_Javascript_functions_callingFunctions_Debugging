console.log("Javascript and Node are working");

// FUNCTION 1> RETURN function that DO something> Checking if a number is big

const makePositive = function (number) {
  console.log("Entering makePositive..");
  console.log("Input: ", number); // BIG discovery I should not use " in strings from now on
  //normally they work but now after using two arguments and a comma it would be better to use ""
  const result = Math.abs(number);
  console.log("Output: ", result);
  return result;
};

const makeBigger = function (number) {
  console.log("Entering makeBigger..");
  console.log("Input: ", number);
  let result = number;
  if (number < 10) {
    result = 10 + number;
  }
  console.log("Output: ", result);
  return result;
};

const square = function (number) {
  console.log("Entering square..");
  console.log("Input: ", number);
  const result = number * number;
  return result;
};

const doComplexCalculation = function (number) {
  console.log("Entering doComplexCalculation..");
  console.log("Input: ", number);
  const positiveNumber = makePositive(number);
  const bigNumber = makeBigger(positiveNumber);
  const squaredNumber = square(bigNumber);
  console.log("Input: ", squaredNumber);
  return squaredNumber;
};

console.log(doComplexCalculation(-1));
