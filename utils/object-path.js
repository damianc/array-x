export default function objectPath(obj, path) {
  const fragments = ('' + path).split(/(?:\.|\[(\d+)\])/).filter(Boolean);

  let res = obj;
  for (let frag of fragments) {
    const f = res[frag];
    res = f;
    if (typeof f === 'undefined') {
      break;
    }
  }

  return res;
}