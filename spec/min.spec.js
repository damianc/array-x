require('../prod/array-x');

beforeEach(() => {
  this.numArr = [5, 6, 7, 8];
  this.strArr = ['foo', 'ba', 'rbaz'];
  this.mapper = str => str.length;
});

describe('min()', () => {
  it('should return 5', () => {
    expect(this.numArr.x.min()).toEqual(5);
  });
  it('should return 2', () => {
    expect(this.strArr.x.min(this.mapper)).toEqual(2);
  });

  describe('with tiny arrays', () => {
    it('should work with 2 items', () => {
      expect([5,8].x.min()).toEqual(5);
      expect(['foo', 'xx'].x.min(this.mapper)).toEqual(2);
    });
  });
});