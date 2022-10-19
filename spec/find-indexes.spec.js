require('../prod/array-x');

describe('findIndexes() without parameters', () => {
  it('should return empty array', () => {
    expect(
      [1,2,3,4,5,6].x.findIndexes()
    ).toEqual([]);
  });
});

describe('findIndexes() on empty array', () => {
  it('should return empty array', () => {
    expect(
      [].x.findIndexes(x => x % 2 === 0)
    ).toEqual([]);
  });
});

describe('findIndexes() with literal value', () => {
  it('should return array of indexes of matched items', () => {
    expect(
      [1,2,3,4,5,6].x.findIndexes(4)
    ).toEqual([3]);
  });
  it('should return empty array if input array does not contain this value', () => {
    expect(
      [1,2,3,4,5,6].x.findIndexes(10)
    ).toEqual([]);
  });
});

describe('findIndexes() with array of values', () => {
  it('should return array of indexes of items contained in passed array', () => {
    expect(
      [1,2,3,4,5,6].x.findIndexes([2,4,8])
    ).toEqual([1,3]);
  });
  it('should return empty array if input array does not contain any value from passed array', () => {
    expect(
      [1,2,3,4,5,6].x.findIndexes([10,20,30,40])
    ).toEqual([]);
  });
});

describe('findIndexes() with callback', () => {
  it('should return array of indexes of items matching the callback', () => {
    expect(
      [1,2,3,4,5,6].x.findIndexes(x => x % 2 === 0)
    ).toEqual([1,3,5]);
  });
  it('should return empty array if input array does not contain any value matching the callback', () => {
    expect(
      [1,2,3,4,5,6].x.findIndexes(x => x >= 100)
    ).toEqual([]);
  });
});