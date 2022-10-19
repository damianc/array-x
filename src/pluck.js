export default function pluck(path = '') {
  function objPath(obj, path) {
    const fragments = (''+path).split(/(?:\.|\[(\d+)\])/).filter(Boolean);

    return fragments.reduce((acc, curr) => {
      return acc[curr];
    }, obj);
  }

  return this.map(item => objPath(item, path));
}