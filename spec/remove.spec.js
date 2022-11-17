require('../prod/array-x');

describe('remove() without parameters', () => {
  it('should remove no item from array', () => {
    const arr = [1,2,3,4];
    const removed = arr.x.remove();
    expect(arr).toEqual([1,2,3,4]);
    expect(removed).toEqual([]);
  });
});

describe('remove() with parameters', () => {
  it('should remove items that equal given literal value', () => {
    const arr = [1,2,3,2,1];
    const removed = arr.x.remove(2);
    expect(arr).toEqual([1,3,1]);
    expect(removed).toEqual([2,2]);
  });
  it('should remove items that equal one of value from given array', () => {
    const arr = [1,2,3,2,1];
    const removed = arr.x.remove([1,2,4]);
    expect(arr).toEqual([3]);
    expect(removed).toEqual([1,2,2,1]);
  });
  it('should remove items that matches given test callback', () => {
    const arr = [1,2,3,2,1];
    const removed = arr.x.remove(x => x % 2 !== 0);
    expect(arr).toEqual([2,2]);
    expect(removed).toEqual([1,3,1]);
  });
});