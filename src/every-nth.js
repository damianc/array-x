export default function everyNth(n = 1, from = 0, to) {
  const frag = this.slice(from, to);
  const res = [];

  if (n <= 0) n = 1;

  for (let i = 0; i < frag.length; i += n) {
    res.push(frag[i]);
  }

  return res;
}