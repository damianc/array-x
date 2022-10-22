require('../prod/array-x');

describe('mapReduce() without parameters', () => {
  it('should return sum of every pair of items', () => {
    expect(
      [1,2,3,4,5,6].x.mapReduce()
    ).toEqual([3,7,11]);
  });
});

describe('mapReduce() with only chunkSize parameter', () => {
  it('should return sum of every N items', () => {
    expect(
      [1,2,3,4,5,6].x.mapReduce(3)
    ).toEqual([6,15]);
  });
});

describe('mapReduce() with chunkSize and reducer parameters', () => {
  it('should return sum of every 2 items', () => {
    expect(
      [1,2,3,4,5,6].x.mapReduce(2, (a, b) => a + b)
    ).toEqual([3,7,11]);
  });
  it('should return difference between 2 sibling items', () => {
    expect(
      [1,4,2,6,3,5].x.mapReduce(2, (a, b) => Math.abs(a - b))
    ).toEqual([3,4,2]);
  });
});

describe('mapReduce() with initial value', () => {
  it('as literal value, should use it for every chunk', () => {
    expect(
      [1,2,3,4,5,6].x.mapReduce(2, (a, b) => a + b, 10)
    ).toEqual([13,17,21]);
  });
  it('as callback, should use chunk to determine init value', () => {
    expect(
      [1,2,3,4,5,6].x.mapReduce(2, (a, b) => a + b, ([l, r]) => l * r)
    ).toEqual([5,19,41]);
  });
  it('as callback, should use chunk number to determine init value', () => {
    expect(
      [1,2,3,4,5,6].x.mapReduce(2, (a, b) => a + b, (_, chNum) => chNum)
    ).toEqual([4,9,14]);
  });
});

describe('mapReduce() with last parameter true', () => {
  it('should have no effect for array without sticking tail', () => {
    expect(
      [1,2,3,4,5,6].x.mapReduce(2, (a, b) => a + b, null, true)
    ).toEqual([3,7,11]);
  });
  it('should reject sticking tail if one exists', () => {
    expect(
      [1,2,3,4,5].x.mapReduce(2, (a, b) => a + b, null, true)
    ).toEqual([3,7]);
  });
});

describe('mapReduce() with sticking tail array', () => {
  it('should keep sticking tail by default', () => {
    expect(
      [1,2,3,4,5].x.mapReduce(2, (a, b) => a + b)
    ).toEqual([3,7,5]);
  });
});

describe('mapReduce() with strings', () => {
  it('should handle them properly', () => {
    expect(
      ['<', 'div', '>', '<', 'span', '>'].x.mapReduce(3, (a, b) => a + b)
    ).toEqual(['<div>', '<span>']);
  });
});