require('../prod/array-x');

describe('generate() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.generate()
    ).toEqual([1,2,3,4]);
  });
});

describe('generate() with length parameter only', () => {
  it('should put undefined', () => {
    expect(
      [1,2].x.generate(4)
    ).toEqual([1,2,undefined,undefined]);
  });
});

describe('generate() with all parameters', () => {
  it('should return slice of array if given array length >= given length', () => {
    expect(
      [1,2,3,4,5,6].x.generate(4)
    ).toEqual([1,2,3,4]);
    expect(
      [1,2,3,4].x.generate(4)
    ).toEqual([1,2,3,4]);
  });
  it('should leave existing items', () => {
    expect(
      [1,2].x.generate(4, 0)
    ).toEqual([1,2,0,0]);
  });
  it('should put given value to get given array length', () => {
    expect(
      [].x.generate(4, 10)
    ).toEqual([10,10,10,10]);
  });
  it('should put given value by index to get given array length', () => {
    expect(
      [].x.generate(4, idx => idx + 1)
    ).toEqual([1,2,3,4]);
  });
  it('should put given value by existing values to get given array length', () => {
    expect(
      [1].x.generate(4, (idx, curr) => curr[curr.length - 1] * 10)
    ).toEqual([1,10,100,1000]);
  });
});