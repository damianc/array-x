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