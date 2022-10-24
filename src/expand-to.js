export default function expandTo(target, cb, prevs = 0, init = 0, includeSticking = false, maxIters = 32) {
  const copy = [...this];
  if (copy[copy.length - 1] === target) return copy;
  if (typeof target === 'undefined' || !cb) return copy;

  function takePrevs() {
    const p = prevs || cb.length || 2;
    const prev = copy.slice(-p);

    if (prev.length < p) {
      const diff = p - prev.length;
      const pad = (new Array(diff)).fill(init);
      prev.unshift(...pad);
    }

    return prev;
  }

  let iters = 0;
  while (test(target, copy[copy.length-1] || takePrevs()[0])) {
    if (copy[copy.length-1] === target) break;
    if (++iters > maxIters) break;
    
    const prev = takePrevs();

    const next = cb(...prev);
    copy.push(next);
  }

  if (!includeSticking && (typeof target === 'function' ? true : copy[copy.length-1] !== target)) {
    copy.pop();
  }

  return copy;

  function test(t, last) {
    if (typeof target === 'function') {
      return target(last);
    } else {
      return last <= t;
    }
  }
}