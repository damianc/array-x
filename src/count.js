export default function count(itemCb) {
  // let counter = 0;

  return this.reduce((acc, curr) => {
    return acc + (test(curr) ? 1 : 0);
  }, 0);

  function test(item) {
    return typeof itemCb === 'function'
      ? itemCb(item)
      : item === itemCb;
  }

  // this.forEach((item, idx) => {
  //   if (test(item)) counter += 1;
  // });

  // return counter;
}