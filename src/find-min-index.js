export default function findMinIndex(mapper = null) {
  function val(x) {
    return mapper ? mapper(x) : x;
  }

  if (this.length === 0) return -1;

  let idx = 0;
  let min = val(this[0]);
  
  for (let itemIdx in this) {
    if (itemIdx === 0) continue;

    const curr = val(this[itemIdx]);
    if (curr < min) {
      idx = itemIdx;
      min = curr;
    }
  }

  return +idx;
}