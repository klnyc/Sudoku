export const isValidNumber = (number: number): boolean => number >= 1 && number <= 9;

export const allUniqueValuesInArray = (array: number[]): boolean => {
  return !array.some((number, index) => {
    return index !== array.indexOf(number);
  });
};