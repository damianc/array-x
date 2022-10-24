require('../prod/array-x');

describe('glue() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.glue()
    ).toEqual([1,2,3,4]);
  });
});

describe('glue() with only other array', () => {
  it('should return input array concatenated with passed array', () => {
    expect(
      [1,2,3,4].x.glue([5,6,7,8])
    ).toEqual([1,2,3,4,5,6,7,8]);
  });
});

describe('glue() with other array and head', () => {
  it('should return head of input array concatenated with passed array', () => {
    expect(
      [1,2,3,4].x.glue([5,6,7,8], 2)
    ).toEqual([1,2,7,8]);
  });
});

describe('glue() with all parameters', () => {
  it('should return head of input array concatenated with tail of passed array', () => {
    expect(
      [1,2,3,4].x.glue([5,6,7,8], 2, 2)
    ).toEqual([1,2,7,8]);
  });
});

describe('glue with non-positive parameters', () => {
  it('should use empty array if head is negative or 0', () => {
    expect(
      [1,2,3,4].x.glue([5,6,7,8], -2, 2)
    ).toEqual([7,8]);
    expect(
      [1,2,3,4].x.glue([5,6,7,8], 0, 2)
    ).toEqual([7,8]);
  });
  it('should use empty array if tail is negative or 0', () => {
    expect(
      [1,2,3,4].x.glue([5,6,7,8], 2, -2)
    ).toEqual([1,2]);
    expect(
      [1,2,3,4].x.glue([5,6,7,8], 2, 0)
    ).toEqual([1,2]);
  });
  it('should use empty arrays if head and tail are negative or 0', () => {
    expect(
      [1,2,3,4].x.glue([5,6,7,8], -2, 0)
    ).toEqual([]);
  });
});

describe('glue with excessive parameters', () => {
  it('should take entire input array if head is excessive', () => {
    expect(
      [1,2,3,4].x.glue([5,6,7,8], 10, 2)
    ).toEqual([1,2,3,4,7,8]);
  });
  it('should take entire passed array if tail is excessive', () => {
    expect(
      [1,2,3,4].x.glue([5,6,7,8], 2, 10)
    ).toEqual([1,2,5,6,7,8]);
  });
  it('should take entire arrays if head and tail are excessive', () => {
    expect(
      [1,2,3,4].x.glue([5,6,7,8], 10, 10)
    ).toEqual([1,2,3,4,5,6,7,8]);
  });
});