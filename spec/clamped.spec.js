require('../prod/array-x');

describe('clamped() called on empty array', () => {
  it('should allow inserting values from valid range', () => {
    const arr = [].x.clamped(1, 10);
    arr.push(2);
    arr.unshift(3);
    arr[2] = 4;
    expect(arr).toEqual([3,2,4]);
  });
  it('should reduce values from invalid range to nearest range boundary', () => {
    const arr = [].x.clamped(1, 10);
    arr.push(20);
    arr.unshift(0);
    arr[2] = -10;
    expect(arr).toEqual([1,10,1]);
  });
});

describe('clamped() called on non-empty array', () => {
  it('with all valid values should leave all items', () => {
    const arr = [1,2,3,4].x.clamped(1, 10);
    arr.push(5);
    expect(arr).toEqual([1,2,3,4,5]);
  });
  it('with all invalid values should change all items', () => {
    const arr = [-20,-10,0,10,20].x.clamped(1, 10);
    arr.push(8);
    expect(arr).toEqual([1,1,1,10,10,8]);
  });
  it('with valid and invalid values should change invalid items', () => {
    const arr = [-10,2,20,8].x.clamped(1, 10);
    arr.push(6);
    expect(arr).toEqual([1,2,10,8,6]);
  });
});

describe('clamped() with negative values', () => {
  it('of range on the left', () => {
    const arr = [].x.clamped(-10, 10);
    arr.push(-20);
    arr.push(2);
    arr.push(20);
    expect(arr).toEqual([-10, 2, 10]);
  });
  it('of range on both sides', () => {
    const arr = [].x.clamped(-50, -10);
    arr.push(-100);
    arr.push(-40);
    arr.push(-5);
    arr.push(20);
    expect(arr).toEqual([-50, -40, -10, -10]);
  });
});