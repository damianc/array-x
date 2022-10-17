require('../prod/array-x');

beforeEach(() => {
  this.blocks = [
    { id: 3, next: 8, data: 'C' },
    { id: 1, next: 2, data: 'A' },
    { id: 8, data: 'D' },
    { id: 2, next: 3, data: 'B' }
  ];
});

describe('refIterator() with empty input', () => {
  it('should return iterator for empty array', () => {
    const iter = [].x.refIterator('id', 'key');
    expect([...iter]).toEqual([]);
    expect([...iter]).toEqual([]);
  });
});

describe('refIterator() with input of one item', () => {
  it('should return iterator for this item', () => {
    const iter = [this.blocks[0]].x.refIterator('id', 'key');
    expect([...iter]).toEqual([this.blocks[0]]);
    expect([...iter]).toEqual([]);
  });
});

describe('refIterator() with invalid key', () => {
  it('of refKey - should return iterator for one-item array', () => {
    const iter = this.blocks.x.refIterator('uuid', 'next');
    expect([...iter]).toEqual([this.blocks[0]]);
    expect([...iter]).toEqual([]);
  });
  it('of nextKey - should return iterator for one-item array', () => {
    const iter = this.blocks.x.refIterator('id', 'nextItem');
    expect([...iter]).toEqual([this.blocks[0]]);
    expect([...iter]).toEqual([]);
  });
  it('of both - should return iterator for one-item array', () => {
    const iter = this.blocks.x.refIterator('uuid', 'nextItem');
    expect([...iter]).toEqual([this.blocks[0]]);
    expect([...iter]).toEqual([]);
  });
});

describe('refIterator() starting from the beginning', () => {
  it('should iterate over 2 items', () => {
    const iter = this.blocks.x.refIterator('id', 'next');
    const path = [...iter].map(block => block.data).join(' -> ');
    expect(path).toEqual('C -> D');
    expect([...iter]).toEqual([]);
  });
});

describe('refIterator() starting from the very first block', () => {
  it('should iterate over all items', () => {
    const iter = this.blocks.x.refIterator('id', 'next', 1);
    const path = [...iter].map(block => block.data).join(' -> ');
    expect(path).toEqual('A -> B -> C -> D');
    expect([...iter]).toEqual([]);
  });
});

describe('refIterator() starting from the very last block', () => {
  it('should iterate over only this item', () => {
    const iter = this.blocks.x.refIterator('id', 'next', 2);
    const path = [...iter].map(block => block.data).join(' -> ');
    expect(path).toEqual('D');
    expect([...iter]).toEqual([]);
  });
});

describe('refIterator() with broken chain', () => {
  it('should iterate over items before break', () => {
    const blocks = [...this.blocks];
    blocks[3].next = 10;
    const iter = blocks.x.refIterator('id', 'next', 1);
    const path = [...iter].map(block => block.data).join(' -> ');
    expect(path).toEqual('A -> B');
    expect([...iter]).toEqual([]);
  });
});