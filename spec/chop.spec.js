require('../prod/array-x');

describe('chop() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.chop()
    ).toEqual([1,2,3,4]);
  });
});

describe('chop() with parameters', () => {
  it('should split into two pieces if 1 value is passed', () => {
    expect(
      [1,2,3,4,5,6].x.chop(2)
    ).toEqual([ [1,2], [3,4,5,6] ]);
  });
  it('should split into three pieces if 2 values are passed', () => {
    expect(
      [1,2,3,4,5,6].x.chop(2,4)
    ).toEqual([ [1,2], [3,4], [5,6] ]);
  });
});

describe('chop() with negative parameters', () => {
  it('should count backwards', () => {
    expect(
      [1,2,3,4,5,6].x.chop(-4,-2)
    ).toEqual([ [1,2], [3,4], [5,6] ]);
  });
});

describe('chop() with excessive parameters', () => {
  it('should return entire array if there are only excessive values', () => {
    expect(
      [1,2,3,4,5,6].x.chop(20,-20)
    ).toEqual([1,2,3,4,5,6]);
  });
  it('should ignore excessive values', () => {
    expect(
      [1,2,3,4,5,6].x.chop(20,2,-20,-2)
    ).toEqual([ [1,2], [3,4], [5,6] ]);
  });
});

describe('chop() with repeated parameters', () => {
  it('should remove directly doubled values', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.chop(2,2,4)
    ).toEqual([ [1,2], [3,4], [5,6,7,8] ]);
  });
  it('should remove indirectly doubled values', () => {
    expect(
      [1,2,3,4,5,6].x.chop(2,-4,5)
    ).toEqual([ [1,2], [3,4,5], [6] ]);
  });
});

describe('chop() with parameters in non-ascending order', () => {
  it('should sort values before', () => {
    const arr = [1,2,3,4,5,6,7,8];
    const ascChopped = arr.x.chop(2,4);
    const nonAscChopped = arr.x.chop(4,2);
    expect(ascChopped).toEqual(nonAscChopped);
  });
});