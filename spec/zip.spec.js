require('../prod/array-x');

describe('zip() with empty input', () => {
  it('should return empty array if nothing is passed', () => {
    expect([1, 2, 3, 4].x.zip()).toEqual([]);
  });
  it('should return empty array if passed array is empty', () => {
    expect([1, 2, 3, 4].x.zip([])).toEqual([]);
  });
  it('should return empty array if source array is empty', () => {
    expect([].x.zip([1, 2, 3, 4])).toEqual([]);
  });
});

describe('zip() with input of the same length', () => {
  it('should return matched entries', () => {
    expect(
      ['a', 'b'].x.zip([1, 2])
    ).toEqual(
      [ ['a', 1], ['b', 2] ]
    );
  });
});

describe('zip() with input of different length', () => {
  it('should return min(N,X) entries for N-size array with X-size array passed', () => {
    expect(
      ['a', 'b'].x.zip([1, 2, 3, 4])
    ).toEqual(
      [ ['a', 1], ['b', 2] ]
    );
    expect(
      ['a', 'b', 'c', 'd'].x.zip([1, 2])
    ).toEqual(
      [ ['a', 1], ['b', 2] ]
    );
  });
});

describe('zip() with more arrays', () => {
  it('should return empty array if one of arrays is empty', () => {
    expect(
      ['a', 'b'].x.zip([1, 2, 3, 4], [], ['foo', 'bar', 'baz'])
    ).toEqual([]);
  });
  it('should return one-item array if shortest array contains one item', () => {
    expect(
      ['a', 'b'].x.zip([1], ['foo', 'bar', 'baz'])
    ).toEqual(
      [ ['a', 1, 'foo'] ]
    );
  });
  it('should match items from each of them', () => {
    expect(
      ['a', 'b', 'c', 'd'].x.zip([1, 2, 3, 4], ['foo', 'bar', 'baz', 'quux'])
    ).toEqual(
      [ ['a', 1, 'foo'], ['b', 2, 'bar'], ['c', 3, 'baz'], ['d', 4, 'quux'] ]
    );
  });
});