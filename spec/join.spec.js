require('../prod/array-x');

describe('join() without parameters', () => {
  it('should join items with default separator (,)', () => {
    expect(
      [1,2,3,4].x.join()
    ).toEqual('1,2,3,4');
  });
});

describe('join() with literal value parameter', () => {
  it('should join items with given, empty separator (,)', () => {
    expect(
      [1,2,3,4].x.join('')
    ).toEqual('1234');
  });
  it('should join items with given separator (,)', () => {
    expect(
      [1,2,3,4].x.join('x')
    ).toEqual('1x2x3x4');
  });
});

describe('join() with callback parameter', () => {
  it('should join items with different separators returned from callback', () => {
    expect(
      [1,2,3,4,5].x.join((item, idx, accString) => {
        if (idx === 1) return '-';
        return '';
      })
    ).toEqual('12-345');
  });
  it('should join items with different separator for even numbers', () => {
    expect(
      [1,2,3,4,5,6].x.join((item, idx, accString) => {
        if (item % 2 === 0) return 'x';
        return '-';
      })
    ).toEqual('1-2x3-4x5-6');
  });
  it('should join items with different separator when combined string is of length 2', () => {
    expect(
      [1,2,3,4,5].x.join((item, idx, accString) => {
        if (accString.length === 1) return '-';
        return '';
      })
    ).toEqual('12-345');
  });
});