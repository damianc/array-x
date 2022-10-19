require('../prod/array-x');

describe('symDiff() without parameters or with empty array', () => {
  it('should return input array', () => {
    expect(
      [1,2,3,4].x.symDiff()
    ).toEqual([1,2,3,4]);
  });
});

describe('symDiff() with non-empty array as input', () => {
  it('should return words only present in one of sets', () => {
    expect(
      [1,2,3,4].x.symDiff([3,4,5,6])
    ).toEqual([1,2,5,6]);
  });
});

describe('symDiff() in edge cases', () => {
  it('for two entirely symDifferent sets should return concatenated array', () => {
    expect(
      [1,2,3,4].x.symDiff([5,6,7,8])
    ).toEqual([1,2,3,4,5,6,7,8]);
  });
  it('for two equal sets should return empty array', () => {
    expect(
      [1,2,3,4].x.symDiff([1,2,3,4])
    ).toEqual([]);
  });
  it('for two equal sets (same values under different indexes) should return empty array', () => {
    expect(
      [1,2,3,4].x.symDiff([4,3,2,1])
    ).toEqual([]);
  });
});