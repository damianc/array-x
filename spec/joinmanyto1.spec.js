require('../prod/array-x');

beforeEach(() => {
  this.data = [
    { id: 1, title: 'Post 1', tagsIds: [10,20] },
    { id: 2, title: 'Post 2', tagsIds: [20,40] },
    { id: 3, title: 'Post 3', tagsIds: [] },
    { id: 4, title: 'Post 4' },
  ];
  this.tags = [
    { id: 10, name: 'Tag A' },
    { id: 20, name: 'Tag B' },
    { id: 30, name: 'Tag C' },
    { id: 40, name: 'Tag D' }
  ];
});

describe('joinManyToOne()', () => {
  it('should join many-to-1', () => {
    expect(
      this.data.slice(0,2).x.joinManyToOne(
        this.tags,
        'tagsIds',
        'id',
        'tags',
        tag => tag.name
      )
    ).toEqual([
      { id: 1, title: 'Post 1', tagsIds: [10, 20], tags: ['Tag A', 'Tag B'] },
      { id: 2, title: 'Post 2', tagsIds: [20, 40], tags: ['Tag B', 'Tag D'] }
    ]);
  });
  it('should use empty array if there is no match', () => {
    const dataHead = this.data.slice(0, 2);
    const dirtyData = [
      { id: 5, title: 'Post 5', tagsIds: [30,120] },
      { id: 6, title: 'Post 6', tagsIds: [150] }
    ];
    expect(
      [ ...dataHead, ...dirtyData ].x.joinManyToOne(
        this.tags,
        'tagsIds',
        'id',
        'tags',
        tag => tag.name
      )
    ).toEqual([
      { id: 1, title: 'Post 1', tagsIds: [10, 20], tags: ['Tag A', 'Tag B'] },
      { id: 2, title: 'Post 2', tagsIds: [20, 40], tags: ['Tag B', 'Tag D'] },
      { id: 5, title: 'Post 5', tagsIds: [30, 120], tags: ['Tag C'] },
      { id: 6, title: 'Post 6', tagsIds: [150], tags: [] }
    ]);
  });
  it('should use empty array if item does not have key or has empty array under the key', () => {
    expect(
      this.data.x.joinManyToOne(
        this.tags,
        'tagsIds',
        'id',
        'tags',
        tag => tag.name
      )
    ).toEqual([
      { id: 1, title: 'Post 1', tagsIds: [10, 20], tags: ['Tag A', 'Tag B'] },
      { id: 2, title: 'Post 2', tagsIds: [20, 40], tags: ['Tag B', 'Tag D'] },
      { id: 3, title: 'Post 3', tagsIds: [], tags: [] },
      { id: 4, title: 'Post 4', tags: [] }
    ]);
  });
});