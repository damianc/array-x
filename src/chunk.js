export default function chunk(size) {
  if ((!size) || size <= 0) return [];
  
  return this.reduce((acc, curr) => {
    const last = acc[acc.length - 1];

    if (last.length === size) {
      return [...acc, [curr]];
    } else {
      const tail = acc.pop();
      return [...acc, [...tail, curr]];
    }
  }, [[]]);
}