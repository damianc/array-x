export default function findMinIndex(mapper = null) {
  function val(x) {
    return mapper ? mapper(x) : x;
  }
  
  return this.reduce((acc, curr, idx) => {
    if (idx === 1) return val(curr) < val(acc) ? [curr,1] : [acc,0];
    let currMin = [...acc];
    if (val(curr) < val(currMin[0])) currMin = [curr,idx];
    return idx === this.length - 1 ? currMin[1] : currMin;
  });
}