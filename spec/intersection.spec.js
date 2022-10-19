require('../prod/array-x');

describe('intersection() without parameters or with empty array', () => {
  it('should return empty array', () => {
    expect(
      [1,2,3,4].x.intersection()
    ).toEqual([]);
  });
});

describe('intersection() with non-empty array as input', () => {
  it('should return only words that exist in both sets', () => {
    expect(
      [1,2,3,4].x.intersection([3,4,5,6])
    ).toEqual([3,4]);
  });
});

describe('intersection() in edge cases', () => {
  it('for two entirely different sets should return empty array', () => {
    expect(
      [1,2,3,4].x.intersection([5,6,7,8])
    ).toEqual([]);
  });
  it('for two equal sets should return similar set', () => {
    expect(
      [1,2,3,4].x.intersection([1,2,3,4])
    ).toEqual([1,2,3,4]);
  });
  it('for two equal sets (same values under different indexes) should return set similar to input one', () => {
    expect(
      [1,2,3,4].x.intersection([4,3,2,1])
    ).toEqual([1,2,3,4]);
  });
});