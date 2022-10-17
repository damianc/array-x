export default function insert(idx, ...items) {
  const [head, tail] = this.x.cut(idx);
  return [...head, ...items, ...tail];
}