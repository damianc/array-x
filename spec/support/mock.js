module.exports = function init(arr, exps) {
  return cb => [arr, exps].map(t => cb(t));
};