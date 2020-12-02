export const TEST_STRING = "test string";
export const testFunction = () => {
  return TEST_STRING;
};
export const sum = (num1, num2) => {
  return num1 + num2;
};
export const minus = (num1, num2) => {
  return num1 - num2;
};
export const divide = (num, den) => {
  return num / den;
};

export const addPeriodatEnd = (arrayofStrings)=>{
  //return new array with . added on each string
  let arrStringPeriodatEnd = arrayofStrings.map((string)=>{
    return string + '.';
  });
  return arrStringPeriodatEnd;
};