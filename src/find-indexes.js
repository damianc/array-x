export default function findIndexes(matcher = null) {
  if (matcher === null) return [];

  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (test(this[i], i)) res.push(i);
  }

  return res;

  function test(item, idx) {
    if (typeof matcher === 'function') {
      return matcher(item, idx);
    } else if (Array.isArray(matcher)) {
      return matcher.includes(item);
    } else {
      return item === matcher;
    }
  }
}