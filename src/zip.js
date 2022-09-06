export default function zip(otherArr = []) {
  const zipLen = Math.min(this.length, otherArr.length);
  const res = [];

  for (let i = 0; i < zipLen; i++) {
    res.push([this[i], otherArr[i]]);
  }

  return res;
}