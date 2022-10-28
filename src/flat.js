export default function flat(level = -1) {
  return doFlat.call(this);

  function doFlat(lv = 1) {
    const res = [];

    for (let i = 0; i < this.length; i++) {
      const item = this[i];

      if (Array.isArray(item)) {
        if (level === -1 || (level !== -1 && lv <= level)) {
          const args = [item];
          if (level !== -1) args.push(lv + 1);
          res.push(...doFlat.call(...args));
        } else {
          res.push(item);
        }
      } else {
        res.push(item);
      }
    }

    return res;
  }
}