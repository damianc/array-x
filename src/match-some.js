export default function matchSome(...tests) {
  if (tests.length === 0) return [...this];
  return this.filter((item, idx) => test(item, idx));

  function test(item, idx) {
    let res = false;

    for (let t of tests) {
      res = t(item, idx);
      if (res === true) break;
    }

    return res;
  }
}