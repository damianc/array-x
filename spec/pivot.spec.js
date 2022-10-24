require('../prod/array-x');

beforeEach(() => {
  this.postA = { id: 120, title: 'Post A', author: 'John' };
  this.postB = { id: 121, title: 'Post B', author: 'Mark' };
  this.postC = { id: 122, title: 'Post C', author: 'John' };
  this.posts = [ this.postA, this.postB, this.postC ];
});

describe('pivot() without parameters', () => {
  it('should return null', () => {
    expect(
      this.posts.x.pivot()
    ).toEqual(null);
  });
});

describe('pivot() with only indexKey parameter', () => {
  it('should group by given key and remove this key from items', () => {
    const a = { ...this.postA };
    const b = { ...this.postB };
    const c = { ...this.postC };
    delete a.author;
    delete b.author;
    delete c.author;
    expect(
      this.posts.x.pivot('author')
    ).toEqual({
      John: [ a, c ],
      Mark: [ b ]
    });
  });
  it('for input as array, should group by value under given index and remove this value from item', () => {
    const arr = [ ['f', 1, 'foo'], ['b', 1, 'bar'], ['b', 2, 'baz'] ];
    expect(
      arr.x.pivot(1)
    ).toEqual({
      1: [ ['f','foo'], ['b','bar'] ],
      2: [ ['b','baz'] ]
    });
  });
});

describe('pivot() with valueSelector parameter', () => {
  it('as string, should return value of field', () => {
    expect(
      this.posts.x.pivot('author', 'title')
    ).toEqual({
      John: [ 'Post A', 'Post C' ],
      Mark: [ 'Post B' ]
    });
  });
  it('as number, should return value of field', () => {
    const arr = [ [1, 'foo'], [1, 'bar'], [2, 'baz'] ];
    expect(
      arr.x.pivot(0, 1)
    ).toEqual({
      1: [ 'foo', 'bar' ],
      2: [ 'baz' ]
    });
  });
  it('as callback, should return mapped value', () => {
    expect(
      this.posts.x.pivot('author', p => `[#${p.id}] ${p.title}`)
    ).toEqual({
      John: [ '[#120] Post A', '[#122] Post C' ],
      Mark: [ '[#121] Post B' ]
    });
  });
  it('as callback, should keep entire arrays being items of input array', () => {
    const arr = [ [1,'foo'], [1,'bar'], [2,'baz'] ];
    expect(
      arr.x.pivot(0, arr => arr)
    ).toEqual({
      1: [ [1,'foo'], [1,'bar'] ],
      2: [ [2,'baz'] ]
    });
  });
});

describe('pivot() with keyMapper parameter', () => {
  it('should map key', () => {
    expect(
      this.posts.x.pivot('author', 'title', author => author.toLowerCase())
    ).toEqual({
      john: [ 'Post A', 'Post C' ],
      mark: [ 'Post B' ]
    });
  });
  it('should map key if input is array', () => {
    const arr = [ [1,'foo'], [1,'bar'], [2,'baz'] ];
    expect(
      arr.x.pivot(0, 1, x => x * 10)
    ).toEqual({
      10: [ 'foo', 'bar' ],
      20: [ 'baz' ]
    });
  });
});