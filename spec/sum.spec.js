require('../prod/array-x');

describe('sum() with empty array', () => {
  it('should return `null` without mapper', () => {
    expect([].x.sum()).toEqual(null);
  });
  it('should return `null` with mapper', () => {
    expect([].x.sum(str => str.length)).toEqual(null);
  });
});

describe('sum() without mapper', () => {
  it('should handle one-item array', () => {
    expect([1].x.sum()).toEqual(1);
  });
  it('should handle two-items array', () => {
    expect([1,2].x.sum()).toEqual(3);
  });
  it('should handle 3+ items array', () => {
    expect([1,2,3,4].x.sum()).toEqual(10);
  });
});

describe('sum() with mapper', () => {
  it('should handle one-item array', () => {
    expect(['xx'].x.sum(str => str.length)).toEqual(2);
  });
  it('should handle two-items array', () => {
    expect(['xx', 'x'].x.sum(str => str.length)).toEqual(3);
  });
  it('should handle 3+ items array', () => {
    expect(['xx', 'x', 'xxx', 'xxxx'].x.sum(str => str.length)).toEqual(10);
  });
});