require('../prod/array-x');

describe('diff() without parameters or with empty array', () => {
  it('should return input array', () => {
    expect(
      [1,2,3,4].x.diff()
    ).toEqual([1,2,3,4]);
  });
});

describe('diff() with non-empty array as input', () => {
  it('should return words only present in input array', () => {
    expect(
      [1,2,3,4].x.diff([3,4,5,6])
    ).toEqual([1,2]);
  });
});

describe('diff() in edge cases', () => {
  it('for two entirely different sets should return input array', () => {
    expect(
      [1,2,3,4].x.diff([5,6,7,8])
    ).toEqual([1,2,3,4]);
  });
  it('for two equal sets should return empty array', () => {
    expect(
      [1,2,3,4].x.diff([1,2,3,4])
    ).toEqual([]);
  });
  it('for two equal sets (same values under different indexes) should return empty array', () => {
    expect(
      [1,2,3,4].x.diff([4,3,2,1])
    ).toEqual([]);
  });
});