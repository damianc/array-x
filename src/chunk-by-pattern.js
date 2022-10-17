export default function chunkByPattern(...sizes) {
  let rejectUnmatchedTail = false;

  if (sizes[sizes.length - 1] === true) {
    rejectUnmatchedTail = true;
    sizes.splice(-1, 1);
  }

  const sz = sizes.filter(x => x > 0);
  if (!sz.length) return [...this];

  let currentSizeIdx = 0;
  function nextSize() {
    if (currentSizeIdx < sz.length - 1) {
      currentSizeIdx += 1;
    } else {
      currentSizeIdx = 0;
    }
  }

  const copy = [...this];
  const res = [];

  while (copy.length > 0) {
    const size = sz[currentSizeIdx];
    res.push(copy.splice(0, size));
    nextSize();
  }

  if (rejectUnmatchedTail) {
    const tail = res[res.length - 1];
    if (tail.length !== sz[currentSizeIdx]) {
      res.splice(-1, 1);
    }
  }

  return res;
}