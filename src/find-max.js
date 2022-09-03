export default function findMax(mapper = null) {
  if (this.length === 0) return null;
  if (!mapper) return Math.max(...this);

  return this.reduce((acc, curr)=> mapper(curr) > mapper(acc) ? curr : acc);
}