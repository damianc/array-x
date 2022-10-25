export default function join(separator) {
  if (typeof separator !== 'function') {
    return this.join(separator);
  }
  
  const copy = [...this];
  const last = copy.pop();

  let str = '';
  for (let i = 0; i < copy.length; i++) {
    const sep = separator(copy[i], i, str);
    str += copy[i] + sep;
  }

  str += last;
  return str;
}