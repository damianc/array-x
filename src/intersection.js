export default function intersection(arr = []) {
  const common = this.filter(item => arr.includes(item));
  return [...new Set(common)];
}