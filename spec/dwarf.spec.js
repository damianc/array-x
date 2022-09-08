require('../prod/array-x');

describe('dwarf()', () => {
  it('should disable adding new items to array', () => {
    const arr = [1,2,3,4];
    arr.x.dwarf();
    expect(() => {
      arr.push(5);
    }).toThrowError(TypeError);
    expect(arr).toEqual([1,2,3,4]);
  });

  it('should not disable deleting items from array', () => {
    const arr = [1,2,3,4];
    arr.x.dwarf();
    arr.pop();
    expect(arr).toEqual([1,2,3]);
  });

  it('should not disable changing items in array', () => {
    const arr = [1,2,3,4];
    arr.x.dwarf();
    arr[0] = 100;
    expect(arr).toEqual([100,2,3,4]);
  });
});