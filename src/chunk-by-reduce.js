export default function chunkByReduce(reducer, init = null, tester = null) {
  if (!reducer || tester === null) return [...this];

  return this.reduce((acc, curr, idx) => {
    if (!idx) return [[curr]];

    const accCopy = [...acc];
    const lastChunk = accCopy.pop();

    const params = [reducer];
    if (init !== null) params.push(init);

    const res = lastChunk.reduce(...params);
    if (tester(res)) {
      return [...acc, [curr]];
    } else {
      return [...accCopy, [...lastChunk, curr]];
    }
  }, []);
}