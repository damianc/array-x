export default function zipAll(...otherArrs) {
  // if (otherArrs.length === 0 || (otherArrs.length === 1 && this.length === 0)) return [];

  // if (
  //   (this.length === 0 && (otherArrs.length <= 1))
  // ) {
  //   return [];
  // }

  if (otherArrs.length === 0) return null;

  let hasNonEmpty = this.length > 0;

  let maxArrLength = this.length;
  const arrs = otherArrs.filter(oa => {
    if (Array.isArray(oa)) {
      maxArrLength = Math.max(maxArrLength, oa.length);
      hasNonEmpty ||= oa.length > 0;
      return true;
    }
    return false;
  });

  if (!hasNonEmpty) return [];

  const res = [];

  for (let i = 0; i < maxArrLength; i++) {
    const matches = arrs.map(arr => arr[i]);
    res.push([this[i], ...matches]);
  }

  return res;
}