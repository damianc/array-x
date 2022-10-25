require('../prod/array-x');

describe('padLeft() with invalid parameters', () => {
  it('should return entire array if no parameter is given', () => {
    expect(
      [1,2,3,4].x.padLeft()
    ).toEqual([1,2,3,4]);
  });
  it('should return entire array if only maxLength is given', () => {
    expect(
      [1,2,3,4].x.padLeft(8)
    ).toEqual([1,2,3,4]);
  });
  it('should return entire array if maxLength equals 0', () => {
    expect(
      [1,2,3,4].x.padLeft(0, 10)
    ).toEqual([1,2,3,4]);
  });
  it('should return entire array if maxLength is negative', () => {
    expect(
      [1,2,3,4].x.padLeft(-2, 10)
    ).toEqual([1,2,3,4]);
  });
});

describe('padLeft() with excessive parameters', () => {
  it('should return entire array if maxLength <= current array length', () => {
    expect(
      [1,2,3,4].x.padLeft(2, 10)
    ).toEqual([1,2,3,4]);
  });
});

describe('padLeft() on empty array', () => {
  it('should return array of given length filled with given value', () => {
    expect(
      [].x.padLeft(4, 10)
    ).toEqual([10,10,10,10]);
  });
});

describe('padLeft() with all valid parameters', () => {
  it('should pad array to given length', () => {
    expect(
      [1,2].x.padLeft(4, 0)
    ).toEqual([0,0,1,2]);
  });
});

describe('padLeft() should be accessible as alias pad()', () => {
  it('should pad array to given length', () => {
    expect(
      [1,2].x.pad(4, 0)
    ).toEqual([0,0,1,2]);
  });
});