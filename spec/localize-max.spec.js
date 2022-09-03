require('../prod/array-x');

const mock = require('./support/mock');
const { minMax } = require('./support/samples');

const pre = mock(minMax, {
  empty: null,
  num: {
    oneItem: [0, 20],
    twoItems: [0, 20],
    moreItems: [2, 40]
  },
  str: {
    oneItem: [0, 'xx'],
    twoItems: [0, 'xx'],
    moreItems: [2, 'xxx']
  }
});

beforeEach(() => {
  this.mapper = str => str.length;
});

describe('localizeMax() with empty array', () => {
  it('should work without mapper', () => {
    const [input, output] = pre(t => t.empty);
    expect(input.x.localizeMax()).toEqual(output);
  });
  it('should work with mapper', () => {
    const [input, output] = pre(t => t.empty);
    expect(input.x.localizeMax(this.mapper)).toEqual(output);
  });
});

describe('localizeMax() without mapper', () => {
  it('should handle one-item array', () => {
    const [input, output] = pre(t => t.num.oneItem);
    expect(input.x.localizeMax()).toEqual(output);
  });
  it('should handle two-items array', () => {
    const [input, output] = pre(t => t.num.twoItems);
    expect(input.x.localizeMax()).toEqual(output);
  });
  it('should handle 3+ items array', () => {
    const [input, output] = pre(t => t.num.moreItems);
    expect(input.x.localizeMax()).toEqual(output);
  });
});

describe('localizeMax() with mapper', () => {
  it('should handle one-item array', () => {
    const [input, output] = pre(t => t.str.oneItem);
    expect(input.x.localizeMax(this.mapper)).toEqual(output);
  });
  it('should handle two-items array', () => {
    const [input, output] = pre(t => t.str.twoItems);
    expect(input.x.localizeMax(this.mapper)).toEqual(output);
  });
  it('should handle 3+ items array', () => {
    const [input, output] = pre(t => t.str.moreItems);
    expect(input.x.localizeMax(this.mapper)).toEqual(output);
  });
});