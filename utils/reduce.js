export default function reduce(arr, cb, finalize = null, init) {
  const args = [(acc, curr, idx, arr) => {
    let res = cb(acc, curr, idx, arr);
    if (finalize && idx === arr.length - 1) res = finalize(res, arr);
    
    return res;
  }];

  if (typeof init !== 'undefined') args.push(init);

  return arr.reduce(...args);
}