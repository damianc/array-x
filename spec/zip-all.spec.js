require('../prod/array-x');

describe('zipAll() with empty input', () => {
  it('should return null if nothing is passed', () => {
    expect([1, 2, 3, 4].x.zipAll()).toEqual(null);
    expect([].x.zipAll()).toEqual(null);
  });
  it('should return empty array if no array is non-empty', () => {
    expect([].x.zipAll([])).toEqual([]);
  });
  it('should return empty array if none of 4 arrays is non-empty', () => {
    expect([].x.zipAll([], [], [])).toEqual([]);
  });
  it('should return [X,undefined] entries if passed array is empty', () => {
    expect([1, 2, 3, 4].x.zipAll([])).toEqual(
      [ [1, undefined], [2, undefined], [3, undefined], [4, undefined] ]
    );
  });
  it('should return [X,undefined,undefined] entries if 2 passed arrays are empty', () => {
    expect([1, 2, 3, 4].x.zipAll([], [])).toEqual([
      [1, undefined, undefined], [2, undefined, undefined],
      [3, undefined, undefined], [4, undefined, undefined]
    ]);
  });
});


describe('zipAll() with input of different length', () => {
  it('should return [undefined, X] entries if source array is empty but single input is not empty', () => {
    expect(
      [].x.zipAll([1, 2, 3, 4])
    ).toEqual(
      [ [undefined, 1], [undefined, 2], [undefined, 3], [undefined, 4] ]
    );
  });
  it('should return 3 [undefined, X] entries if source array is one-item and input is not empty', () => {
    expect(
      ['a'].x.zipAll([1, 2, 3, 4])
    ).toEqual(
      [ ['a', 1], [undefined, 2], [undefined, 3], [undefined, 4] ]
    );
  });
  it('should return 3 [X, undefined] entries if source array has 4 items and input is one-item array', () => {
    expect(
      ['a', 'b', 'c', 'd'].x.zipAll([1])
    ).toEqual(
      [ ['a', 1], ['b', undefined], ['c', undefined], ['d', undefined] ]
    );
  });
});

describe('zipAll() with multiple inputs of different length', () => {
  it('should return 2 [undefined, X, undefined] entries if source array is empty but inputs are not empty', () => {
    expect(
      [].x.zipAll([1, 2, 3, 4], ['a', 'b'])
    ).toEqual([
      [undefined, 1, 'a'], [undefined, 2, 'b'],
      [undefined, 3, undefined], [undefined, 4, undefined]
    ]);
  });
  it('should return 2 [undefined, X, undefined] entries if source array is one-item and inputs are not empty', () => {
    expect(
      ['foo'].x.zipAll([1, 2, 3, 4], ['a', 'b'])
    ).toEqual([
      ['foo', 1, 'a'], [undefined, 2, 'b'],
      [undefined, 3, undefined], [undefined, 4, undefined]
    ]);
  });
  it('should return 2 [X, undefined, undefined] entries if source array has 4 items and inputs are not empty', () => {
    expect(
      ['a', 'b', 'c', 'd'].x.zipAll([1], ['foo', 'bar'])
    ).toEqual([
      ['a', 1, 'foo'], ['b', undefined, 'bar'],
      ['c', undefined, undefined], ['d', undefined, undefined]
    ]);
  });
});

describe('zipAll() with input of the same length', () => {
  it('should return matched entries of length 2 for 1 input array', () => {
    expect(
      ['a', 'b'].x.zipAll([1, 2])
    ).toEqual(
      [ ['a', 1], ['b', 2] ]
    );
  });
  it('should return matched entries of length 3 for 2 input arrays', () => {
    expect(
      ['a', 'b'].x.zipAll([1, 2], ['foo', 'bar'])
    ).toEqual(
      [ ['a', 1, 'foo'], ['b', 2, 'bar'] ]
    );
  });
});