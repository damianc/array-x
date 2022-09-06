export default function override(idx, ...items) {
  if (this.length === 0) return [];
  
  const copy = [...this];
  const s = idx >= 0 ? (this.length - idx) : idx * -1; 

  copy.splice(idx, items.length, ...items.slice(0, s));
  return copy;
}