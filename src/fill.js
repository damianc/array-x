export default function fill(valueOrGenerator) {
  const res = [];
  const valuesArr = Array.isArray(valueOrGenerator);

  let iter;
  if (valuesArr) {
    iter = valueOrGenerator.x.cyclicIterator();
  }
  
  for (let i = 0; i < this.length; i++) {
    res.push(getItem(+i));
  }
  
  return res;

  function getItem(idx) {
    if (typeof valueOrGenerator === 'function') {
      return valueOrGenerator(idx);
    } else if (valuesArr) {
      const c = iter.current;
      iter.next();
      return c;
    } else {
      return valueOrGenerator;
    }
  }
}