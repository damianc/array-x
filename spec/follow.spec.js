require('../prod/array-x');

describe('follow() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.follow()
    ).toEqual([1,2,3,4]);
  });
});

describe('follow() with literal value', () => {
  it('should follow each item with this value', () => {
    expect(
      [1,2,3,4].x.follow(10)
    ).toEqual([1,10,2,10,3,10,4,10]);
  });
});

describe('follow() with array', () => {
  it('should follow each item with respective value from this array', () => {
    expect(
      [1,2,3,4].x.follow([10,20,30,40])
    ).toEqual([1,10,2,20,3,30,4,40]);
  });
  it('should ignore extra values', () => {
    expect(
      [1,2,3,4].x.follow([10,20,30,40,50,60])
    ).toEqual([1,10,2,20,3,30,4,40]);
  });
  it('should leave items if passed array is shorter', () => {
    expect(
      [1,2,3,4].x.follow([10,20])
    ).toEqual([1,10,2,20,3,4]);
  });
  it('should use undefined as lacking items if passed array is shorter and second parameter is true', () => {
    expect(
      [1,2,3,4].x.follow([10,20], true)
    ).toEqual([1,10,2,20,3,undefined,4,undefined]);
  });
});

describe('follow() with callback', () => {
  it('should follow each item with result of callback', () => {
    expect(
      [1,2,3,4].x.follow(x => x * 10)
    ).toEqual([1,10,2,20,3,30,4,40]);
  });
});