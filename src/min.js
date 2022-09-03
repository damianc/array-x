export default function min(mapper = null) {
  function val(x) {
    return mapper ? mapper(x) : x;
  }

  if (this.length === 0) return -1;
  if (this.length === 1) return 0;

  return this.reduce((acc, curr, idx) => {
    const currMin = idx === 1 ? val(acc) : acc;
    return Math.min(val(curr), currMin);
  });
}