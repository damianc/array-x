require('../prod/array-x');

beforeEach(() => {
  this.obj = [{
    foo: {
      bar: [1, 2, { baz: 120 }]
    }
  }, {
    foo: {
      bar: [3, 4, { baz: 340 }]
    }
  }, {
    foo: {
      bar: [5, 6, { baz: 560 }]
    }
  }];
});

describe('pluck() without parameters', () => {
  it('should return entire items', () => {
    expect(
      this.obj.x.pluck()
    ).toEqual(this.obj);
  });
});

describe('pluck() with empty string', () => {
  it('should return entire items', () => {
    expect(
      this.obj.x.pluck('')
    ).toEqual(this.obj);
  });
});

describe('pluck() with invalid path', () => {
  it('should return undefined', () => {
    expect(
      this.obj.x.pluck('quux')
    ).toEqual([undefined,undefined,undefined]);
  });
});

describe('pluck() with invalid, too long path', () => {
  it('should return undefined', () => {
    expect(
      this.obj.x.pluck('foo.bar.baz.quux')
    ).toEqual([undefined,undefined,undefined]);
  });
});

describe('pluck() with valid path', () => {
  it('should return respective value', () => {
    expect(
      this.obj.x.pluck('foo.bar[2].baz')
    ).toEqual([120,340,560]);
  });
});