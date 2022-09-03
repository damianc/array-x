export default function findMin(mapper = null) {
  if (this.length === 0) return -1;
  if (!mapper) return Math.min(...this);

  return this.reduce((acc, curr)=> mapper(curr) < mapper(acc) ? curr : acc);
}