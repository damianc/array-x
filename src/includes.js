export default function includes(matcher = null) {
  const indexes = this.x.findIndexes(matcher);
  return indexes.length > 0;
}