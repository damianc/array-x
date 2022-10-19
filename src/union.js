export default function union(arr = []) {
  return [
    ...new Set([...this, ...arr])
  ];
}