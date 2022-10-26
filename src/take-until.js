export default function takeUntil(itemCb, inclusive = true) {
  if (this.length === 0) return [];
  
  const idx = this.findIndex(item => typeof itemCb === 'function'
    ? itemCb(item)
    : item === itemCb
  );

  if (idx === -1) return this;
  return this.slice(0, idx + (inclusive ? 1 : 0));
}