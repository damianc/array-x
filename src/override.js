export default function override(idx = null, ...items) {
  const copy = [...this];

  if (idx === null) {
    idx = copy.length;
  }

  const origLength = copy.length;
  const removed = copy.splice(idx, items.length);

  if (removed.length < items.length) {
    const diff = items.length - removed.length;
    items.splice(-diff, diff);
  }

  if (idx < 0) {
    idx += origLength;
  }

  copy.splice(idx, 0, ...items);
  return copy;
}