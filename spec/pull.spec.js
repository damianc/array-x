require('../prod/array-x');

describe('pull() without parameters', () => {
  it('should pull last item of array', () => {
    const arr = [1,2,3,4];
    const pulled = arr.x.pull();
    expect(arr).toEqual([1,2,3]);
    expect(pulled).toEqual(4);
  });
});

describe('pull() with parameter', () => {
  it('should pull item at given index', () => {
    const arr = [1,2,3,4];
    const pulled = arr.x.pull(2);
    expect(arr).toEqual([1,2,4]);
    expect(pulled).toEqual(3);
  });
  it('should pull no item if index >= array length', () => {
    const arr = [1,2,3,4];
    const pulled = arr.x.pull(4);
    expect(arr).toEqual([1,2,3,4]);
    expect(pulled).toEqual(undefined);
  });
  it('should pull no item if index < -(array length)', () => {
    const arr = [1,2,3,4];
    const pulled = arr.x.pull(-6);
    expect(arr).toEqual([1,2,3,4]);
    expect(pulled).toEqual(undefined);
  });
});