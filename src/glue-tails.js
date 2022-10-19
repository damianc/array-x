export default function glueTails(arr = [], leftSize, rightSize = leftSize) {
  const l = leftSize <= 0 ? [] : this.slice(-leftSize);
  const r = rightSize <= 0 ? [] : arr.slice(-rightSize);

  return [...l, ...r];
}