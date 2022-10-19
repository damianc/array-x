require('../prod/array-x');

describe('complement() without parameters or with empty array', () => {
  it('should return empty array', () => {
    expect(
      [1,2,3,4].x.complement()
    ).toEqual([]);
  });
});

describe('complement() with non-empty array as input', () => {
  it('should return words only present in passed array', () => {
    expect(
      [1,2,3,4].x.complement([3,4,5,6])
    ).toEqual([5,6]);
  });
});

describe('complement() in edge cases', () => {
  it('for two entirely complementerent sets should return passed array', () => {
    expect(
      [1,2,3,4].x.complement([5,6,7,8])
    ).toEqual([5,6,7,8]);
  });
  it('for two equal sets should return empty array', () => {
    expect(
      [1,2,3,4].x.complement([1,2,3,4])
    ).toEqual([]);
  });
  it('for two equal sets (same values under different indexes) should return empty array', () => {
    expect(
      [1,2,3,4].x.complement([4,3,2,1])
    ).toEqual([]);
  });
});