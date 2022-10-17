require('../prod/array-x');

describe('split() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.split()
    ).toEqual([1,2,3,4]);
  });
});

describe('split() with one value', () => {
  it('should split items', () => {
    expect(
      [1,10,2,3,30,2,4,40].x.split(2)
    ).toEqual([ [1,10], [3,30], [4,40] ]);
  });
  it('should split items with matched value on the left', () => {
    expect(
      [2,1,10,2,3,30,2,4,40].x.split(2)
    ).toEqual([ [1,10], [3,30], [4,40] ]);
  });
  it('should split items with matched value on the right', () => {
    expect(
      [1,10,2,3,30,2,4,40,2].x.split(2)
    ).toEqual([ [1,10], [3,30], [4,40] ]);
  });
  it('should split items with matched value on both sides', () => {
    expect(
      [2,1,10,2,3,30,2,4,40,2].x.split(2)
    ).toEqual([ [1,10], [3,30], [4,40] ]);
  });
});

describe('split() with multiple values', () => {
  it('should split items', () => {
    expect(
      [1,11,2,3,33,4,5,55].x.split([2,4,6])
    ).toEqual([ [1,11], [3,33], [5,55] ]);
  });
  it('should split items with matched value on the left', () => {
    expect(
      [2,1,11,2,3,33,4,5,55].x.split([2,4,6])
    ).toEqual([ [1,11], [3,33], [5,55] ]);
  });
  it('should split items with matched value on the right', () => {
    expect(
      [1,11,2,3,33,4,5,55,2].x.split([2,4,6])
    ).toEqual([ [1,11], [3,33], [5,55] ]);
  });
  it('should split items with matched value on both sides', () => {
    expect(
      [2,1,11,2,3,33,4,5,55,2].x.split([2,4,6])
    ).toEqual([ [1,11], [3,33], [5,55] ]);
  });
});

describe('split() with callback', () => {
  it('should split items', () => {
    expect(
      [1,11,2,3,33,4,5,55].x.split(x => x % 2 === 0)
    ).toEqual([ [1,11], [3,33], [5,55] ]);
  });
  it('should split items with matched value on the left', () => {
    expect(
      [2,1,11,2,3,33,4,5,55].x.split(x => x % 2 === 0)
    ).toEqual([ [1,11], [3,33], [5,55] ]);
  });
  it('should split items with matched value on the right', () => {
    expect(
      [1,11,2,3,33,4,5,55,2].x.split(x => x % 2 === 0)
    ).toEqual([ [1,11], [3,33], [5,55] ]);
  });
  it('should split items with matched value on both sides', () => {
    expect(
      [2,1,11,2,3,33,4,5,55,2].x.split(x => x % 2 === 0)
    ).toEqual([ [1,11], [3,33], [5,55] ]);
  });
});

describe('split() on array with matching siblings', () => {
  it('should split items when value is passed', () => {
    expect(
      [1,2,2,3,2,2,4,5].x.split(2)
    ).toEqual([ [1], [3], [4,5] ]);
  });
  it('should split items when multiple values are passed', () => {
    expect(
      [1,2,3,4,3,5,2,6,3,2,7,8].x.split([2,3])
    ).toEqual([ [1], [4], [5], [6], [7,8] ]);
  });
  it('should split items when callback is passed', () => {
    expect(
      [1,2,4,3,5,6,8,7,9].x.split(x => x % 2 === 0)
    ).toEqual([ [1], [3,5], [7,9] ]);
  });
});