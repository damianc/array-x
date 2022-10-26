require('../prod/array-x');

beforeEach(() => {
  this.data = [
    { id: 100, name: 'John' },
    { id: 102, name: 'Adam' },
    { id: 101, name: 'Mark' }
  ];
  this.posts = [
    { id: 1, title: 'Post 1 by John', authorId: 100 },
    { id: 2, title: 'Post 1 by Adam', authorId: 102 },
    { id: 3, title: 'Post 2 by Adam', authorId: 102 },
    { id: 4, title: 'Post 2 by John', authorId: 100 }
  ];
});

describe('joinOneToMany()', () => {
  it('should join 1-to-many', () => {
    expect(
      this.data.slice(0, 2).x.joinOneToMany(
        this.posts,
        'id',
        'authorId',
        'posts',
        post => post.title
      )
    ).toEqual([
      { id: 100, name: 'John', posts: ['Post 1 by John', 'Post 2 by John'] },
      { id: 102, name: 'Adam', posts: ['Post 1 by Adam', 'Post 2 by Adam'] }
    ]);
  });
  it('should use empty array if there is no match', () => {
    expect(
      this.data.x.joinOneToMany(
        this.posts,
        'id',
        'authorId',
        'posts',
        post => post.title
      )
    ).toEqual([
      { id: 100, name: 'John', posts: ['Post 1 by John', 'Post 2 by John'] },
      { id: 102, name: 'Adam', posts: ['Post 1 by Adam', 'Post 2 by Adam'] },
      { id: 101, name: 'Mark', posts: [] }
    ]);
  });
  it('should use empty array if item does not have key', () => {
    const dirtyData = [
      { name: 'Bob' }
    ];
    expect(
      [ ...this.data.slice(0, 2), ...dirtyData ].x.joinOneToMany(
        this.posts,
        'id',
        'authorId',
        'posts',
        post => post.title
      )
    ).toEqual([
      { id: 100, name: 'John', posts: ['Post 1 by John', 'Post 2 by John'] },
      { id: 102, name: 'Adam', posts: ['Post 1 by Adam', 'Post 2 by Adam'] },
      { name: 'Bob', posts: [] }
    ]);
  });
});