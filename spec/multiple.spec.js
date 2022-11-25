require('../prod/array-x');

describe('multiple() without parameters', () => {
  it('should return empty array', () => {
    expect(
      [1,2,3,4].x.multiple()
    ).toEqual([]);
  });
});

describe('multiple() with parameters', () => {
  it('should return items from given indexes', () => {
    expect(
      [1,2,3,4].x.multiple([1,3])
    ).toEqual([2,4]);
  });
  it('should use undefined if there is no item under given index', () => {
    expect(
      [1,2,3,4].x.multiple([3,6])
    ).toEqual([4,undefined]);
  });
  it('should return array of undefined if all indexes are not present in array', () => {
    expect(
      [1,2,3,4].x.multiple([4,5])
    ).toEqual([undefined,undefined]);
  });
});