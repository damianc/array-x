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
    let sourceValue;

    if (sourceIndex[keyValue]) {
      sourceValue = sourceIndex[keyValue][0];
    }

    return {
      ...item,
      [targetNewKey]: sourceValue
    };
  });
}