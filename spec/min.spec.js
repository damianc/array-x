require('../prod/array-x');

const mock = require('./support/mock');
const { minMax } = require('./support/samples');

const pre = mock(minMax, {
  empty: null,
  num: {
    oneItem: 20,
    twoItems: 10,
    moreItems: 10
  },
  str: {
    oneItem: 2,
    twoItems: 1,
    moreItems: 1
  }
});

beforeEach(() => {
  this.mapper = str => str.length;
});

describe('min() with empty array', () => {
  it('should work without mapper', () => {
    const [input, output] = pre(t => t.empty);
    expect(input.x.min()).toEqual(output);
  });
  it('should work with mapper', () => {
    const [input, output] = pre(t => t.empty);
    expect(input.x.min(this.mapper)).toEqual(output);
  });
});

describe('min() without mapper', () => {
  it('should handle one-item array', () => {
    const [input, output] = pre(t => t.num.oneItem);
    expect(input.x.min()).toEqual(output);
  });
  it('should handle two-items array', () => {
    const [input, output] = pre(t => t.num.twoItems);
    expect(input.x.min()).toEqual(output);
  });
  it('should handle 3+ items array', () => {
    const [input, output] = pre(t => t.num.moreItems);
    expect(input.x.min()).toEqual(output);
  });
});

describe('min() with mapper', () => {
  it('should handle one-item array', () => {
    const [input, output] = pre(t => t.str.oneItem);
    expect(input.x.min(this.mapper)).toEqual(output);
  });
  it('should handle two-items array', () => {
    const [input, output] = pre(t => t.str.twoItems);
    expect(input.x.min(this.mapper)).toEqual(output);
  });
  it('should handle 3+ items array', () => {
    const [input, output] = pre(t => t.str.moreItems);
    expect(input.x.min(this.mapper)).toEqual(output);
  });
});