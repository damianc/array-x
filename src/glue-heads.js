export default function glueHeads(arr = [], leftSize, rightSize = leftSize) {
  const l = leftSize <= 0 ? [] : this.slice(0, leftSize);
  const r = rightSize <= 0 ? [] : arr.slice(0, rightSize);

  return [...l, ...r];
}