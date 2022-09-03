require('../prod/array-x');

describe('min()', () => {
  it('should get 5', () => {
    const arr = [5,6,7,8];
    expect(arr.x.min()).toEqual(5);
  });
});