export default function mapReduce(
  chunkSize = 2, reducer = null, init = null, rejectStickingTail = false
) {
  if (reducer === null) {
    reducer = (a, c) => a + c;
  }

  const chunks = this.x.chunk(chunkSize, rejectStickingTail);

  return chunks.map((ch, chNum) => {
    const params = [reducer];

    if (init !== null) {
      params.push(getInit(ch, chNum + 1));
    }

    return ch.reduce.call(ch, ...params);
  });

  function getInit(ch, chNum) {
    if (typeof init === 'function') {
      return init(ch, chNum);
    } else {
      return init;
    }
  }
}