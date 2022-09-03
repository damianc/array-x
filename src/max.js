import { val } from '@utils';

export default function max(mapper = null) {
  const $ = val(mapper);

  if (this.length === 0) return null;
  if (this.length === 1) return $(this[0]);

  return this.reduce((acc, curr, idx) => {
    const currMin = idx === 1 ? $(acc) : acc;
    return Math.max($(curr), currMin);
  });
}