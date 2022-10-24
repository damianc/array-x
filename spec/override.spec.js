require('../prod/array-x');

describe('override() with no parameter', () => {
  it('should return source array', () => {
    expect([1,2,3,4].x.override()).toEqual([1,2,3,4]);
  });
  it('should return source array if only index is given', () => {
    expect([1,2,3,4].x.override(2)).toEqual([1,2,3,4]);
  });
});

describe('override() with empty array', () => {
  it('should not touch array regardless of given index', () => {
    expect([].x.override(0, 1, 2)).toEqual([]);
    expect([].x.override(2, 1, 2)).toEqual([]);
    expect([].x.override(-2, 1, 2)).toEqual([]);
  });
});

describe('override() with not empty array and items', () => {
  it('should replace items if both arrays are of the same length', () => {
    expect([1,2].x.override(0,3,4)).toEqual([3,4]);
  });
  it('should replace items and ignore excessive ones if input array is larger', () => {
    expect([1,2].x.override(1,3,4,5)).toEqual([1,3]);
  });
  it('should replace N items for N is length of input array and is less than source array length', () => {
    expect([1,2,3,4].x.override(1,5,6)).toEqual([1,5,6,4]);
  });
});

describe('override() with negative index', () => {
  it('should replace last item with new one for index -1', () => {
    expect([1,2,3,4].x.override(-1,5,6)).toEqual([1,2,3,5]);
  });
  it('should replace last two items for index -2 and input array of size 2', () => {
    expect([1,2,3,4].x.override(-2,5,6)).toEqual([1,2,5,6]);
  });
  it('should replace last two items and ignore excessive ones for index -2 and input array of size 4', () => {
    expect([1,2,3,4].x.override(-2,5,6,7,8)).toEqual([1,2,5,6]);
  });
  it('should replace second to last item for index -2 and input array of size 1', () => {
    expect([1,2,3,4].x.override(-2, 5)).toEqual([1,2,5,4]);
  });
});

describe('override() with excessive index', () => {
  it('should not touch source array for too large index', () => {
    expect([1,2].x.override(20,3,4)).toEqual([1,2]);
  });
});

describe('override() with too small negative index', () => {
  it('should replace source array with items if their number equals length of source array', () => {
    expect([1,2].x.override(-20,3,4)).toEqual([3,4]);
  });
  it('should replace source array with items if their number is greater than length of source array', () => {
    expect([1,2].x.override(-20,3,4,5,6)).toEqual([3,4]);
  });
  it('should replace first items of source array if number of items is less than length of source array', () => {
    expect([1,2].x.override(-20,3)).toEqual([3,2]);
  });
});