require('../prod/array-x');

describe('sample() without parameters', () => {
  it('should return empty array', () => {
    expect(
      [1,2,3,4,5,6].x.sample()
    ).toEqual([]);
  });
});

describe('sample() with only size parameter', () => {
  it('should return each item wrapped in array for size 1', () => {
    expect(
      [1,2,3,4,5,6].x.sample(1)
    ).toEqual([ [1],[2],[3],[4],[5],[6] ]);
  });
  it('should return array of frames of given size', () => {
    expect(
      [1,2,3,4,5,6].x.sample(2)
    ).toEqual([ [1,2],[2,3],[3,4],[4,5],[5,6] ]);
  });
});

describe('sample() with all parameters', () => {
  it('should return every n-th item wrapped in array for size 1', () => {
    expect(
      [1,2,3,4,5,6].x.sample(1,3)
    ).toEqual([ [1],[4] ]);
  });
  it('should return samples of given size from every n-th item', () => {
    expect(
      [1,2,3,4,5,6].x.sample(2,2)
    ).toEqual([ [1,2],[3,4],[5,6] ]);
  });
  it('should return non-adjacent samples of given size', () => {
    expect(
      [1,2,3,4,5,6].x.sample(2,3)
    ).toEqual([ [1,2],[4,5] ]);
  });
});