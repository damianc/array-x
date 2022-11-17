export default function pull(index = -1) {
  if (index < -this.length) return;
  
  const [pulled] = this.splice(index, 1);
  return pulled;
}