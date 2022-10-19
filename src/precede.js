export default function precede(appendix = [], fillWithUndefined = false) {
  function getAppendix(item, idx) {
    if (typeof appendix === 'function') {
      return [appendix(item, idx)];
    } else if (Array.isArray(appendix)) {
      const empty = [];
      if (fillWithUndefined) empty.push(undefined);
      return idx in appendix ? [appendix[idx]] : empty;
    } else {
      return [appendix];
    }
  }

  const copy = [...this];

  return this.reduce((acc, curr, idx) => {
    return [
      ...acc,
      ...getAppendix(curr, idx),
      curr
    ];
  }, []);
}