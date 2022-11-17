require('../prod/array-x');

describe('align() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.align()
    ).toEqual([1,2,3,4]);
  });
});

describe('align() with length parameter only', () => {
  it('should return entire array if N = array length', () => {
    expect(
      [1,2,3,4].x.align(4)
    ).toEqual([1,2,3,4]);
  });
  it('should return head of array if N < array length', () => {
    expect(
      [1,2,3,4].x.align(2)
    ).toEqual([1,2]);
  });
  it('should extend array with undefined if N > array length', () => {
    expect(
      [1,2,3,4].x.align(6)
    ).toEqual([undefined,undefined,1,2,3,4]);
  });
});

describe('align() with filling parameter', () => {
  it('should put filling on the left by default', () => {
    expect(
      [1,2].x.align(4, 0)
    ).toEqual([0,0,1,2]);
  });
});

describe('align() with padSide parameter', () => {
  it('should put filling on the left if padSide equals null', () => {
    expect(
      [1,2].x.align(4, 0, null)
    ).toEqual([0,0,1,2]);
  });
  it('should put filling on the left if padSide equals left', () => {
    expect(
      [1,2].x.align(4, 0, 'left')
    ).toEqual([0,0,1,2]);
  });
  it('should put filling on the right if padSide equals right', () => {
    expect(
      [1,2].x.align(4, 0, 'right')
    ).toEqual([1,2,0,0]);
  });
  it('should put filling on the left if padSide equals neither left nor right', () => {
    expect(
      [1,2].x.align(4, 0, 'foo')
    ).toEqual([0,0,1,2]);
  });
});

describe('align() with cutSide parameter', () => {
  it('should cut right side by default', () => {
    expect(
      [1,2,3,4,5,6].x.align(4, 0)
    ).toEqual([1,2,3,4]);
  });
  it('should cut right side if cutSide equals right', () => {
    expect(
      [1,2,3,4,5,6].x.align(4, 0, null, 'right')
    ).toEqual([1,2,3,4]);
  });
  it('should cut left side if cutSide equals left', () => {
    expect(
      [1,2,3,4,5,6].x.align(4, 0, null, 'left')
    ).toEqual([3,4,5,6]);
  });
  it('should cut right side if cutSide equals neither left nor right', () => {
    expect(
      [1,2,3,4,5,6].x.align(4, 0, null, 'foo')
    ).toEqual([1,2,3,4]);
  });
});