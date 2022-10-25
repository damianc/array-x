export default function sample(size, step = 1) {
  if (!size || !step || size < 0 || step < 0) return [];

  const res = [];

  for (
    let i = 0, init = true;
    i < this.length;
    i += step, init = false
  ) {
    const slice = this.slice(i, i + size);
    if (!init && slice.length < size) break;

    res.push(slice);
  }

  return res;
}