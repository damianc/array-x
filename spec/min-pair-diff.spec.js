require('../prod/array-x');

describe('minPairDiff() on empty or one-item array', () => {
  it('should return undefined for empty array', () => {
    expect(
      [].x.minPairDiff()
    ).toEqual(undefined);
  });
  it('should return undefined for one-item array', () => {
    expect(
      [1].x.minPairDiff()
    ).toEqual(undefined);
  });
});

describe('minPairDiff() with default comparer', () => {
  it('should return min absolute diff for adjacent items', () => {
    expect(
      [20,10,40].x.minPairDiff()
    ).toEqual(10);
  });
});

describe('minPairDiff() with custom comparer', () => {
  it('should return min absolute diff for adjacent items', () => {
    expect(
      [20,10,40].x.minPairDiff(
        (l, r) => l - r
      )
    ).toEqual(-30);
  });
});