require('../prod/array-x');

describe('revIterator()', () => {
  it('should return Array Iterator of array in reversed order', () => {
    const arr = [1,2,3,4];
    const revIter = arr.x.revIterator();

    expect([...revIter]).toEqual([4,3,2,1]);
    expect([...revIter]).toEqual([]);
    expect(arr).toEqual([1,2,3,4]);
  });
});