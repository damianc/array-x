export default function min(mapper = null) {
  function val(x) {
    return mapper ? mapper(x) : x;
  }

  return this.reduce((acc, curr, idx) => {
    const currMin = idx === 1 ? val(acc) : acc;
    return Math.min(val(curr), currMin);
  });
}