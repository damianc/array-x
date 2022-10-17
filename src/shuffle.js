export default function shuffle() {
  Math.random();

  return this.map(val => ({
      val,
      rand: Math.random()
    }))
    .sort((l, r) => l.rand - r.rand)
    .map(({ val }) => val);
}