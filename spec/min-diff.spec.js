require('../prod/array-x');

describe('minDiff() on empty or one-item array', () => {
  it('should return undefined for empty array', () => {
    expect(
      [].x.minDiff()
    ).toEqual(undefined);
  });
  it('should return undefined for one-item array', () => {
    expect(
      [1].x.minDiff()
    ).toEqual(undefined);
  });
});

describe('minDiff() with default comparer', () => {
  it('should return min absolute diff for any items', () => {
    expect(
      [20,80,40,10].x.minDiff()
    ).toEqual(10);
  });
});

describe('minDiff() with custom comparer', () => {
  it('should return min diff (or other op results) for any items', () => {
    expect(
      [20,80,40,10].x.minDiff(
        (l, r) => l / r
      )
    ).toEqual(0.125);
  });
});