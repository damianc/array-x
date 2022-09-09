export default function join1ToMany(
  sourceArr,
  targetKey,
  sourceKey,
  targetNewKey,
  sourceValueSelector = null
) {
  const sourceIndex = sourceArr.x.index(sourceKey, sourceValueSelector);

  return this.map(item => {
    let sourceValue = [], keyValue;

    if ((keyValue = item[targetKey]) && sourceIndex[keyValue]) {
      sourceValue = sourceIndex[keyValue];
    }

    return {
      ...item,
      [targetNewKey]: sourceValue
    };
  });
}