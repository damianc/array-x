export default function joinManyTo1(
  sourceArr,
  targetKey,
  sourceKey,
  targetNewKey,
  sourceValueSelector = null
) {
  const sourceIndex = sourceArr.x.index(sourceKey, sourceValueSelector);

  return this.map(item => {
    let sourceColl = [];

    if (item[targetKey] && item[targetKey].length > 0) {
      sourceColl = item[targetKey].map(i => sourceIndex[i] && sourceIndex[i][0]);
      sourceColl = sourceColl.filter(sv => typeof sv !== 'undefined');
    }

    return {
      ...item,
      [targetNewKey]: sourceColl
    };
  });
}