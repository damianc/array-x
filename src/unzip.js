export default function unzip() {
  if (this.length === 0) return [];

  let minArrLength;
  const arrs = this.filter(tuple => {
    if (Array.isArray(tuple)) {
      minArrLength = typeof minArrLength === 'undefined'
        ? tuple.length
        : Math.min(minArrLength, tuple.length);
      return true;
    }
    return false;
  });

  return arrs.reduce((acc, curr) => {
    for (let i = 0; i < minArrLength; i++) {
      if (!Array.isArray(acc[i])) acc[i] = [];
      acc[i].push(curr[i]);
    }
    
    return acc;
}, []);
}