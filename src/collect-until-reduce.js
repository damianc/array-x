export default function collectUntilReduce(matchEnd, reducer, reducerInit, inclusive = true) {
  const res = [];

  let acc = reducerInit;

  for (let idx in this) {
    const item = this[idx];
    acc = reducer(acc, item, idx);
    
    const matches = matchEnd(acc, item, +idx);

    if (!matches) {
      res.push(item);
    } else {
      if (inclusive) res.push(item);
      break;
    }
  }

  return res;
}