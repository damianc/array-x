require('../prod/array-x');

beforeEach(() => {
  this.john = { id: 1, name: 'John', city: 'NY' };
  this.mark = { id: 2, name: 'Mark', city: 'LA' };
  this.adam = { id: 3, name: 'Adam', city: 'LA', extraKey: 'foo' };
  this.data = [ this.john, this.mark, this.adam ];
});

describe('index() with empty array', () => {
  it('should return empty object', () => {
    expect([].x.index('id')).toEqual({});
  });
});

describe('index(string)', () => {
  it('should index data by given key', () => {
    expect(
      this.data.x.index('id')
    ).toEqual({
      1: [ this.john ],
      2: [ this.mark ],
      3: [ this.adam ]
    });
  });
  it('should store item without key under `__unindexed` key', () => {
    expect(
      this.data.x.index('extraKey')
    ).toEqual({
      __unindexed: [ this.john, this.mark ],
      foo: [ this.adam ]
    });
  });
});

describe('index(function)', () => {
  it('should index data by given key being callback result', () => {
    expect(
      this.data.x.index(u => u.name.toLowerCase())
    ).toEqual({
      john: [ this.john ],
      mark: [ this.mark ],
      adam: [ this.adam ]
    });
  });
  it('should store item without result under `__unindexed` key', () => {
    expect(
      this.data.x.index(u => u.extraKey.toUpperCase())
    ).toEqual({
      FOO: [ this.adam ],
      __unindexed: [ this.john, this.mark ]
    });
  });
});

describe('index() with value selector', () => {
  it('index(string, string)', () => {
    expect(
      this.data.x.index('city', 'name')
    ).toEqual({
      NY: [ 'John' ],
      LA: [ 'Mark', 'Adam' ]
    });
  });
  it('index(string, function', () => {
    expect(
      this.data.x.index('city', u => u.name.toUpperCase())
    ).toEqual({
      NY: [ 'JOHN' ],
      LA: [ 'MARK', 'ADAM' ]
    });
  });
  it('index(function, string)', () => {
    expect(
      this.data.x.index(u => u.city, 'id')
    ).toEqual({
      NY: [ 1 ],
      LA: [ 2, 3 ]
    });
  });
  it('index(function, function)', () => {
    expect(
      this.data.x.index(
        u => u.city,
        u => u.id < 10 ? `0${u.id}` : u.id
      )
    ).toEqual({
      NY: [ '01' ],
      LA: [ '02', '03' ]
    });
  });
});

describe('index() with fallback key', () => {
  it('should store unmatched items under given key', () => {
    expect(
      this.data.x.index('extraKey', null, '$unmatched')
    ).toEqual({
      foo: [ this.adam ],
      $unmatched: [ this.john, this.mark ]
    });
  });
});

describe('index() having access to items index', () => {
  it('should be able to index by item index in array', () => {
    expect(
      this.data.x.index(
        (u, idx) => idx
      )
    ).toEqual({
      0: [ this.john ],
      1: [ this.mark ],
      2: [ this.adam ]
    });
  });
  it('should be able to store item index in array', () => {
    expect(
      this.data.x.index(
        'city',
        (u, idx) => idx
      )
    ).toEqual({
      NY: [ 0 ],
      LA: [ 1, 2 ]
    });
  });
});