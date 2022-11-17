export default function generate(length = 0, valueGenerator) {
  if (!length) return [...this];

  const res = this.slice(0, length);
  
  for (let i = 0; i < length; i++) {
    if (!res[i]) res.push(putValue(i));
  }

  return res;

  function putValue(i) {
    if (typeof valueGenerator === 'function') {
      return valueGenerator(i, res);
    }
    
    return valueGenerator;
  }
}