require('../prod/array-x');

describe('includes() without parameters', () => {
  it('should return false', () => {
    expect(
      [1,2,3,4,5,6].x.includes()
    ).toEqual(false);
  });
});

describe('includes() with literal value', () => {
  it('should return true if array contains at least 1 matched item', () => {
    expect(
      [1,2,3,4,5,6].x.includes(2)
    ).toEqual(true);
  });
  it('should return false if array does not contain any matched item', () => {
    expect(
      [1,2,3,4,5,6].x.includes(10)
    ).toEqual(false);
  });
});

describe('includes() with array of values', () => {
  it('should return true if array contains at least 1 matched item from passed array', () => {
    expect(
      [1,2,3,4,5,6].x.includes([2,4])
    ).toEqual(true);
  });
  it('should return false if array does not contain any matched item from passed array', () => {
    expect(
      [1,2,3,4,5,6].x.includes([10,20])
    ).toEqual(false);
  });
});

describe('includes() with callback', () => {
  it('should return true if array contains at least 1 matched by callback', () => {
    expect(
      [1,2,3,4,5,6].x.includes(x => x % 2 === 0)
    ).toEqual(true);
  });
  it('should return false if array does not contain any item matched by callback', () => {
    expect(
      [1,2,3,4,5,6].x.includes(x => x >= 100)
    ).toEqual(false);
  });
});