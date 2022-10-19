require('../prod/array-x');

describe('filterMapped() with not all parameters', () => {
  it('should return entire array if no parameters are passed', () => {
    expect(
      [1,2,3,4].x.filterMapped()
    ).toEqual([1,2,3,4]);
  });
  it('should return entire array if only mapper is passed', () => {
    expect(
      [1,2,3,4].x.filterMapped(
        x => x * 2
      )
    ).toEqual([1,2,3,4]);
  });
});

describe('filterMapped() with all parameters', () => {
  it('should return items that would pass test if they were mapped', () => {
    expect(
      [1,2,3,4,5,6,7,8,9].x.filterMapped(
        x => Math.sqrt(x),
        x => x === parseInt(x)
      )
    ).toEqual([1,4,9]);
  });
});