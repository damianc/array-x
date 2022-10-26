import { val } from '@utils';

export default function uniqAdjacent(selector = null) {
  const $ = val(selector);
  
  return this.reduce((acc, curr, idx) => {
    if (idx === 0) return [this[0]];
    if ($(curr) === $(this[idx - 1])) return acc;
    return [...acc, curr];
  }, []);
}