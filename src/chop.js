export default function chop(...cuts) {
  if (!cuts.length) return [...this];

  const ct = cuts
    .filter(x => Math.abs(x) < this.length)
    .map(x => x < 0 ? this.length + x : x);
  ct.sort();

  if (ct[0] === 0) ct.shift();

  const uniq = [...new Set(ct)];
  ct.splice(0, ct.length, ...uniq);

  if (!ct.length) return [...this];
  
  const chunks = [];
  let p = 0;

  ct.forEach(c => {
    chunks.push(
      this.slice(p, c)
    );
    p = c;
  });

  if (p < this.length) chunks.push(this.slice(p));

  return chunks;
}