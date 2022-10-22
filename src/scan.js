export default function scan(reducer, init = null) {
  if (!reducer || this.length === 0) return [];

  const res = [];

  const params = [reducer];
  if (init !== null) params.push(init);
  
  for (let i = 1; i <= this.length; i++) {
    res.push(
      this.slice(0, i).reduce(...params)
    );
  }

  return res;
}