import { reduce, val } from '@utils';

export default function findMaxIndex(mapper = null) {
  const $ = val(mapper);

  if (this.length === 0) return -1;
  if (this.length === 1) return 0;

  return reduce(
    this,
    (acc, curr, idx) => {
      if (idx === 1) return $(curr) > $(acc) ? [curr, 1] : [acc, 0];

      let [currMin] = acc;
      if ($(curr) > $(currMin)) return [curr, idx];

      return acc;
    },
    ([, idx]) => idx
  );
}