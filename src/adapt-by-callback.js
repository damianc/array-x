export default function adaptByCallback(arr = [], comparer = null, adapts = 1, lazy = false) {
  const copy = [...this];

  if (adapts === -1) {
    adapts = Math.max(copy.length, arr.length);
  }

  if (comparer === null) {
    comparer = (a, b) => a !== b;
  }

  let changed = 0;
  let touched = 0;

  for (let i = 0; i < copy.length; i++) {
    if (i >= arr.length) break;

    if (copy[i] !== arr[i]) {
      if (comparer(copy[i], arr[i])) {
        copy[i] = arr[i];
        changed += 1;
      }

      touched += 1;

      if (
        (lazy && (touched >= adapts)) ||
        (!lazy && (changed >= adapts))
      ) break;
    }
  }
  
  return copy;
}