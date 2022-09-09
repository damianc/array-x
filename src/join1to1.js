export default function join1to1(
  sourceArr,
  targetKey,
  sourceKey,
  targetNewKey,
  sourceValueSelector = null
) {
  const sourceIndex = sourceArr.x.index(sourceKey, sourceValueSelector);

  return this.map(item => {
    const keyValue = item[targetKey];
    
    return {
      ...item,
      [targetNewKey]: sourceIndex[keyValue] ? sourceIndex[keyValue][0] : undefined
    };
  });
}