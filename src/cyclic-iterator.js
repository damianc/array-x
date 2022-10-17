export default function cyclicIter() {
  const copy = [...this];
  const lastIdx = copy.length - 1;
  let idx = 0;

  return {
    next() {
      idx += idx < lastIdx ? 1 : -idx;
    },
    get current() {
      return copy[idx];
    }
  };
}