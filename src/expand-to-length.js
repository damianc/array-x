export default function expandToLength(len, cb, prevs = 0, init = 0) {
  const copy = [...this];
  if (copy.length >= len || !len || !cb) return copy;

  while (copy.length < len) {
    const p = prevs || cb.length || 2;
    const prev = copy.slice(-p);

    if (prev.length < p) {
      const diff = p - prev.length;
      const pad = (new Array(diff)).fill(init);
      prev.unshift(...pad);
    }

    const next = cb(...prev);
    copy.push(next);
  }

  return copy;
}