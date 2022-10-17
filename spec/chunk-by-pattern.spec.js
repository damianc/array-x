require('../prod/array-x');

describe('chunkByPattern() with one size', () => {
  it('should wrap array items into chunks of the size', () => {
    expect(
      [1,2,3,4,5,6].x.chunkByPattern(2)
    ).toEqual([ [1,2], [3,4], [5,6] ]);
  });
});

describe('chunkByPattern() with multiple sizes', () => {
  it('should wrap array items into chunks of respective size', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.chunkByPattern(2, 4)
    ).toEqual([ [1,2], [3,4,5,6], [7,8] ]);
  });
});

describe('chunkByPattern() with sticking tail', () => {
  it('should keep unmatched tail by default', () => {
    expect(
      [1,2,3,4,5,6].x.chunkByPattern(2, 3)
    ).toEqual([ [1,2], [3,4,5], [6] ]);
  });
  it('should cut unmatched tail if last parameter is true', () => {
    expect(
      [1,2,3,4,5,6].x.chunkByPattern(2, 3, true)
    ).toEqual([ [1,2], [3,4,5] ]);
  });
});

describe('chunkByPattern() with empty input', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.chunkByPattern()
    ).toEqual([1,2,3,4]);
  });
});

describe('chunkByPattern() with negative numbers and/or zero', () => {
  it('should return entire array if there is no positive number', () => {
    expect(
      [1,2,3,4].x.chunkByPattern(0, -2)
    ).toEqual([1,2,3,4]);
  });
  it('should take into account only positive numbers', () => {
    expect(
      [1,2,3,4].x.chunkByPattern(0, 2, -2)
    ).toEqual([ [1,2], [3,4] ]);
  });
});