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
  },
  mapper: str => str.length
};

describe('min() with empty array', () => {
  it('should work without mapper', () => {
    expect(arr.empty.x.min()).toEqual(-1);
  });
  it('should work with mapper', () => {
    expect(arr.empty.x.min(arr.mapper)).toEqual(-1);
  });
});

describe('min() without mapper', () => {
  it('should handle one-item array', () => {
    expect(arr.num.oneItem.x.min()).toEqual(20);
  });
  it('should handle two-items array', () => {
    expect(arr.num.twoItems.x.min()).toEqual(10);
  });
  it('should handle 3+ items array', () => {
    expect(arr.num.moreItems.x.min()).toEqual(10);
  });
});

describe('min() with mapper', () => {
  it('should handle one-item array', () => {
    expect(arr.str.oneItem.x.min(arr.mapper)).toEqual(2);
  });
  it('should handle two-items array', () => {
    expect(arr.str.twoItems.x.min(arr.mapper)).toEqual(1);
  });
  it('should handle 3+ items array', () => {
    expect(arr.str.moreItems.x.min(arr.mapper)).toEqual(1);
  });
});