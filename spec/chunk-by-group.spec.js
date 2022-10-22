require('../prod/array-x');

describe('chunkByGroup() without parameter', () => {
  it('should return array with one chunk being entire input array', () => {
    expect(
      [1,2,3,4,5,6].x.chunkByGroup()
    ).toEqual([ [1,2,3,4,5,6] ]);
  });
});

describe('chunkByGroup() with parameter', () => {
  it('should return array with two chunks depending on whether or not a number is even', () => {
    expect(
      [1,2,3,4,5,6].x.chunkByGroup(x => x % 2 === 0)
    ).toEqual([ [1,3,5], [2,4,6] ]);
  });
  it('should return array with as many chunks as number of first letters of strings', () => {
    expect(
      ['Alabama', 'Texas', 'Illinois', 'Arizona', 'Idaho'].x.chunkByGroup(str => str[0])
    ).toEqual([ ['Alabama','Arizona'], ['Illinois','Idaho'], ['Texas'] ]);
  });
});