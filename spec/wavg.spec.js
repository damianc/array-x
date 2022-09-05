require('../prod/array-x');

describe('wavg() with empty array', () => {
  it('should work without weights', () => {
    expect([].x.wavg()).toEqual(null);
  });
  it('should work with weights', () => {
    expect([].x.wavg([1, 2, 3, 4])).toEqual(null);
  });
});

describe('wavg() with weights', () => {
  it('should handle one-item array', () => {
    expect([4].x.wavg([2])).toEqual(4);
  });
  it('should handle two-items array', () => {
    expect([3, 3].x.wavg([3, 2])).toEqual(3);
  });
  it('should handle 3+ items array', () => {
    expect([1, 2, 3, 4].x.wavg([4, 3, 2, 1])).toEqual(2);
  });
});

describe('wavg() with all the same weights', () => {
  it('should equal to avg()', () => {
    const arr = [1, 2, 3, 4];
    expect(arr.x.wavg([4, 4, 4, 4])).toEqual(arr.x.avg());
  });
});