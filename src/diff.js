export default function diff(arr = []) {
  const uniq = this.filter(item => !arr.includes(item));
  return [...new Set(uniq)];
}