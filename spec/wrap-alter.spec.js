require('../prod/array-x');

describe('wrapAlter()', () => {
  it('should return altered array even without return keyword in processor', () => {
    const arr = [1,2,3,4];
    const alt = arr.x.wrapAlter(a => {
      a.pop();
      a.push(5);
      a.shift();
      a.unshift(0);
    });
    expect(alt).toEqual([0,2,3,5]);
    expect(arr).toEqual([1,2,3,4]);
  });
  it('should return what has been returned by hand from processor', () => {
    const arr = [1,2,3,4];
    const alt = arr.x.wrapAlter(a => {
      a.pop();
      a.push(5);
      a.shift();
      a.unshift(0);
      return a.slice(2);
    });
    expect(alt).toEqual([3,5]);
    expect(arr).toEqual([1,2,3,4]);
  });
});