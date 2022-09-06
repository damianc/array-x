export default function chunkByCallback(cb = null, matchedItemOpening = true) {
  if (this.length === 0 || cb === null) {
    return [];
  }

  return this.reduce((acc, curr, idx) => {
    const last = acc.pop();
    const isCutting = cb(curr, idx);

    if (!isCutting) {
      return [...acc, [...last, curr]];
    } else {
      if (matchedItemOpening) {
        return [...acc, last, [curr]];
      } else {
        return [...acc, [...last, curr], ...(idx === this.length - 1 ? [] : [[]])];
      }
    }
  }, [[]]);
}