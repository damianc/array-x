export default function cut(idx = null) {
  const cutIdx = idx === null ? Math.floor(this.length / 2) : idx;
  
  return [
    this.slice(0, cutIdx),
    this.slice(cutIdx)
  ];
}