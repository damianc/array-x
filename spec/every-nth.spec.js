require('../prod/array-x');

describe('everyNth() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.everyNth()
    ).toEqual([1,2,3,4]);
  });
});

describe('everyNth() with non-positive parameters', () => {
  it('should return entire array if n equals 0', () => {
    expect(
      [1,2,3,4].x.everyNth(0)
    ).toEqual([1,2,3,4]);
  });
  it('should return entire array if n is negative', () => {
    expect(
      [1,2,3,4].x.everyNth(-2)
    ).toEqual([1,2,3,4]);
  });
});

describe('everyNth() with valid parameters', () => {
  it('should return entire array for n = 1', () => {
    expect(
      [1,2,3,4].x.everyNth(1)
    ).toEqual([1,2,3,4]);
  });
  it('should return every second item for n = 2', () => {
    expect(
      [1,2,3,4,5,6].x.everyNth(2)
    ).toEqual([1,3,5]);
  });
  it('should return every second item for n = 2, starting from 1', () => {
    expect(
      [1,2,3,4,5,6].x.everyNth(2, 1)
    ).toEqual([2,4,6]);
  });
  it('should return every second item from first 4 items of array', () => {
    expect(
      [1,2,3,4,5,6].x.everyNth(2, 0, 3)
    ).toEqual([1,3]);
  });
  it('should return every second item from last 4 items of array', () => {
    expect(
      [1,2,3,4,5,6].x.everyNth(2, -4)
    ).toEqual([3,5]);
  });
  it('should return every second item from range defined by negative indexes', () => {
    expect(
      [1,2,3,4,5,6].x.everyNth(2, -4, -1)
    ).toEqual([3,5]);
  });
});

describe('everyNth() with range parameters in inproper order', () => {
  it('should return empty array for positive numbers', () => {
    expect(
      [1,2,3,4,5,6].x.everyNth(2, 4, 2)
    ).toEqual([]);
  });
  it('should return empty array for negative numbers', () => {
    expect(
      [1,2,3,4,5,6].x.everyNth(2, -2, -4)
    ).toEqual([]);
  });
});

describe('everyNth() with excessive parameters', () => {
  describe('for excessive n', () => {
    it('should return edge items for n = array length - 1', () => {
      expect(
        [1,2,3,4,5,6].x.everyNth(5)
      ).toEqual([1,6]);
    });
    it('should return first item for n = array length', () => {
      expect(
        [1,2,3,4,5,6].x.everyNth(6)
      ).toEqual([1]);
    });
    it('should return first item for n > array length', () => {
      expect(
        [1,2,3,4,5,6].x.everyNth(7)
      ).toEqual([1]);
    });
  });
  describe('for excessive from', () => {
    it('should return last item for from = array length - 1', () => {
      expect(
        [1,2,3,4,5,6].x.everyNth(2, 5)
      ).toEqual([6]);
    });
    it('should return empty array for from = array length', () => {
      expect(
        [1,2,3,4,5,6].x.everyNth(2, 6)
      ).toEqual([]);
    });
    it('should return empty array for from > array length', () => {
      expect(
        [1,2,3,4,5,6].x.everyNth(2, 7)
      ).toEqual([]);
    });
  });
  describe('for excessive to', () => {
    it('should return every second item for to = array length - 1', () => {
      expect(
        [1,2,3,4,5,6].x.everyNth(2, 0, 5)
      ).toEqual([1,3,5]);
    });
    it('should return every second item for to = array length', () => {
      expect(
        [1,2,3,4,5,6].x.everyNth(2, 0, 6)
      ).toEqual([1,3,5]);
    });
    it('should return every second item for to > array length', () => {
      expect(
        [1,2,3,4,5,6].x.everyNth(2, 0, 7)
      ).toEqual([1,3,5]);
    });
  });
});