require('../prod/array-x');

describe('reversed()', () => {
  it('should return reversed version of array', () => {
    expect([1,2,3,4].x.reversed()).toEqual([4,3,2,1]);
  });
  it('should not alter original array', () => {
    const arr = [1,2,3,4];
    const rev = arr.x.reversed();
    expect(rev).toEqual([4,3,2,1]);
    expect(arr).toEqual([1,2,3,4]);
  });
});