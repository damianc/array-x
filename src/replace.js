export default function replace(
  matcher = x => true,
  replacer = x => x
) {
  function test(item, idx) {
    if (typeof matcher === 'function') {
      return matcher(item, idx);
    } else if (Array.isArray(matcher)) {
      return matcher.includes(item);
    } else {
      return item === matcher;
    }
  }

  function change(item, idx) {
    if (typeof replacer === 'function') {
      return replacer(item,idx);
    } else {
      return replacer;
    }
  }

  return this.map((item, idx) => {
    return test(item,idx) ? change(item,idx) : item
  });
}