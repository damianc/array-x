require('../prod/array-x');

describe('adapt() with inproper parameters', () => {
  it('should adapt only one item if number of adapts is negative and < -1', () => {
    expect(
      [1,2,1,2].x.adapt([1,20,1,20], -2)
    ).toEqual([1,20,1,2]);
  });
  it('should adapt all items if number of adapts equals -1', () => {
    expect(
      [1,2,1,2].x.adapt([1,20,1,20], -1)
    ).toEqual([1,20,1,20]);
  });
  it('should adapt only one item if number of adapts equals 0', () => {
    expect(
      [1,2,1,2].x.adapt([1,20,1,20], 0)
    ).toEqual([1,20,1,2]);
  });
});

describe('adapt() with equal-length arrays', () => {
  it('should adapt first other value by default', () => {
    expect(
      [1,2,1,2,1,2].x.adapt([1,20,1,20,1,20])
    ).toEqual([1,20,1,2,1,2]);
  });
  it('should adapt first two other values if second parameter equals 2', () => {
    expect(
      [1,2,1,2,1,2].x.adapt([1,20,1,20,1,20], 2)
    ).toEqual([1,20,1,20,1,2]);
  });
  it('should adapt all other values if second parameter equals -1', () => {
    expect(
      [1,2,1,2,1,2].x.adapt([1,20,1,20,1,20], -1)
    ).toEqual([1,20,1,20,1,20]);
  });
});

describe('adapt() with arrays of different length', () => {
  describe('if input array is shorter', () => {
    it('should adapt as many values as possible', () => {
      expect(
        [1,2].x.adapt([1,20,1,20], 2)
      ).toEqual([1,20])
    });
    it('should adapt no value if common parts do not differ', () => {
      expect(
        [1,2].x.adapt([1,2,30,40])
      ).toEqual([1,2])
    });
  });
  describe('if passed array is shorter', () => {
    it('should adapt as many values as possible', () => {
      expect(
        [1,2,1,2].x.adapt([1,20])
      ).toEqual([1,20,1,2])
    });
    it('should adapt no value if common parts do not differ', () => {
      expect(
        [1,2,30,40].x.adapt([1,2])
      ).toEqual([1,2,30,40])
    });
  });
});

describe('adapt() with empty array', () => {
  it('should return empty array if input array is empty', () => {
    expect(
      [].x.adapt([1,2])
    ).toEqual([]);
  });
  it('should return input array if passed array is empty', () => {
    expect(
      [1,2].x.adapt([])
    ).toEqual([1,2]);
  });
  it('should return empty array if both arrays are empty', () => {
    expect(
      [].x.adapt([])
    ).toEqual([]);
  });
});