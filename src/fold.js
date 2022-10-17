export default function fold(coverSelector = (item) => item) {
  const copy = [...this];

  Object.defineProperty(copy, 'x', {
    value: {
      unfold: (idx) => copy[idx]
    }
  });

  Object.defineProperty(copy, 'unshift', {
    value: (...items) => {
      const revItems = [...items].reverse();
      copy.reverse();
      copy.push(...revItems);
      copy.reverse();
    }
  });

  return new Proxy(copy, {
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