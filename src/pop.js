export default function pop(n = 1) {
  return this.splice(-n, n);
}