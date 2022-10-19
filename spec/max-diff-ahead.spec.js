require('../prod/array-x');

describe('maxDiffAhead() on empty or one-item array', () => {
  it('should return undefined for empty array', () => {
    expect(
      [].x.maxDiffAhead()
    ).toEqual(undefined);
  });
  it('should return undefined for one-item array', () => {
    expect(
      [1].x.maxDiffAhead()
    ).toEqual(undefined);
  });
});

describe('maxDiffAhead() with default comparer', () => {
  it('should return max absolute diff between item and one of following items', () => {
    expect(
      [10,80,200,20].x.maxDiffAhead()
    ).toEqual(190);
  });
});

describe('maxDiffAhead() with custom comparer', () => {
  it('should return max diff (or other op results) between item and one of following items', () => {
    expect(
      [10,80,200,20].x.maxDiffAhead(
        (l, r) => l - r
      )
    ).toEqual(180);
  });
});