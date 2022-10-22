require('../prod/array-x');

describe('frame() without parameters', () => {
  it('should return empty array', () => {
    expect(
      [1,2,3,4,5,6].x.frame()
    ).toEqual([]);
  });
});

describe('frame() with invalid parameters', () => {
  it('should return empty array if size equals 0', () => {
    expect(
      [1,2,3,4,5,6].x.frame(0)
    ).toEqual([]);
  });
  it('should return empty array if size is negative', () => {
    expect(
      [1,2,3,4,5,6].x.frame(0)
    ).toEqual([]);
  });
});

describe('frame() with valid parameters', () => {
  it('should return array of possible subsequences of given size by default', () => {
    expect(
      [1,2,3,4,5,6].x.frame(3)
    ).toEqual([ [1,2,3],[2,3,4],[3,4,5],[4,5,6] ]);
  });
  it('should return array of possible subsequences of given or lesser size if second parameter is false ', () => {
    expect(
      [1,2,3,4,5,6].x.frame(3, false)
    ).toEqual([ [1,2,3],[2,3,4],[3,4,5],[4,5,6], [5,6], [6] ]);
  });
});

describe('frame() with excessive parameter', () => {
  it('should return empty array by default', () => {
    expect(
      [1,2,3,4,5,6].x.frame(10)
    ).toEqual([]);
  });
  it('should return possible subsequences if second parameter is false', () => {
    expect(
      [1,2,3,4,5,6].x.frame(10, false)
    ).toEqual([ [1,2,3,4,5,6],[2,3,4,5,6],[3,4,5,6],[4,5,6],[5,6],[6] ]);
  });
  it('should return empty array if parameter is negative', () => {
    expect(
      [1,2,3,4,5,6].x.frame(-10)
    ).toEqual([]);
  });
  it('should return empty array if parameter is negative and second parameter is false', () => {
    expect(
      [1,2,3,4,5,6].x.frame(-10, false)
    ).toEqual([]);
  });
});