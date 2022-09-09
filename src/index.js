export default function index(keySelector, valueSelector = null, fallbackKey = '__unindexed') {
  if (this.length === 0) return {};

  function getKey(x, idx) {
    let key;
    try {
      key = typeof keySelector === 'function'
        ? keySelector(x, idx)
        : x[keySelector];
    } catch (e) {}

    return key;
  }

  function getValue(x, idx) {
    return typeof valueSelector === 'function'
      ? valueSelector(x, idx)
      : typeof valueSelector === 'string'
        ? x[valueSelector]
        : x;
  }
  
  return this.reduce((acc, curr, idx) => {
    let key = getKey(curr, idx);
    if (typeof key === 'undefined') key = fallbackKey;

    if (!(key in acc)) acc[key] = [];
    acc[key].push(getValue(curr, idx));
    
    return acc;
  }, {});
}