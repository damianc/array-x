export default function split(matcher = null) {
  if (matcher === null) {
    return [...this];
  }

  let matched = 0;

  function test(item, idx) {
    let m;

    if (typeof matcher === 'function') {
      m = matcher(item, idx);
    } else if (Array.isArray(matcher)) {
      m = matcher.includes(item);
    } else {
      m = item === matcher;
    }

    if (m) matched += 1;
    return m;
  }

  let prevItemMatched = false;
  const res = this.reduce((acc, curr, idx) => {
    const t = test(curr, idx);
    if (t) {
      prevItemMatched = true;
      return acc;
    } else {
      let r;
      if (prevItemMatched) {
        r = [...acc, [curr]];
      } else {
        const head = acc.slice(0, -1);
        const [tail] = acc.slice(-1);

        r = [
          ...head,
          (tail || []).concat(curr)
        ];
      }
      prevItemMatched = false;
      return r;
    }
  }, []);

  if (matched === 0) return res[0];
  return res;
}