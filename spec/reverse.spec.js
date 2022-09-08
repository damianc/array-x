require('../prod/array-x');

describe('reverse()', () => {
  it('should return reversed version of array', () => {
    expect([1,2,3,4].x.reverse()).toEqual([4,3,2,1]);
  });
  it('should not alter original array', () => {
    const arr = [1,2,3,4];
    const rev = arr.x.reverse();
    expect(rev).toEqual([4,3,2,1]);
    expect(arr).toEqual([1,2,3,4]);
  });
});