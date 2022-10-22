export default function frame(size, rejectIncomplete = true) {
  if (!size || size <= 0) return [];
  
  const res = [];

  for (let i = 0; i < this.length; i++) {
    const fr = this.slice(i, i + size);
    if (rejectIncomplete && fr.length < size) break;

    res.push(fr);
  }

  return res;
}