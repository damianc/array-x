export default function adapt(arr, adapts = 1) {
  const copy = [...this];

  if (adapts === -1) {
    adapts = Math.max(copy.length, arr.length);
  }

  let changes = 0;

  for (let i = 0; i < copy.length; i++) {
    if (i >= arr.length) break;

    if (copy[i] !== arr[i]) {
      copy[i] = arr[i];
      changes += 1;
      if (changes >= adapts) break;
    }
  }
  
  return copy;
}