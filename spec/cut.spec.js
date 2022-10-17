require('../prod/array-x');

describe('cut() with no parameter', () => {
  it('should return two halves of array of even length', () => {
    expect([1,2,3,4].x.cut()).toEqual([ [1,2], [3,4] ]);
  });
  it('should return right part greater by 1 for array of odd length', () => {
    expect([1,2,3,4,5].x.cut()).toEqual([ [1,2], [3,4,5] ]);
  });
});

describe('cut() with non-negative index', () => {
  it('should return empty array and full array for index 0', () => {
    expect([1,2,3,4].x.cut(0)).toEqual([ [], [1,2,3,4] ]);
  });
  it('should return two-items array on the left for index 2', () => {
    expect([1,2,3,4].x.cut(2)).toEqual([ [1,2], [3,4] ]);
  });
});

describe('cut() with negative index', () => {
  it('should return one-item array on the right for index -1', () => {
    expect([1,2,3,4].x.cut(-1)).toEqual([ [1,2,3], [4] ]);
  });
  it('should return two-items array on the right for index -2', () => {
    expect([1,2,3,4].x.cut(-2)).toEqual([ [1,2], [3,4] ]);
  });
});

describe('cut() with excessive index', () => {
  it('should return full array and empty array for too large index', () => {
    expect([1,2,3,4].x.cut(20)).toEqual([ [1,2,3,4], [] ]);
  });
  it('should return empty array and full array for too small negative index', () => {
    expect([1,2,3,4].x.cut(-20)).toEqual([ [], [1,2,3,4] ]);
  });
});