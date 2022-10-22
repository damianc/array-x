require('../prod/array-x');

describe('pop() without parameters', () => {
  it('should remove last item', () => {
    const arr = [1,2,3,4];
    const r = arr.x.pop();
    expect(arr).toEqual([1,2,3]);
    expect(r).toEqual([4]);
  });
});

describe('pop() with non-positive parameters', () => {
  it('should remove no item if N is negative', () => {
    const arr = [1,2,3,4];
    const r = arr.x.pop(-2);
    expect(arr).toEqual([1,2,3,4]);
    expect(r).toEqual([]);
  });
  it('should remove no item if N equals 0', () => {
    const arr = [1,2,3,4];
    const r = arr.x.pop(0);
    expect(arr).toEqual([1,2,3,4]);
    expect(r).toEqual([]);
  });
});

describe('pop() with positive parameters', () => {
  it('should remove last item if N equals 1', () => {
    const arr = [1,2,3,4];
    const r = arr.x.pop(1);
    expect(arr).toEqual([1,2,3]);
    expect(r).toEqual([4]);
  });
  it('should remove last two items if N equals 2', () => {
    const arr = [1,2,3,4];
    const r = arr.x.pop(2);
    expect(arr).toEqual([1,2]);
    expect(r).toEqual([3,4]);
  });
});

describe('pop() with excessive parameters', () => {
  it('should remove all items if N is positive', () => {
    const arr = [1,2,3,4];
    const r = arr.x.pop(20);
    expect(arr).toEqual([]);
    expect(r).toEqual([1,2,3,4]);
  });
  it('should remove no item if N is not positive', () => {
    const arr = [1,2,3,4];
    const r = arr.x.pop(-20);
    expect(arr).toEqual([1,2,3,4]);
    expect(r).toEqual([]);
  });
});