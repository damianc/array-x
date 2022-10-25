export default function padRight(maxLength, value) {
  if (
    maxLength <= 0 ||
    typeof value === 'undefined' ||
    this.length >= maxLength
  ) {
    return [...this];
  }

  const diff = maxLength - this.length;
  const padding = (new Array(diff)).fill(value);

  return [...this, ...padding];
}