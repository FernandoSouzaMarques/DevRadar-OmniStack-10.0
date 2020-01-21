module.exports = function researchStandardization(string) {
  const array = string.split('.')
  let newString = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      newString = newString + array[i];
    }
  }
  newString = newString.toLowerCase();
  return newString
}
