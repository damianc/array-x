require('../prod/array-x');

describe('sparse()', () => {
  it('should leave array unchanged for negative parameter', () => {
    expect(
      [1,2,3,4].x.sparse(-2)
    ).toEqual([1,2,3,4]);
  });
  it('should leave array unchanged for parameter 0', () => {
    expect(
      [1,2,3,4].x.sparse(0)
    ).toEqual([1,2,3,4]);
  });
  it('should add 1 empty slot between items if parameter is not passed', () => {
    expect(
      [1,2,3,4].x.sparse()
    ).toEqual([1,/*empty*/,2,/*empty*/,3,/*empty*/,4]);
  });
  it('should add 1 empty slot between items for parameter 1', () => {
    expect(
      [1,2,3,4].x.sparse(1)
    ).toEqual([1,/*empty*/,2,/*empty*/,3,/*empty*/,4]);
  });
  it('should add 2 empty slots between items for parameter 2', () => {
    expect(
      [1,2,3,4].x.sparse(2)
    ).toEqual([1,/*empty*/,/*empty*/,2,/*empty*/,/*empty*/,3,/*empty*/,/*empty*/,4]);
  });
});