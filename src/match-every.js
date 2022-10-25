export default function matchEvery(...tests) {
  if (tests.length === 0) return [...this];
  return this.filter((item, idx) => test(item, idx));

  function test(item, idx) {
    let res = true;

    for (let t of tests) {
      res = t(item, idx);
      if (res === false) break;
    }

    return res;
  }
}