export default function filterMapped(mapper = null, filter = null) {
  if (mapper === null) mapper = x => x;
  if (filter === null) filter = () => true;

  return this.filter((item, idx) => filter(mapper(item), idx));
}