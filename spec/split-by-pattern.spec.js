require('../prod/array-x');

describe('splitByPattern() with basic parameters', () => {
  it('should select items from array', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.splitByPattern(3, 2)
    ).toEqual([ [1,2,3], [6,7,8] ]);
  });
  it('should return entire array if passed 0 and 0', () => {
    expect(
      [1,2,3,4].x.splitByPattern(0, 0)
    ).toEqual([1,2,3,4]);
  });
  it('should turn negative numbers into 0', () => {
    expect(
      [1,2,3,4].x.splitByPattern(-4, -2)
    ).toEqual([1,2,3,4]);
  });
  it('should return chunks if skip equals 0', () => {
    expect(
      [1,2,3,4,5,6].x.splitByPattern(2, 0)
    ).toEqual([ [1,2], [3,4], [5,6] ]);
  });
  it('should return entire array if take equals 0', () => {
    expect(
      [1,2,3,4].x.splitByPattern(0, 2)
    ).toEqual([1,2,3,4]);
  });
});

describe('splitByPattern() with from parameter', () => {
  it('should start at the beginning if from is negative', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.splitByPattern(3, 2, -2)
    ).toEqual([ [1,2,3], [6,7,8] ]);
  });
  it('should start at the beginning if from equals 0', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.splitByPattern(3, 2, 0)
    ).toEqual([ [1,2,3], [6,7,8] ]);
  });
  it('should start at given index if from is positive', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.splitByPattern(3, 2, 1)
    ).toEqual([ [2,3,4], [7,8] ]);
  });
});

describe('splitByPattern() with rejectStickingTail parameter', () => {
  it('should leave sticking tail by default', () => {
    expect(
      [1,2,3,4,5,6].x.splitByPattern(2, 3)
    ).toEqual([ [1,2], [6] ]);
  });
  it('should cut sticking tail if parameter equals true', () => {
    expect(
      [1,2,3,4,5,6].x.splitByPattern(2, 3, null, true)
    ).toEqual([ [1,2] ]);
  });
  it('should perform no work if there is not sticking tail and parameter equals true', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.splitByPattern(3, 2, null, true)
    ).toEqual([ [1,2,3], [6,7,8] ]);
  });
});