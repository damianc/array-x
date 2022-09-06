require('../prod/array-x');

describe('insert() with no parameter', () => {
  it('should return source array', () => {
    expect([1,2,3,4].x.insert()).toEqual([1,2,3,4]);
  });
  it('should return source array if only index is given', () => {
    expect([1,2,3,4].x.insert(2)).toEqual([1,2,3,4]);
  });
});

describe('insert() with empty array', () => {
  it('should insert items in array regardless of given index', () => {
    expect([].x.insert(0, 1, 2)).toEqual([1,2]);
    expect([].x.insert(2, 1, 2)).toEqual([1,2]);
    expect([].x.insert(-2, 1, 2)).toEqual([1,2]);
  });
});

describe('insert() with not empty array and items', () => {
  it('should insert items at the beginning for index 0', () => {
    expect([1,2].x.insert(0,3,4)).toEqual([3,4,1,2]);
  });
  it('should insert items after first one for index 1', () => {
    expect([1,2].x.insert(1,3,4)).toEqual([1,3,4,2]);
  });
  it('should insert items before last one for index -1', () => {
    expect([1,2,3,6].x.insert(-1,4,5)).toEqual([1,2,3,4,5,6]);
  });
  it('should handle negative index', () => {
    expect([1,4,5,6].x.insert(-3,2,3)).toEqual([1,2,3,4,5,6]);
  });
});

describe('insert() with excessive index', () => {
  it('should insert items at the end of array for too large index', () => {
    expect([1,2].x.insert(20,3,4)).toEqual([1,2,3,4]);
  });
  it('should insert items at the beginning of array for too small negative index', () => {
    expect([1,2].x.insert(-20,3,4)).toEqual([3,4,1,2]);
  });
});