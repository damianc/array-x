export default function localize(itemCb) {
  let location = null;

  function test(item) {
    return typeof itemCb === 'function'
      ? itemCb(item)
      : item === itemCb;
  }

  for (let item in this) {
    if (test(this[item])) {
      location = [+item, this[item]];
      break;
    }
  }

  return location;
}