export default function insert(idx, ...items) {
  const [head, tail] = this.x.split(idx);
  return [...head, ...items, ...tail];
}