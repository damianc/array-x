export default function chunk(size, rejectStickingTail = false) {
  if ((!size) || size <= 0) return [];
  
  const res = this.reduce((acc, curr) => {
    const last = acc[acc.length - 1];

    if (last.length === size) {
      return [...acc, [curr]];
    } else {
      const tail = acc.pop();
      return [...acc, [...tail, curr]];
    }
  }, [[]]);

  if (rejectStickingTail) {
    const last = res[res.length - 1];
    if (last.length !== size) {
      res.splice(-1, 1);
    }
  }

  return res;
}