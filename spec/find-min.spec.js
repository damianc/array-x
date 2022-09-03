require('../prod/array-x');

beforeEach(() => {
  this.numArr = [5, 6, 7, 8];
  this.strArr = ['foo', 'ba', 'rbaz'];
  this.mapper = str => str.length;
});

describe('findMin()', () => {
  it('should return 5', () => {
    expect(this.numArr.x.findMin()).toEqual(5);
  });
  it('should return "ba"', () => {
    expect(this.strArr.x.findMin(this.mapper)).toEqual('ba');
  });

  describe('with tiny arrays', () => {
    it('should work with 2 items', () => {
      expect([5,8].x.findMin()).toEqual(5);
      expect(['foo', 'xx'].x.findMin(this.mapper)).toEqual('xx');
    });
  });
});