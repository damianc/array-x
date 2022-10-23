require('../prod/array-x');

beforeEach(() => {
  this.arr = [
    { foo: 10, bar: 20 },
    { foo: 5, bar: 30 },
    { foo: 5, bar: 24 }
  ];
});

describe('sort() without parameters', () => {
  it('should use native sort() method to sort items', () => {
    const arr = [4,3,2,1];
    expect(
      arr.x.sort()
    ).toEqual([1,2,3,4]);
    expect(arr).toEqual([1,2,3,4]);
  });
});

describe('sort() with simple one-sign parameter', () => {
  it('should sort numbers in ascending order', () => {
    expect(
      [3,1,4,2].x.sort('+')
    ).toEqual([1,2,3,4]);
  });
  it('should sort numbers in descending order', () => {
    expect(
      [3,1,4,2].x.sort('-')
    ).toEqual([4,3,2,1]);
  });
  it('should sort strings in ascending order', () => {
    expect(
      ['c','a','d','b'].x.sort('+')
    ).toEqual(['a','b','c','d']);
  });
  it('should sort strings in descending order', () => {
    expect(
      ['c','a','d','b'].x.sort('-')
    ).toEqual(['d','c','b','a']);
  });
});

describe('sort() with given parameter(s)', () => {
  it('should sort numbers', () => {
    expect(
      [{x:2},{x:3},{x:1}].x.sort('x')
    ).toEqual([{x:1},{x:2},{x:3}]);
  });
  it('should sort strings', () => {
    expect(
      [{x:'b'},{x:'c'},{x:'a'}].x.sort('x')
    ).toEqual([{x:'a'},{x:'b'},{x:'c'}]);
  });
});

describe('sort() with one parameter', () => {
  const exp = [{foo:5,bar:30},{foo:5,bar:24},{foo:10,bar:20}];
  it('should sort items by given callback', () => {
    expect(
      this.arr.x.sort((l, r) => l.foo - r.foo)
    ).toEqual(exp);
  });
  it('should sort items by given field in ascending order', () => {
    expect(
      this.arr.x.sort('foo')
    ).toEqual(exp);
  });
  it('should sort items by given field preceded with + sign in ascending order', () => {
    expect(
      this.arr.x.sort('+foo')
    ).toEqual(exp);
  });
  it('should sort items by given field preceded with - sign in descending order', () => {
    expect(
      this.arr.x.sort('-bar')
    ).toEqual(exp);
  });
  it('should sort() like native sort() if given field does not exist', () => {
    const origArr = [...this.arr];
    expect(
      this.arr.x.sort('quux')
    ).toEqual(origArr.sort((l, r) => l.quux - r.quux));
  });
});

describe('sort() with more parameters', () => {
  beforeEach(() => {
    this.origArr = [...this.arr];
  });

  describe('sort() with string + string', () => {
    it('ASC:string + ASC:string', () => {
      expect(
        this.arr.x.sort('foo', 'bar')
      ).toEqual([{foo:5,bar:24},{foo:5,bar:30},{foo:10,bar:20}]);
    });
    it('DESC:string + DESC:string', () => {
      expect(
        this.arr.x.sort('-foo', '-bar')
      ).toEqual([{foo:10,bar:20},{foo:5,bar:30},{foo:5,bar:24}]);
    });
    it('ASC:string + DESC:string', () => {
      expect(
        this.arr.x.sort('foo', '-bar')
      ).toEqual([{foo:5,bar:30},{foo:5,bar:24},{foo:10,bar:20}]);
    });
    it('DESC:string + ASC:string', () => {
      expect(
        this.arr.x.sort('-foo', 'bar')
      ).toEqual([{foo:10,bar:20},{foo:5,bar:24},{foo:5,bar:30}]);
    });
  });

  describe('sort() with callback + callback', () => {
    it('ASC:callback + ASC:callback', () => {
      expect(
        this.arr.x.sort((l, r) => {
          return l.foo - r.foo;
        }, (l, r) => {
          return l.bar - r.bar;
        })
      ).toEqual([{foo:5,bar:24},{foo:5,bar:30},{foo:10,bar:20}]);
    });
    it('DESC:callback + DESC:callback', () => {
      expect(
        this.arr.x.sort((l, r) => {
          return r.foo - l.foo;
        }, (l, r) => {
          return r.bar - l.bar;
        })
      ).toEqual([{foo:10,bar:20},{foo:5,bar:30},{foo:5,bar:24}]);
    });
    it('ASC:callback + DESC:callback', () => {
      expect(
        this.arr.x.sort((l, r) => {
          return l.foo - r.foo;
        }, (l, r) => {
          return r.bar - l.bar;
        })
      ).toEqual([{foo:5,bar:30},{foo:5,bar:24},{foo:10,bar:20}]);
    });
    it('DESC:callback + ASC:callback', () => {
      expect(
        this.arr.x.sort((l, r) => {
          return r.foo - l.foo;
        }, (l, r) => {
          return l.bar - r.bar;
        })
      ).toEqual([{foo:10,bar:20},{foo:5,bar:24},{foo:5,bar:30}]);
    });
  });

  describe('sort() with string + callback', () => {
    it('ASC:string + ASC:callback', () => {
      expect(
        this.arr.x.sort('foo', (l, r) => {
          return l.bar - r.bar;
        })
      ).toEqual([{foo:5,bar:24},{foo:5,bar:30},{foo:10,bar:20}]);
    });
    it('DESC:string + DESC:callback', () => {
      expect(
        this.arr.x.sort('-foo', (l, r) => {
          return r.bar - l.bar;
        })
      ).toEqual([{foo:10,bar:20},{foo:5,bar:30},{foo:5,bar:24}]);
    });
    it('ASC:string + DESC:callback', () => {
      expect(
        this.arr.x.sort('foo', (l, r) => {
          return r.bar - l.bar;
        })
      ).toEqual([{foo:5,bar:30},{foo:5,bar:24},{foo:10,bar:20}]);
    });
    it('DESC:string + ASC:callback', () => {
      expect(
        this.arr.x.sort('-foo', (l, r) => {
          return l.bar - r.bar;
        })
      ).toEqual([{foo:10,bar:20},{foo:5,bar:24},{foo:5,bar:30}]);
    });
  });

  describe('sort() with callback + string', () => {
    it('ASC:callback + ASC:string', () => {
      expect(
        this.arr.x.sort((l, r) => {
          return l.foo - r.foo;
        }, 'bar')
      ).toEqual([{foo:5,bar:24},{foo:5,bar:30},{foo:10,bar:20}]);
    });
    it('DESC:callback + DESC:string', () => {
      expect(
        this.arr.x.sort((l, r) => {
          return r.foo - l.foo;
        }, '-bar')
      ).toEqual([{foo:10,bar:20},{foo:5,bar:30},{foo:5,bar:24}]);
    });
    it('ASC:callback + DESC:string', () => {
      expect(
        this.arr.x.sort((l, r) => {
          return l.foo - r.foo;
        }, '-bar')
      ).toEqual([{foo:5,bar:30},{foo:5,bar:24},{foo:10,bar:20}]);
    });
    it('DESC:callback + ASC:string', () => {
      expect(
        this.arr.x.sort((l, r) => {
          return r.foo - l.foo;
        }, 'bar')
      ).toEqual([{foo:10,bar:20},{foo:5,bar:24},{foo:5,bar:30}]);
    });
  });
});