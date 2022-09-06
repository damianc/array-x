export default function zip(...otherArrs) {
  if (this.length === 0 || otherArrs.length === 0) return [];

  let minArrLength = this.length;
  const arrs = otherArrs.filter(oa => {
    if (Array.isArray(oa)) {
      minArrLength = Math.min(minArrLength, oa.length);
      return true;
    }
    return false;
  });

  const res = [];

  for (let i = 0; i < minArrLength; i++) {
    const matches = arrs.map(arr => arr[i]);
    res.push([this[i], ...matches]);
  }

  return res;
}