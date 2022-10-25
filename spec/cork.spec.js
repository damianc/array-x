require('../prod/array-x');

describe('cork() without parameter', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.cork()
    ).toEqual([1,2,3,4]);
  });
});

describe('cork() on short array', () => {
  it('should return empty array if given array is empty', () => {
    expect(
      [].x.cork(0)
    ).toEqual([]);
  });
  it('should return one-item array if given array has one item', () => {
    expect(
      [1].x.cork(0)
    ).toEqual([1]);
  });
});

describe('cork() with parameter', () => {
  it('for literal value, should use this value', () => {
    expect(
      [1,2,3,4].x.cork(0)
    ).toEqual([1,0,2,0,3,0,4]);
  });
  it('for array of values, should use array items ignoring extra ones', () => {
    expect(
      [1,2,3,4].x.cork([10,20,30,40,50,60])
    ).toEqual([1,10,2,20,3,30,4]);
  });
  it('for array of values, should use array items repeating this array if it is shorter', () => {
    expect(
      [1,2,3,4].x.cork([10,20])
    ).toEqual([1,10,2,20,3,10,4]);
  });
  it('for callback, should use values returned by callback', () => {
    expect(
      [1,2,3,4].x.cork(
        (curr, next, idx) => (curr + next) / 2
      )
    ).toEqual([1,1.5,2,2.5,3,3.5,4]);
  });
});