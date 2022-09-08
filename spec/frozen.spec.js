require('../prod/array-x');

describe('frozen()', () => {
  it('should disable adding new items to array', () => {
    const arr = [1,2,3,4];
    arr.x.frozen();
    expect(() => {
      arr.push(5);
    }).toThrowError(TypeError);
    expect(arr).toEqual([1,2,3,4]);
  });

  it('should disable deleting items from array', () => {
    const arr = [1,2,3,4];
    arr.x.frozen();
    expect(() => {
      arr.pop();
    }).toThrowError(TypeError);
    expect(arr).toEqual([1,2,3,4]);
  });

  it('should disable changing items in array', () => {
    const arr = [1,2,3,4];
    arr.x.frozen();
    arr[0] = 100;
    expect(arr).toEqual([1,2,3,4]);
  });
});

describe('frozen() should be accessible by alias', () => {
  it('readonly()', () => {
    const arr = [1,2,3,4];
    arr.x.readonly();
    expect(() => {
      arr.push(5, 6);
      arr.pop();
    }).toThrowError(TypeError);
    arr[0] = 100;
    expect(arr).toEqual([1,2,3,4]);
  });
  it('readOnly()', () => {
    const arr = [1,2,3,4];
    arr.x.readOnly();
    expect(() => {
      arr.push(5, 6);
      arr.pop();
    }).toThrowError(TypeError);
    arr[0] = 100;
    expect(arr).toEqual([1,2,3,4]);
  });
});