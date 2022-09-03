import { val } from '@utils';

export default function min(mapper = null) {
  const $ = val(mapper);

  if (this.length === 0) return -1;
  if (this.length === 1) return $(this[0]);

  return this.reduce((acc, curr, idx) => {
    const currMin = idx === 1 ? $(acc) : acc;
    return Math.min($(curr), currMin);
  });
}