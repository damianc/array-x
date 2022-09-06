export default function overwrite(idx, ...items) {
  const copy = [...this];
  copy.splice(idx, items.length, ...items);
  
  return copy;
}