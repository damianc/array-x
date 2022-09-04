export default function skipUntil(itemCb, inclusive = true) {
  if (this.length === 0) return [];
  
  const idx = this.findIndex(item => typeof itemCb === 'function'
    ? itemCb(item)
    : item === itemCb
  );

  if (idx === -1) return [];
  else {
    return this.slice(idx + (inclusive ? 0 : 1));
  }
}