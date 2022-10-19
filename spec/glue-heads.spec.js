require('../prod/array-x');

describe('glueHeads() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.glueHeads()
    ).toEqual([1,2,3,4]);
  });
});

describe('glueHeads() with only other array', () => {
  it('should return entire concatenated arrays', () => {
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8])
    ).toEqual([1,2,3,4,5,6,7,8]);
  });
});

describe('glueHeads() with two parameters', () => {
  it('should return concatenated equal-length heads of arrays', () => {
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8], 2)
    ).toEqual([1,2,5,6]);
  });
});

describe('glueHeads() with all parameters', () => {
  it('should return concatenated heads of arrays', () => {
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8], 2, 3)
    ).toEqual([1,2,5,6,7]);
  });
});

describe('glueHeads() with non-positive parameters', () => {
  it('should use empty array if leftSize is negative or 0', () => {
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8], -2, 2)
    ).toEqual([5,6]);
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8], 0, 2)
    ).toEqual([5,6]);
  });
  it('should use empty array if rightSize is negative or 0', () => {
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8], 2, -2)
    ).toEqual([1,2]);
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8], 2, 0)
    ).toEqual([1,2]);
  });
  it('should use empty arrays if leftSize and rightSize are negative or 0', () => {
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8], -2, 0)
    ).toEqual([]);
  });
});

describe('glueHeads() with excessive parameters', () => {
  it('should use entire input array if leftSize is excessive', () => {
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8], 20, 2)
    ).toEqual([1,2,3,4,5,6]);
  });
  it('should use entire passed array if rightSize is excessive', () => {
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8], 2, 20)
    ).toEqual([1,2,5,6,7,8]);
  });
  it('should use entire arrays if leftSize and rightSize are excessive', () => {
    expect(
      [1,2,3,4].x.glueHeads([5,6,7,8], 20)
    ).toEqual([1,2,3,4,5,6,7,8]);
  });
});