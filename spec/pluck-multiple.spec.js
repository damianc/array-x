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

describe('pluckMultiple() without parameters', () => {
  it('should return empty arrays', () => {
    expect(
      this.obj.x.pluckMultiple()
    ).toEqual([ [], [], [] ]);
  });
});

describe('pluckMultiple() with only one path', () => {
  describe('pluckMultiple() with empty string', () => {
    it('should return arrays containing entire object', () => {
      expect(
        this.obj.x.pluckMultiple('')
      ).toEqual([ [this.obj[0]], [this.obj[1]], [this.obj[2]] ]);
    });
  });

  describe('pluckMultiple() with invalid path', () => {
    it('should return arrays containing undefined', () => {
      expect(
        this.obj.x.pluckMultiple('quux')
      ).toEqual([ [undefined], [undefined], [undefined] ]);
    });
  });

  describe('pluckMultiple() with invalid, too long path', () => {
    it('should return arrays containing undefined', () => {
      expect(
        this.obj.x.pluckMultiple('foo.bar[0].baz[10].quux')
      ).toEqual([ [undefined], [undefined], [undefined] ]);
    });
  });

  describe('pluckMultiple() with valid path', () => {
    it('should return arrays containing respective value', () => {
      expect(
        this.obj.x.pluckMultiple('foo.bar[2].baz')
      ).toEqual([ [120], [340], [560] ]);
    });
  });
});

describe('pluckMultiple() with multiple paths', () => {
  it('should match respective value for each path', () => {
    expect(
      this.obj.x.pluckMultiple('foo.bar[0]', 'foo.bar[1]', 'foo.bar[2].baz')
    ).toEqual([ [1,2,120], [3,4,340], [5,6,560] ]);
  });
  it('should use undefined for invalid path', () => {
    expect(
      this.obj.x.pluckMultiple('foo.bar[0]', 'foo.bar[1]', 'foo.bar[10]')
    ).toEqual([ [1,2,undefined], [3,4,undefined], [5,6,undefined] ]);
  });
  it('should use undefined for invalid, too long path', () => {
    expect(
      this.obj.x.pluckMultiple('foo.bar[0]', 'foo.bar[1]', 'foo.bar[0].baz[10].quux')
    ).toEqual([ [1,2,undefined], [3,4,undefined], [5,6,undefined] ]);
  });
  it('should use entire object for empty string', () => {
    expect(
      this.obj.x.pluckMultiple('foo.bar[0]', 'foo.bar[1]', '')
    ).toEqual([ [1,2,this.obj[0]], [3,4,this.obj[1]], [5,6,this.obj[2]] ]);
  });
});