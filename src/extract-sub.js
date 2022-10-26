export default function extractSub(pattern, multi = true, overlay = true) {
  if (!pattern || !pattern.length) return [];

  const res = [];

  for (let i = 0; i < this.length; ) {
    const slice = this.slice(i, i + pattern.length);
    if (slice.length !== pattern.length) break;

    if (test(slice)) {
      if (!multi) return [i, slice];
      res.push([i, slice]);
      i += overlay ? 1 : pattern.length;
    } else {
      i++;
    }
  }

  return res;

  function test(slice) {
    let res = true;

    for (let i = 0; i < pattern.length; i++) {
      if (typeof pattern[i] === 'function') {
        res = pattern[i](slice[i], i);
      } else {
        res = slice[i] === pattern[i];
      }
      if (res === false) break;
    }

    return res;
  }
}