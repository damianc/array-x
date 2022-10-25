require('../prod/array-x');

describe('matchEvery() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.matchEvery()
    ).toEqual([1,2,3,4]);
  });
});

describe('matchEvery() with one tester', () => {
  it('should return entire array if all items matches', () => {
    expect(
      [1,2,3,4].x.matchEvery(x => x <= 10)
    ).toEqual([1,2,3,4]);
  });
  it('should return empty array if no item matches', () => {
    expect(
      [1,2,3,4].x.matchEvery(x => x >= 10)
    ).toEqual([]);
  });
  it('should return array with matching items', () => {
    expect(
      [1,2,3,4].x.matchEvery(x => x % 2 === 0)
    ).toEqual([2,4]);
  });
});

describe('matchEvery() with multiple testers', () => {
  it('should return array with items that match all testers', () => {
    expect(
      [1,2,3,4].x.matchEvery(
        x => x % 2 === 0,
        x => x >= 3
      )
    ).toEqual([4]);
  });
});