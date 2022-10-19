require('../prod/array-x');

describe('replace() with not all parameters', () => {
  it('should return entire array if no parameter is passed', () => {
    expect(
      [1,2,3,4].x.replace()
    ).toEqual([1,2,3,4]);
  });
  it('should return entire array if only matcher is passed', () => {
    expect(
      [1,2,3,4].x.replace(x => x % 2 === 0)
    ).toEqual([1,2,3,4]);
  });
});

describe('replace() with all parameters and replacer as literal value', () => {
  it('should replace literal value with other literal value', () => {
    expect(
      [1,2,1,2].x.replace(2, 4)
    ).toEqual([1,4,1,4]);
  });
  it('should replace one of literal values with other literal value', () => {
    expect(
      [1,2,3,4].x.replace([3,4,5,6], 10)
    ).toEqual([1,2,10,10]);
  });
  it('should replace matched value with other literal value', () => {
    expect(
      [1,2,3,4].x.replace(x => x % 2 === 0, 10)
    ).toEqual([1,10,3,10]);
  });
});

describe('replace() with all parameters and replacer as callback', () => {
  it('should replace literal value with other value from callback', () => {
    expect(
      [1,2,1,2].x.replace(2, x => x * 10)
    ).toEqual([1,20,1,20]);
  });
  it('should replace one of literal values with other value from callback', () => {
    expect(
      [1,2,3,4].x.replace([3,4,5,6], x => x * 10)
    ).toEqual([1,2,30,40]);
  });
  it('should replace matched value with other value from callback', () => {
    expect(
      [1,2,3,4].x.replace(x => x % 2 === 0, x => x * 10)
    ).toEqual([1,20,3,40]);
  });
});