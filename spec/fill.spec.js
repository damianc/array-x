require('../prod/array-x');

describe('fill() without parameters', () => {
  it('should fill array with undefined', () => {
    expect(
      [1,2,3,4].x.fill()
    ).toEqual([undefined,undefined,undefined,undefined]);
  });
});

describe('fill() with literal value', () => {
  it('should fill array with this value', () => {
    expect(
      [1,2,3,4].x.fill(0)
    ).toEqual([0,0,0,0]);
  });
});

describe('fill() with array of values', () => {
  it('should fill array with input array items ignoring extra ones', () => {
    expect(
      [0,0,0,0].x.fill([1,2,3,4,5,6])
    ).toEqual([1,2,3,4]);
  });
  it('should fill array with input array items repeating this array if it is shorter', () => {
    expect(
      [0,0,0,0].x.fill([1,2])
    ).toEqual([1,2,1,2]);
  });
});

describe('fill() with callback', () => {
  it('should fill array with values returned by callback taking index', () => {
    expect(
      [0,0,0,0].x.fill(idx => idx + 1)
    ).toEqual([1,2,3,4]);
  });
});

describe('fill() on', () => {
  it('empty array, should return empty array', () => {
    expect(
      [].x.fill(0)
    ).toEqual([]);
  });
  it('empty array with 3 slots (2 , signs), should return array with 2 items', () => {
    expect(
      [,,].x.fill(0)
    ).toEqual([0,0]);
  });
  it('array created with constructor, should filled array', () => {
    expect(
      (new Array(4)).x.fill(0)
    ).toEqual([0,0,0,0]);
  });
});