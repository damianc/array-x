require('../prod/array-x');

describe('last()', () => {
  it('should return undefined for empty array', () => {
    expect(
      [].x.last()
    ).toEqual(undefined);
  });
  it('should return only item for 1-item array', () => {
    expect(
      [10].x.last()
    ).toEqual(10);
  });
  it('should return last item of array', () => {
    expect(
      [1,2,3,4].x.last()
    ).toEqual(4);
  });
});