export default function pivot(indexKey = null, valueSelector = null, keyMapper = null) {
  if (indexKey === null) return null;
  
  return this.reduce((acc, curr) => {
    let key = curr[indexKey];
    if (typeof keyMapper === 'function') {
      key = keyMapper(key);
    }
    
    const accCopy = { ...acc };
    if (!(key in accCopy)) accCopy[key] = [];

    let value;
    
    if (typeof valueSelector === 'function') {
      value = valueSelector(curr);
    } else if (typeof valueSelector === 'string' || typeof valueSelector === 'number') {
      value = curr[valueSelector];
    } else {
      if (Array.isArray(curr)) {
        const currCopy = [...curr];
        currCopy.splice(+indexKey, 1);
        value = currCopy;
      } else {
        const { [indexKey]: x, ...rest } = curr;
        value = rest;
      }
    }

    accCopy[key].push(value);
    return accCopy;
  }, {});
}