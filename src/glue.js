export default function glue(arr = [], head, tail) {
  const h = head <= 0 ? [] : this.slice(0, head);
  const t = tail <= 0 ? [] : arr.slice(-tail);

  return [...h, ...t];
}