require('../prod/array-x');

beforeEach(() => {
  this.numArr = [5, 6, 7, 8];
  this.strArr = ['foo', 'ba', 'rbaz'];
  this.mapper = str => str.length;
});

describe('findMinIndex()', () => {
  it('should return 0', () => {
    expect(this.numArr.x.findMinIndex()).toEqual(0);
  });
  it('should return 1', () => {
    expect(this.strArr.x.findMinIndex(this.mapper)).toEqual(1);
  });

  describe('with tiny arrays', () => {
    it('should work with 2 items', () => {
      expect([5,8].x.findMinIndex()).toEqual(0);
      expect(['foo', 'xx'].x.findMinIndex(this.mapper)).toEqual(1);
    });
  });
});