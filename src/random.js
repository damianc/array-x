export default function random(count = 1) {
  if (count < 1) return;

  const shuffled = this.x.shuffle();

  if (count === 1) return shuffled[0];
  return shuffled.slice(0, count);
}