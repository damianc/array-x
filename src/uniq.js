import { val } from '@utils';

export default function uniq(selector = null) {
  const $ = val(selector);

  const map = {};

  return this.reduce((acc, curr, idx) => {
    const c = $(curr);
    if (c in map) return acc;

    map[c] = true;
    return [...acc, curr];
  }, []);
}