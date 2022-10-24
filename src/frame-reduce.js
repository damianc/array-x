export default function frameReduce(size, reducer = null, init = null, rejectStickingTail = false) {
  if (!size || size <= 0 || !reducer) return [...this];

  const frames = this.x.frame(size, rejectStickingTail);

  return frames.map((frame, idx) => {
    const params = [reducer];
    if (init !== null) params.push(getInit(frame, idx + 1));

    return frame.reduce(...params);
  });

  function getInit(fr, frameNum) {
    if (typeof init === 'function') {
      return init(fr, frameNum);
    } else {
      return init;
    }
  }
}