require('../prod/array-x');

describe('union() without parameters or with empty array', () => {
  it('should return input array', () => {
    expect(
      [1,2,3,4].x.union()
    ).toEqual([1,2,3,4]);
  });
});

describe('union() with non-empty array as input', () => {
  it('should return words from both sets', () => {
    expect(
      [1,2,3,4].x.union([3,4,5,6])
    ).toEqual([1,2,3,4,5,6]);
  });
});

describe('union() in edge cases', () => {
  it('for two entirely different sets should return concatenated array', () => {
    expect(
      [1,2,3,4].x.union([5,6,7,8])
    ).toEqual([1,2,3,4,5,6,7,8]);
  });
  it('for two equal sets should return similar set', () => {
    expect(
      [1,2,3,4].x.union([1,2,3,4])
    ).toEqual([1,2,3,4]);
  });
  it('for two equal sets (same values under different indexes) should return set similar to input one', () => {
    expect(
      [1,2,3,4].x.union([4,3,2,1])
    ).toEqual([1,2,3,4]);
  });
});