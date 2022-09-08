require('../prod/array-x');

describe('fixed()', () => {
  it('should disable adding new items to array', () => {
    const arr = [1,2,3,4];
    arr.x.fixed();
    expect(() => {
      arr.push(5);
    }).toThrowError(TypeError);
    expect(arr).toEqual([1,2,3,4]);
  });

  it('should disable deleting items from array', () => {
    const arr = [1,2,3,4];
    arr.x.fixed();
    expect(() => {
      arr.pop();
    }).toThrowError(TypeError);
    expect(arr).toEqual([1,2,3,4]);
  });

  it('should not disable changing items in array', () => {
    const arr = [1,2,3,4];
    arr.x.fixed();
    arr[0] = 100;
    expect(arr).toEqual([100,2,3,4]);
  });
});