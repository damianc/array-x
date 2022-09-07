export default function buildIndex(arr, key, selector = null) {
  const index = {};

  arr.forEach((item, idx) => {
    let val = item;
    if (typeof selector === 'string') val = val[selector];
    if (typeof selector === 'function') val = selector(val);
    
    const k = item[key];
    if (!(k in index)) index[k] = [];
    index[k].push(val);
  });

  return index;
}