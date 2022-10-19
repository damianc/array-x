export default function symDiff(arr = []) {
  return [
    ...this.x.diff(arr),
    ...arr.x.diff(this)
  ];
}