import { val } from '@utils';

export default function findMinIndex(mapper = null) {
  const $ = val(mapper);

  if (this.length === 0) return -1;

  let idx = 0;
  let min = $(this[0]);
  
  for (let itemIdx in this) {
    if (itemIdx === 0) continue;

    const curr = $(this[itemIdx]);
    if (curr < min) {
      idx = itemIdx;
      min = curr;
    }
  }

  return +idx;
}