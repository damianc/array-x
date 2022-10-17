export default function revIterator() {
  const rev = [...this].reverse();
  return rev[Symbol.iterator]();
}