export default function splitByPattern(take, skip, from = null, rejectStickingTail = false) {
  const copy = [...this];

  if (take < 0) take = 0;
  if (skip < 0) skip = 0;

  if (take === 0 || (take === 0 && skip === 0)) return copy;

  if (from !== null) {
    copy.splice(0, from);
  }

  const res = [];
  let taking = true;

  while (copy.length > 0) {
    if (taking) {
      res.push(copy.splice(0, take));
    } else {
      copy.splice(0, skip);
    }

    taking = !taking;
  }

   if (rejectStickingTail) {
    const last = res[res.length - 1];
    if (last.length !== take) {
      res.splice(-1, 1);
    }
  }

  return res;
}