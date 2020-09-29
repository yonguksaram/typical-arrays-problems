
exports.min = function min (array) {
  if (!array || array.length == 0) return 0;
  return array.reduce((min, current) => current < min ? current : min, 0);
}

exports.max = function max (array) {
  if (!array || array.length == 0) return 0;
  return array.reduce((min, current) => current > min ? current : min, 0);
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) return 0;
  let sumOfArrayUnits = array.reduce((sum, current) => sum + current, 0);
  return sumOfArrayUnits/array.length;
}
