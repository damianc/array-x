require('../prod/array-x');

describe('expandToLength() without parameters', () => {
  it('should return entire input array', () => {
    expect(
      [1,2,3,4].x.expandToLength()
    ).toEqual([1,2,3,4]);
  });
});

describe('expandToLength() with only len parameter', () => {
  it('should return entire input array', () => {
    expect(
      [1,2,3,4].x.expandToLength(8)
    ).toEqual([1,2,3,4]);
  });
});

describe('expandToLength() with callback parameter', () => {
  it('should take 2 items to (a,b) callback to compute another item', () => {
    expect(
      [1,1].x.expandToLength(8, (a, b) => a + b)
    ).toEqual([1,1,2,3,5,8,13,21]);
  });
  it('should take 2 items to (...args) callback to compute another item', () => {
    expect(
      [1,1].x.expandToLength(8, (...args) => args[0] + args[1])
    ).toEqual([1,1,2,3,5,8,13,21]);
  });
});

describe('expandToLength() with too short input array', () => {
  it('should take 0 as placeholder value', () => {
    expect(
      [1].x.expandToLength(6, (a, b) => a + b)
    ).toEqual([1,1,2,3,5,8]);
  });
  it('should take placeholder value given as 4th parameter', () => {
    expect(
      [1].x.expandToLength(6, (a, b) => a + b, 2, 1)
    ).toEqual([1,2,3,5,8,13]);
  });
});

describe('expandToLength() with empty input array', () => {
  it('should take 0 as placeholder value', () => {
    expect(
      [].x.expandToLength(6, (a, b) => a + b + 1)
    ).toEqual([1,2,4,7,12,20]);
  });
  it('should take placeholder value given as 4th parameter', () => {
    expect(
      [].x.expandToLength(6, (a, b) => a + b, 2, 1)
    ).toEqual([2,3,5,8,13,21]);
  });
});

describe('expandToLength() with prev parameter different than arity of callback', () => {
  it('should take value of prev parameter', () => {
    expect(
      [1,2,3,4].x.expandToLength(8, (a, b) => a + b, 3)
    ).toEqual([1,2,3,4,5,7,9,12]);
  });
});