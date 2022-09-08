import { reduce, val } from '@utils';

export default function sum(mapper = null) {
  const $ = val(mapper);

  if (this.length === 0) return null;

  return reduce(
    this.map(item => $(item)),
    (a, b) => a + b
  );
}