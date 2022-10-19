require('../prod/array-x');

describe('precede() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.precede()
    ).toEqual([1,2,3,4]);
  });
});

describe('precede() with literal value', () => {
  it('should precede each item with this value', () => {
    expect(
      [1,2,3,4].x.precede(10)
    ).toEqual([10,1,10,2,10,3,10,4]);
  });
});

describe('precede() with array', () => {
  it('should precede each item with respective value from this array', () => {
    expect(
      [1,2,3,4].x.precede([10,20,30,40])
    ).toEqual([10,1,20,2,30,3,40,4]);
  });
  it('should ignore extra values', () => {
    expect(
      [1,2,3,4].x.precede([10,20,30,40,50,60])
    ).toEqual([10,1,20,2,30,3,40,4]);
  });
  it('should leave items if passed array is shorter', () => {
    expect(
      [1,2,3,4].x.precede([10,20])
    ).toEqual([10,1,20,2,3,4]);
  });
  it('should use undefined as lacking items if passed array is shorter and second parameter is true', () => {
    expect(
      [1,2,3,4].x.precede([10,20], true)
    ).toEqual([10,1,20,2,undefined,3,undefined,4]);
  });
});

describe('precede() with callback', () => {
  it('should precede each item with result of callback', () => {
    expect(
      [1,2,3,4].x.precede(x => x * 10)
    ).toEqual([10,1,20,2,30,3,40,4]);
  });
});