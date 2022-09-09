require('../prod/array-x');

beforeEach(() => {
  this.data = [
    { id: 1, title: 'Post 1', authorId: 100 },
    { id: 2, title: 'Post 2', authorId: 102 }
  ];
  this.authors = [
    { id: 100, name: 'John' },
    { id: 101, name: 'Mark' },
    { id: 102, name: 'Adam' }
  ];
});

describe('join1to1()', () => {
  it('should join 1-to-1', () => {
    expect(
      this.data.x.join1to1(
        this.authors,
        'authorId',
        'id',
        'author',
        author => author.name
      )
    ).toEqual([
      { id: 1, title: 'Post 1', authorId: 100, author: 'John' },
      { id: 2, title: 'Post 2', authorId: 102, author: 'Adam' }
    ]);
  });
  it('should use `undefined` if there is no match', () => {
    expect(
      this.data.x.join1to1(
        this.authors.slice(0, 2),
        'authorId',
        'id',
        'author',
        author => author.name
      )
    ).toEqual([
      { id: 1, title: 'Post 1', authorId: 100, author: 'John' },
      { id: 2, title: 'Post 2', authorId: 102, author: undefined }
    ]);
  });
  it('should use `undefined` if item does not have key', () => {
    const dirtyData = [
      { id: 3, title: 'Post 3' }
    ];
    expect(
      [ ...this.data, ...dirtyData ].x.join1to1(
        this.authors,
        'authorId',
        'id',
        'author',
        author => author.name
      )
    ).toEqual([
      { id: 1, title: 'Post 1', authorId: 100, author: 'John' },
      { id: 2, title: 'Post 2', authorId: 102, author: 'Adam' },
      { id: 3, title: 'Post 3', author: undefined }
    ]);
  });
});