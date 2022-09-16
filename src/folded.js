export default function folded(coverSelector = (item) => item) {
  Object.defineProperty(this, 'unfold', {
    value: (idx) => this[idx]
  });

  Object.defineProperty(this, 'unshift', {
    value: (...items) => {
      const revItems = [...items].reverse();
      this.reverse();
      this.push(...revItems);
      this.reverse();
    }
  });

  return new Proxy(this, {
    get(t, k) {
      if (typeof k === 'symbol') return Reflect.get(t, k);

      const isKeyIndex = +k == k;
      if (!isKeyIndex) {
        return Reflect.get(t, k);
      } else {
        const item = t[k];
        return item ? coverSelector(item) : item;
      }
    }
  });
}