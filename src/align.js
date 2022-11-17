export default function align(
  length,
  filling,
  padSide = 'left',
  cutSide = 'right'
) {
  if (!length || this.length === length) return [...this];

  if (this.length > length) {
    if (cutSide === 'left') return this.slice(-length);
    return this.slice(0, length);
  }

  if (this.length < length) {
    const diff = length - this.length;
    const fill = (new Array(diff)).fill(filling);

    if (padSide === 'right') return [...this, ...fill];
    return [...fill, ...this];
  }
}