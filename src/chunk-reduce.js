export default function chunkReduce(size, reducer = null, init = null, rejectStickingTail = false) {
  if (!size || size <= 0 || !reducer) return [...this];

  const chunks = this.x.chunk(size, rejectStickingTail);

  return chunks.map((chunk, idx) => {
    const params = [reducer];
    if (init !== null) params.push(getInit(chunk, idx + 1));

    return chunk.reduce(...params);
  });

  function getInit(ch, chunkNum) {
    if (typeof init === 'function') {
      return init(ch, chunkNum);
    } else {
      return init;
    }
  }
}