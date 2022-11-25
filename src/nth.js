export default function nth(n) {
  if (typeof n === 'undefined') return;
  
  if (n >= 0) return this[n];
  return this[this.length + n];
}