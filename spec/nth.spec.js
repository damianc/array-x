require('../prod/array-x');

describe('nth() without parameter', () => {
  it('should return undefined', () => {
    expect(
      [1,2,3,4].x.nth()
    ).toEqual(undefined);
  });
});

describe('nth() with non-negative parameter', () => {
  it('should return item from given index', () => {
    expect(
      [1,2,3,4].x.nth(1)
    ).toEqual(2);
  });
  it('should return undefined if given index >= array length', () => {
    expect(
      [1,2,3,4].x.nth(4)
    ).toEqual(undefined);
  });
});

describe('nth() with negative parameter', () => {
  it('should return n-th item from backwards', () => {
    expect(
      [1,2,3,4].x.nth(-1)
    ).toEqual(4);
  });
  it('should return first item if given index equals array length * -1', () => {
    expect(
      [1,2,3,4].x.nth(-4)
    ).toEqual(1);
  });
  it('should return undefined if |given index| > array length', () => {
    expect(
      [1,2,3,4].x.nth(-5)
    ).toEqual(undefined);
  });
});