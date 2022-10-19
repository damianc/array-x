const differ = function (comparer) {
  return {
    local(arr, cb = null) {
      if (arr.length < 2) return;
      if (!cb) {
          cb = (l,r) => Math.abs(l-r);
      }
      let diff = cb(arr[0], arr[1]);
      return arr.slice(0,-1).reduce((acc, curr, idx) => {
          if (!idx) return acc;
          const d = cb(curr, arr[idx+1]);
          return comparer(d, acc) ? d : acc;
      }, diff);
    },
    global(arr, cb = null) {
      if (arr.length < 2) return;
      if (cb === null) {
        cb = (l, r) => Math.abs(l - r);
      }
      let res = cb(arr[0], arr[1]);
      for (let t1 in arr) {
        for (let t2 in arr) {
          if (t1 === t2) continue;
          const diff = cb(arr[t1], arr[t2]);
          if (comparer(diff, res)) res = diff;
        }
      }
      return res;
    },
    globalAhead(arr, cb = null) {
      if (arr.length < 2) return;
      if (cb === null) {
        cb = (l, r) => Math.abs(l - r);
      }
      let res = cb(arr[0], arr[1]);
      for (let t1 in arr) {
        for (let i = +t1 + 1; i < arr.length; i++) {
          const diff = cb(arr[t1], arr[i]);
          if (comparer(diff, res)) res = diff;
        }
      }
      return res;
    }
  };
}

export const maxDiffer = differ((currentVal, cachedVal) => currentVal > cachedVal);
export const minDiffer = differ((currentVal, cachedVal) => currentVal < cachedVal);