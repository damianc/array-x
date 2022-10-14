require('../prod/array-x');

describe('select() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.select()
    ).toEqual([1,2,3,4]);
  });
});

describe('select() with only first parameter', () => {
  it('should return items starting from passed index', () => {
    expect(
      [1,2,3,4].x.select(2)
    ).toEqual([3,4]);
  });
  it('should return empty array if value N >= array length', () => {
    expect(
      [1,2,3,4].x.select(6)
    ).toEqual([]);
  });
  it('should return N last values for negative value', () => {
    expect(
      [1,2,3,4].x.select(-2)
    ).toEqual([3,4]);
  });
  it('should return entire array for negative value N if abs(N) >= array length', () => {
    expect(
      [1,2,3,4].x.select(-10)
    ).toEqual([1,2,3,4]);
  });
  it('should return entire array for value 0', () => {
    expect(
      [1,2,3,4].x.select(0)
    ).toEqual([1,2,3,4]);
  });
});

describe('select() with two parameters', () => {
  describe('when first is 0', () => {
    it('should return array with first item if second is 0', () => {
      expect(
        [1,2,3,4].x.select(0, 0)
      ).toEqual([1]);
    });
    it('should return array with (N+1) first items if second is a positive number', () => {
      expect(
        [1,2,3,4].x.select(0, 2)
      ).toEqual([1,2,3]);
    });
    it('should return entire array if value N >= array length', () => {
      expect(
        [1,2,3,4].x.select(0, 6)
      ).toEqual([1,2,3,4]);
    });
    it('should exclude (N-1) last items for negative value of second', () => {
      expect(
        [1,2,3,4].x.select(0, -2)
      ).toEqual([1,2,3]);
    });
    it('should return empty array for negative value N if abs(N) > array length', () => {
      expect(
        [1,2,3,4].x.select(0, -6)
      ).toEqual([]);
    });
    it('should return array with first item if second equals -(array length)', () => {
      expect(
        [1,2,3,4].x.select(0, -4)
      ).toEqual([1]);
    });
  });
  xdescribe('select(X ∈ <1;len>, ...)', () => {
    it('select(..., N = 0) SHOULD GIVE []', () => {});
    it('select(..., N ∈ <1;len-1> ∩ N > X) SHOULD GIVE  ', () => {});
    it('select(..., N ∈ <1;len-1> ∩ N = X) SHOULD GIVE  ', () => {});
    it('select(..., N ∈ <1;len-1> ∩ N < X) SHOULD GIVE  ', () => {});
    it('select(..., N = len) SHOULD GIVE', () => {});
    it('select(..., N > len) SHOULD GIVE', () => {});
    it('select(..., -N ⟺ {|N| ∈ <1;len-1> ∩ |N| > X}) SHOULD GIVE', () => {});
    it('select(..., -N ⟺ {|N| ∈ <1;len-1> ∩ |N| = X}) SHOULD GIVE', () => {});
    it('select(..., -N ⟺ {|N| ∈ <1;len-1> ∩ |N| < X}) SHOULD GIVE', () => {});
    it('select(..., -N ⟺ {|N| = len}) SHOULD GIVE', () => {});
    it('select(..., -N ⟺ {|N| > len}) SHOULD GIVE', () => {});
  });
  it('should return a fragment of array for values in range', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.select(2, 4)
    ).toEqual([3,4,5]);
  });
  it('should return a fragment of array if second value is negative', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.select(2, -2)
    ).toEqual([3,4,5,6,7]);
  });
  it('should return a fragment of array if first value is negative', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.select(-4, 6)
    ).toEqual([5,6,7]);
  });
  it('should return a fragment of array if both values are negative', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.select(-6, -2)
    ).toEqual([3,4,5,6,7]);
  });
});

describe('select() with all parameters', () => {
  it('should omit no item if step is negative', () => {
    expect(
      [1,2,3,4,5,6].x.select(0, -1, -2)
    ).toEqual([1,2,3,4,5,6]);
  });
  it('should omit no item if step equals 0', () => {
    expect(
      [1,2,3,4,5,6].x.select(0, -1, 0)
    ).toEqual([1,2,3,4,5,6]);
  });
  it('should omit no item if step equals 1', () => {
    expect(
      [1,2,3,4,5,6].x.select(0, -1, 1)
    ).toEqual([1,2,3,4,5,6]);
  });
  it('should select every 2nd item if step equals 2', () => {
    expect(
      [1,2,3,4,5,6].x.select(0, -1, 2)
    ).toEqual([1,3,5]);
  });
  it('should select every 3rd item if step equals 3', () => {
    expect(
      [1,2,3,4,5,6].x.select(0, -1, 3)
    ).toEqual([1,4]);
  });
});