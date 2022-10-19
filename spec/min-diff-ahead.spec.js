require('../prod/array-x');

describe('minDiffAhead() on empty or one-item array', () => {
  it('should return undefined for empty array', () => {
    expect(
      [].x.minDiffAhead()
    ).toEqual(undefined);
  });
  it('should return undefined for one-item array', () => {
    expect(
      [1].x.minDiffAhead()
    ).toEqual(undefined);
  });
});

describe('minDiffAhead() with default comparer', () => {
  it('should return min absolute diff between item and one of following items', () => {
    expect(
      [10,80,200,20].x.minDiffAhead()
    ).toEqual(10);
  });
});

describe('minDiffAhead() with custom comparer', () => {
  it('should return min diff (or other op results) between item and one of following items', () => {
    expect(
      [10,80,200,20].x.minDiffAhead(
        (l, r) => l - r
      )
    ).toEqual(-190);
  });
});