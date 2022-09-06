require('../prod/array-x');

describe('unzipAll() with empty input', () => {
  it('should return empty array', () => {
    expect([].x.unzipAll()).toEqual([]);
  });
});

describe('unzipAll() with proper input', () => {
  it('should return array of 2 arrays containing matching parts of entries', () => {
    expect(
      [['a', 1], ['b', 2]].x.unzipAll()
    ).toEqual(
      [ ['a', 'b'], [1, 2] ]
    );
  });
});

describe('unzipAll() with dirty input', () => {
  it('should replace lacking items with undefined', () => {
    expect(
      [['a', 1], ['b', 2, 3, 4]].x.unzipAll()
    ).toEqual(
      [ ['a', 'b'], [1, 2], [undefined, 3], [undefined, 4] ]
    );
  });
  it('should ignore items that are not array', () => {
    expect(
      [['a', 1], 1234, ['b', 2], 'foo'].x.unzipAll()
    ).toEqual(
      [ ['a', 'b'], [1, 2] ]
    );
  });
});

describe('unzipAll() with 3+ items arrays', () => {
  it('should return 3 arrays for array with 3-items entries', () => {
    expect(
      [ [1, 'a', 'foo'], [2, 'b', 'bar'], [3, 'c', 'baz'] ].x.unzipAll()
    ).toEqual(
      [ [1, 2, 3], ['a', 'b', 'c'], ['foo', 'bar', 'baz'] ]
    );
  });
  it('should return 4 arrays for array with 3 and 4-items entries', () => {
    expect(
      [ [1, 'a', 'foo'], [2, 'b', 'bar', 1234], [3, 'c', 'baz', true] ].x.unzipAll()
    ).toEqual(
      [ [1, 2, 3], ['a', 'b', 'c'], ['foo', 'bar', 'baz'], [undefined, 1234, true] ]
    );
  });
});