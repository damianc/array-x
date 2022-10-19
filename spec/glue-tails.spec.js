require('../prod/array-x');

describe('glueTails() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.glueTails()
    ).toEqual([1,2,3,4]);
  });
});

describe('glueTails() with only other array', () => {
  it('should return entire concatenated arrays', () => {
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8])
    ).toEqual([1,2,3,4,5,6,7,8]);
  });
});

describe('glueTails() with two parameters', () => {
  it('should return concatenated equal-length tails of arrays', () => {
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8], 2)
    ).toEqual([3,4,7,8]);
  });
});

describe('glueTails() with all parameters', () => {
  it('should return concatenated tails of arrays', () => {
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8], 2, 3)
    ).toEqual([3,4,6,7,8]);
  });
});

describe('glueTails() with non-positive parameters', () => {
  it('should use empty array if leftSize is negative or 0', () => {
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8], -2, 2)
    ).toEqual([7,8]);
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8], 0, 2)
    ).toEqual([7,8]);
  });
  it('should use empty array if rightSize is negative or 0', () => {
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8], 2, -2)
    ).toEqual([3,4]);
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8], 2, 0)
    ).toEqual([3,4]);
  });
  it('should use empty arrays if leftSize and rightSize are negative or 0', () => {
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8], -2, 0)
    ).toEqual([]);
  });
});

describe('glueTails() with excessive parameters', () => {
  it('should use entire input array if leftSize is excessive', () => {
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8], 20, 2)
    ).toEqual([1,2,3,4,7,8]);
  });
  it('should use entire passed array if rightSize is excessive', () => {
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8], 2, 20)
    ).toEqual([3,4,5,6,7,8]);
  });
  it('should use entire arrays if leftSize and rightSize are excessive', () => {
    expect(
      [1,2,3,4].x.glueTails([5,6,7,8], 20)
    ).toEqual([1,2,3,4,5,6,7,8]);
  });
});