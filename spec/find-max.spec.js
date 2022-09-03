require('../prod/array-x');

const mock = require('./support/mock');
const { minMax } = require('./support/samples');

const pre = mock(minMax, {
  empty: null,
  num: {
    oneItem: 20,
    twoItems: 20,
    moreItems: 40
  },
  str: {
    oneItem: 'xx',
    twoItems: 'xx',
    moreItems: 'xxx'
  }
});

beforeEach(() => {
  this.mapper = str => str.length;
});

describe('findMax() with empty array', () => {
  it('should work without mapper', () => {
    const [input, output] = pre(t => t.empty);
    expect(input.x.findMax()).toEqual(output);
  });
  it('should work with mapper', () => {
    const [input, output] = pre(t => t.empty);
    expect(input.x.findMax(this.mapper)).toEqual(output);
  });
});

describe('findMax() without mapper', () => {
  it('should handle one-item array', () => {
    const [input, output] = pre(t => t.num.oneItem);
    expect(input.x.findMax()).toEqual(output);
  });
  it('should handle two-items array', () => {
    const [input, output] = pre(t => t.num.twoItems);
    expect(input.x.findMax()).toEqual(output);
  });
  it('should handle 3+ items array', () => {
    const [input, output] = pre(t => t.num.moreItems);
    expect(input.x.findMax()).toEqual(output);
  });
});

describe('findMax() with mapper', () => {
  it('should handle one-item array', () => {
    const [input, output] = pre(t => t.str.oneItem);
    expect(input.x.findMax(this.mapper)).toEqual(output);
  });
  it('should handle two-items array', () => {
    const [input, output] = pre(t => t.str.twoItems);
    expect(input.x.findMax(this.mapper)).toEqual(output);
  });
  it('should handle 3+ items array', () => {
    const [input, output] = pre(t => t.str.moreItems);
    expect(input.x.findMax(this.mapper)).toEqual(output);
  });
});