require('../prod/array-x');

describe('spreadMap()', () => {
  it('should spread array returned from mapper', () => {
    expect(
      [1,2,3,4].x.spreadMap(x => [x, x * x])
    ).toEqual([1,1,2,4,3,9,4,16]);
  });
  it('should handle returned non-iterable item', () => {
    expect(
      [1,2,3,4].x.spreadMap(x => x * x)
    ).toEqual([1,4,9,16]);
  });
});