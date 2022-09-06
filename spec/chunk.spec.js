require('../prod/array-x');

describe('chunk() with empty or non-positive input', () => {
  it('should return empty array if no size is given', () => {
    expect([1,2,3,4].x.chunk()).toEqual([]);
  });
  it('should return empty array if size equals 0', () => {
    expect([1,2,3,4].x.chunk(0)).toEqual([]);
  });
  it('should return empty array if size is negative', () => {
    expect([1,2,3,4].x.chunk(-1)).toEqual([]);
    expect([1,2,3,4].x.chunk(-2)).toEqual([]);
  });
});

describe('chunk() with positive input', () => {
  it('should return array of 2-items chunks for size = 2', () => {
    expect(
      [1,2,3,4,5,6].x.chunk(2)
    ).toEqual(
      [ [1,2], [3,4], [5,6] ]
    );
  });
  it('should have last item of size less than 2 if array size is not dividable by size', () => {
    expect(
      [1,2,3,4,5].x.chunk(2)
    ).toEqual(
      [ [1,2], [3,4], [5] ]
    );
  });
});