module.exports = (ArrayAsString) => {
  return ArrayAsString.split(',').map(tech => tech.trim());
}