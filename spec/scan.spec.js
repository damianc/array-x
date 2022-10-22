require('../prod/array-x');

describe('scan() without parameters', () => {
  it('should return empty array', () => {
    expect(
      [1,2,3,4].x.scan()
    ).toEqual([]);
  });
});

describe('scan() with empty array', () => {
  it('should return empty array', () => {
    expect(
      [].x.scan((a, c) => a + c)
    ).toEqual([]);
  });
});

describe('scan() with reducer', () => {
  it('should return input array if its length equals 1', () => {
    expect(
      [1].x.scan((a, c) => a + c)
    ).toEqual([1]);
  });
  it('should return array of reduced values of arr[0-1] to arr[0-len]', () => {
    expect(
      [1,2,3,4].x.scan((a, c) => a + c)
    ).toEqual([1,3,6,10]);
  });
  it('should return array of averages of increasing number of input array items', () => {
    expect(
      [1,2,3,4].x.scan((a, c, idx, arr) => {
        let res = a + c;
        if (idx === arr.length - 1) res = res / arr.length;
        return res;
      })
    ).toEqual([1,1.5,2,2.5]);
  });
});

describe('scan() with initial value', () => {
  it('should make use of it', () => {
    expect(
      [1,2,3,4].x.scan((a, c) => a + c, 10)
    ).toEqual([11,13,16,20]);
  });
});