export default function localizeAll(itemCb) {
  let location = [];

  function test(item) {
    return typeof itemCb === 'function'
      ? itemCb(item)
      : item === itemCb;
  }

  this.forEach((item, idx) => {
    if (test(item)) location.push([idx, item]);
  });

  return location;
}