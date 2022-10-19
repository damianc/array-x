require('../prod/array-x');

describe('maxPairDiff() on empty or one-item array', () => {
  it('should return undefined for empty array', () => {
    expect(
      [].x.maxPairDiff()
    ).toEqual(undefined);
  });
  it('should return undefined for one-item array', () => {
    expect(
      [1].x.maxPairDiff()
    ).toEqual(undefined);
  });
});

describe('maxPairDiff() with default comparer', () => {
  it('should return max absolute diff for adjacent items', () => {
    expect(
      [20,10,40].x.maxPairDiff()
    ).toEqual(30);
  });
});

describe('maxPairDiff() with custom comparer', () => {
  it('should return max diff for adjacent items', () => {
    expect(
      [20,10,40].x.maxPairDiff(
        (l, r) => l - r
      )
    ).toEqual(10);
  });
});