export default function split(matcher = null) {
  if (matcher === null) {
    return [...this];
  }

  function test(item, idx) {
    if (typeof matcher === 'function') {
      return matcher(item, idx);
    } else if (Array.isArray(matcher)) {
      return matcher.includes(item);
    } else {
      return item === matcher;
    }
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

  return res;
}