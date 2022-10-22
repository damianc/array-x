require('../prod/array-x');

describe('shift() without parameters', () => {
  it('should remove first item', () => {
    const arr = [1,2,3,4];
    const r = arr.x.shift();
    expect(arr).toEqual([2,3,4]);
    expect(r).toEqual([1]);
  });
});

describe('shift() with non-positive parameters', () => {
  it('should remove no item if N is negative', () => {
    const arr = [1,2,3,4];
    const r = arr.x.shift(-2);
    expect(arr).toEqual([1,2,3,4]);
    expect(r).toEqual([]);
  });
  it('should remove no item if N equals 0', () => {
    const arr = [1,2,3,4];
    const r = arr.x.shift(0);
    expect(arr).toEqual([1,2,3,4]);
    expect(r).toEqual([]);
  });
});

describe('shift() with positive parameters', () => {
  it('should remove first item if N equals 1', () => {
    const arr = [1,2,3,4];
    const r = arr.x.shift(1);
    expect(arr).toEqual([2,3,4]);
    expect(r).toEqual([1]);
  });
  it('should remove first two items if N equals 2', () => {
    const arr = [1,2,3,4];
    const r = arr.x.shift(2);
    expect(arr).toEqual([3,4]);
    expect(r).toEqual([1,2]);
  });
});

describe('shift() with excessive parameters', () => {
  it('should remove all items if N is positive', () => {
    const arr = [1,2,3,4];
    const r = arr.x.shift(20);
    expect(arr).toEqual([]);
    expect(r).toEqual([1,2,3,4]);
  });
  it('should remove no item if N is not positive', () => {
    const arr = [1,2,3,4];
    const r = arr.x.shift(-20);
    expect(arr).toEqual([1,2,3,4]);
    expect(r).toEqual([]);
  });
});