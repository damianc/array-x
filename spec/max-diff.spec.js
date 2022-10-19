require('../prod/array-x');

describe('maxDiff() on empty or one-item array', () => {
  it('should return undefined for empty array', () => {
    expect(
      [].x.maxDiff()
    ).toEqual(undefined);
  });
  it('should return undefined for one-item array', () => {
    expect(
      [1].x.maxDiff()
    ).toEqual(undefined);
  });
});

describe('maxDiff() with default comparer', () => {
  it('should return max absolute diff for any items', () => {
    expect(
      [20,80,40,10].x.maxDiff()
    ).toEqual(70);
  });
});

describe('maxDiff() with custom comparer', () => {
  it('should return max diff (or other op results) for any items', () => {
    expect(
      [20,80,40,10].x.maxDiff(
        (l, r) => l / r
      )
    ).toEqual(8);
  });
});