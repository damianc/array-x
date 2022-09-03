require('../prod/array-x');

const arr = {
  empty: [],
  num: {
    oneItem: [20],
    twoItems: [20, 10],
    moreItems: [20, 10, 40]
  },
  str: {
    oneItem: ['xx'],
    twoItems: ['xx', 'x'],
    moreItems: ['xx', 'x', 'xxx']
  }
};

beforeEach(() => {
  this.numArr = [5, 6, 7, 8];
  this.strArr = ['foo', 'ba', 'rbaz'];
  this.mapper = str => str.length;
});

describe('min()', () => {
  it('should return 5', () => {
    expect(arr.num.moreItems.x.min()).toEqual(10);
  });
  it('should return 2', () => {
    expect(arr.str.moreItems.x.min(this.mapper)).toEqual(1);
  });

  describe('with tiny arrays', () => {
    it('should work with 2 items', () => {
      expect([5,8].x.min()).toEqual(5);
      expect(['foo', 'xx'].x.min(this.mapper)).toEqual(2);
    });
  });
});