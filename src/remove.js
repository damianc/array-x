export default function remove(arrOrTester) {
  const removed = [];
  let tester;

  if (Array.isArray(arrOrTester)) {
    tester = item => !arrOrTester.includes(item);
  } else if (typeof arrOrTester === 'function') {
    tester = (item, idx) => !arrOrTester(item, idx);
  } else {
    tester = item => item !== arrOrTester;
  }

  const filtered = this.filter((item, idx) => {
    if (tester(item, idx)) {
      return true;
    } else {
      removed.push(item);
      return false;
    }
  });

  this.splice(0, this.length, ...filtered);
  return removed;
}