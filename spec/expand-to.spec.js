require('../prod/array-x');

describe('expandTo() without parameters', () => {
  it('should return entire input array', () => {
    expect(
      [1,2,3,4].x.expandTo()
    ).toEqual([1,2,3,4]);
  });
});

describe('expandToLength() with only target parameter', () => {
  it('should return entire input array', () => {
    expect(
      [1,2,3,4].x.expandTo(8)
    ).toEqual([1,2,3,4]);
  });
});

describe('expandTo() with callback parameter', () => {
  it('should take 2 items to (a,b) callback to compute another item', () => {
    expect(
      [1,1].x.expandTo(8, (a, b) => a + b)
    ).toEqual([1,1,2,3,5,8]);
  });
  it('should take 2 items to (...args) callback to compute another item', () => {
    expect(
      [1,1].x.expandTo(8, (...args) => args[0] + args[1])
    ).toEqual([1,1,2,3,5,8]);
  });
});

describe('expandTo() with too short input array', () => {
  it('should take 0 as placeholder value', () => {
    expect(
      [1].x.expandTo(8, (a, b) => a + b)
    ).toEqual([1,1,2,3,5,8]);
  });
  it('should take placeholder value given as 4th parameter', () => {
    expect(
      [1].x.expandTo(8, (a, b) => a + b, 2, 1)
    ).toEqual([1,2,3,5,8]);
  });
});

describe('expandTo() with empty input array', () => {
  it('should take 0 as placeholder value', () => {
    expect(
      [].x.expandTo(12, (a, b) => a + b + 1)
    ).toEqual([1,2,4,7,12]);
  });
  it('should take placeholder value given as 4th parameter', () => {
    expect(
      [].x.expandTo(8, (a, b) => a + b, 2, 1)
    ).toEqual([2,3,5,8]);
  });
});

describe('expandTo() with prev parameter different than arity of callback', () => {
  it('should take value of prev parameter', () => {
    expect(
      [1,2,3,4].x.expandTo(12, (a, b) => a + b, 3)
    ).toEqual([1,2,3,4,5,7,9,12]);
  });
});

describe('expandTo() with sticking array as result', () => {
  it('should exclude sticking value by default', () => {
    expect(
      [1,1].x.expandTo(10, (a, b) => a + b)
    ).toEqual([1,1,2,3,5,8]);
  });
  it('should include sticking value if 5th parameter is true', () => {
    expect(
      [1,1].x.expandTo(10, (a, b) => a + b, 2, 0, true)
    ).toEqual([1,1,2,3,5,8,13]);
  });
  it('should include nothing if array is not sticking', () => {
    expect(
      [1,1].x.expandTo(8, (a, b) => a + b, 2, 0, true)
    ).toEqual([1,1,2,3,5,8]);
  });
});

describe('expandTo() with inaccessible target', () => {
  it('should perform max number of iterations', () => {
    expect(
      [1,1].x.expandTo(2500, (a, b) => a + b, 2, 0, true, 10)
    ).toEqual([1,1,2,3,5,8,13,21,34,55,89,144]);
  });
});

describe('expandTo() with callback as target', () => {
  it('should handle expanding in ascending order', () => {
    expect(
      [1].x.expandTo(x => x <= 8, (a, b) => a + b, 2, 1)
    ).toEqual([1,2,3,5,8]);
  });
  it('should handle expanding in descending order', () => {
    expect(
      [1,2].x.expandTo(x => x !== -4, (a, b) => a - b, 2, 0, true)
    ).toEqual([1,2,-1,3,-4]);
  });
});