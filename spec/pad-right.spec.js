require('../prod/array-x');

describe('padRight() with invalid parameters', () => {
  it('should return entire array if no parameter is given', () => {
    expect(
      [1,2,3,4].x.padRight()
    ).toEqual([1,2,3,4]);
  });
  it('should return entire array if only maxLength is given', () => {
    expect(
      [1,2,3,4].x.padRight(8)
    ).toEqual([1,2,3,4]);
  });
  it('should return entire array if maxLength equals 0', () => {
    expect(
      [1,2,3,4].x.padRight(0, 10)
    ).toEqual([1,2,3,4]);
  });
  it('should return entire array if maxLength is negative', () => {
    expect(
      [1,2,3,4].x.padRight(-2, 10)
    ).toEqual([1,2,3,4]);
  });
});

describe('padRight() with excessive parameters', () => {
  it('should return entire array if maxLength <= current array length', () => {
    expect(
      [1,2,3,4].x.padRight(2, 10)
    ).toEqual([1,2,3,4]);
  });
});

describe('padRight() on empty array', () => {
  it('should return array of given length filled with given value', () => {
    expect(
      [].x.padRight(4, 10)
    ).toEqual([10,10,10,10]);
  });
});

describe('padRight() with all valid parameters', () => {
  it('should pad array to given length', () => {
    expect(
      [1,2].x.padRight(4, 0)
    ).toEqual([1,2,0,0]);
  });
});