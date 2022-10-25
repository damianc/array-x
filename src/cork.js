export default function cork(val) {
  if (this.length === 0) return [];
  if (typeof val === 'undefined') return [...this];

  const res = [];

  let iter;
  if (Array.isArray(val)) {
    iter = val.x.cyclicIterator();
  }

  for (let i = 0; i < this.length - 1; i++) {
    res.push(
      this[i],
      getCork(this[i], this[i + 1], i)
    );
  }

  res.push(this[this.length-1]);

  return res;

  function getCork(curr, next, idx) {
    if (typeof val === 'function') {
      return val(curr, next, idx);
    } else if (Array.isArray(val)) {
      const c = iter.current;
      iter.next();
      return c;
    } else {
      return val;
    }
  }
}