export default function findMin(mapper = null) {
  if (!mapper) return Math.min(...this);
  return this.reduce((acc,curr)=>mapper(curr)<mapper(acc)?curr:acc);
}