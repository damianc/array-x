export default function refIterator(refKey, nextKey, initItemIdx = 0) {
  if (this.length === 0) return [][Symbol.iterator]();
  if (this.length === 1) return this[Symbol.iterator]();

  if (initItemIdx >= this.length) {
    initItemIdx = this.length - 1;
  }

  const res = [this[initItemIdx]];

  let next;
  while (!!(next = getNext.call(this))) res.push(next);

  return res[Symbol.iterator]();

  function getNext() {
    const last = res[res.length - 1];

    if (last && typeof last[nextKey] !== 'undefined') {
      const next = this.find(i => i[refKey] === last[nextKey]);
      return next;
    }

    return;
  }
}