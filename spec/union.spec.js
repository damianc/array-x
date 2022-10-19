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
      [1,2,3,4].x.union([5,6,7,8])
    ).toEqual([1,2,3,4,5,6,7,8]);
  });
});