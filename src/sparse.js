export default function sparse(slots = 1) {
  if (slots < 0) slots = 0;

  const res = [];

  for (let i = 0; i < this.length; i++) {
    const idx = i === 0 ? 0 : (i + (i * slots));
    res[idx] = this[i];
  }

  return res;
}