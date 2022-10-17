export default function reduce(reducer, finalizer = null, init) {
  const params = [(acc, curr, idx, arr) => {
    let res = reducer(acc, curr, idx, arr);

    if (idx === this.length - 1 && typeof finalizer === 'function') {
      res = finalizer(res, this);
    }

    return res;
  }];

  if (typeof init !== 'undefined') {
    params.push(init);
  }

  return this.reduce(...params);
}