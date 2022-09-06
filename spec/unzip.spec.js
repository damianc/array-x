require('../prod/array-x');

describe('unzip() with empty input', () => {
  it('should return array of 2 empty arrays', () => {
    expect([].x.unzip()).toEqual([[], []]);
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