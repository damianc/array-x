require('../prod/array-x');

describe('unzip() with empty input', () => {
  it('should return empty array', () => {
    expect([].x.unzip()).toEqual([]);
  });
});

describe('unzip() with proper input', () => {
  it('should return array of 2 arrays containing matching parts of entries', () => {
    expect(
      [['a', 1], ['b', 2]].x.unzip()
    ).toEqual(
      [ ['a', 'b'], [1, 2] ]
    );
  });
});

describe('unzip() with dirty input', () => {
  it('should ignore extra items of entry', () => {
    expect(
      [['a', 1], ['b', 2, 3, 4]].x.unzip()
    ).toEqual(
      [ ['a', 'b'], [1, 2] ]
    );
  });
  it('should ignore items that are not array', () => {
    expect(
      [['a', 1], 1234, ['b', 2], 'foo'].x.unzip()
    ).toEqual(
      [ ['a', 'b'], [1, 2] ]
    );
  });
});

describe('unzip() with 3+ items arrays', () => {
  it('should return 3 arrays for array with 3-items entries', () => {
    expect(
      [ [1, 'a', 'foo'], [2, 'b', 'bar'], [3, 'c', 'baz'] ].x.unzip()
    ).toEqual(
      [ [1, 2, 3], ['a', 'b', 'c'], ['foo', 'bar', 'baz'] ]
    );
  });
  it('should return 3 arrays for array with 3 and 4-items entries', () => {
    expect(
      [ [1, 'a', 'foo'], [2, 'b', 'bar', 1234], [3, 'c', 'baz', true] ].x.unzip()
    ).toEqual(
      [ [1, 2, 3], ['a', 'b', 'c'], ['foo', 'bar', 'baz'] ]
    );
  });
});