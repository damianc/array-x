require('../prod/array-x');

describe('iterator()', () => {
  it('should return Array Iterator of array', () => {
    const iter = [1,2,3,4].x.iterator();
    expect([...iter]).toEqual([1,2,3,4]);
    expect([...iter]).toEqual([]);
  });
});