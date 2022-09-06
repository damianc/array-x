export default function unzipAll() {
  if (this.length === 0) return [];

  let maxArrLength;
  const arrs = this.filter(tuple => {
    if (Array.isArray(tuple)) {
      maxArrLength = typeof maxArrLength === 'undefined'
        ? tuple.length
        : Math.max(maxArrLength, tuple.length);
      return true;
    }
    return false;
  });

  return arrs.reduce((acc, curr) => {
    for (let i = 0; i < maxArrLength; i++) {
      if (!Array.isArray(acc[i])) acc[i] = [];
      acc[i].push(curr[i]);
    }
    
    return acc;
}, []);
}