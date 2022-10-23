export default function sort(...comps) {
  if (comps.length === 0) return this.sort();

  return this.sort((leftItem, rightItem) => {
    let rel = 0;

    for (let c of comps) {
      rel = compare(c, leftItem, rightItem);
      if (rel !== 0) break;
    }

    return rel;
  });

  function compare(comp, leftItem, rightItem) {
    if (typeof comp === 'function') {
      return comp(leftItem, rightItem);
    } else {
      comp = '' + comp;
      let field = comp, dir = 1;

      if (/^[-+]\w*/.test(comp)) {
        field = field.substr(1);
        if (comp[0] === '-') dir = -1;
      }

      let left = leftItem[field];
      let right = rightItem[field];
      if (field === '') {
        left = leftItem;
        right = rightItem;
      }

      let res = left - right;
      if (typeof left === 'string' || typeof right === 'string') {
        res = left.localeCompare(right);
      }

      return res * dir;
    }
  }
}