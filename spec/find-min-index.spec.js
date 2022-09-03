require('../prod/array-x');

const mock = require('./support/mock');
const { minMax } = require('./support/samples');

const pre = mock(minMax, {
  empty: -1,
  num: {
    oneItem: 0,
    twoItems: 1,
    moreItems: 1
  },
  str: {
    oneItem: 0,
    twoItems: 1,
    moreItems: 1
  }
});

beforeEach(() => {
  this.mapper = str => str.length;
});

describe('findMinIndex() with empty array', () => {
  it('should work without mapper', () => {
    const [input, output] = pre(t => t.empty);
    expect(input.x.findMinIndex()).toEqual(output);
  });
  it('should work with mapper', () => {
    const [input, output] = pre(t => t.empty);
    expect(input.x.findMinIndex(this.mapper)).toEqual(output);
  });
});

describe('findMinIndex() without mapper', () => {
  it('should handle one-item array', () => {
    const [input, output] = pre(t => t.num.oneItem);
    expect(input.x.findMinIndex()).toEqual(output);
  });
  it('should handle two-items array', () => {
    const [input, output] = pre(t => t.num.twoItems);
    expect(input.x.findMinIndex()).toEqual(output);
  });
  it('should handle 3+ items array', () => {
    const [input, output] = pre(t => t.num.moreItems);
    expect(input.x.findMinIndex()).toEqual(output);
  });
});

describe('findMinIndex() with mapper', () => {
  it('should handle one-item array', () => {
    const [input, output] = pre(t => t.str.oneItem);
    expect(input.x.findMinIndex(this.mapper)).toEqual(output);
  });
  it('should handle two-items array', () => {
    const [input, output] = pre(t => t.str.twoItems);
    expect(input.x.findMinIndex(this.mapper)).toEqual(output);
  });
  it('should handle 3+ items array', () => {
    const [input, output] = pre(t => t.str.moreItems);
    expect(input.x.findMinIndex(this.mapper)).toEqual(output);
  });
});