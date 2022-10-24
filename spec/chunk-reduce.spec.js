require('../prod/array-x');


describe('chunkReduce() without parameters', () => {
  it('should return entire input array', () => {
    expect(
      [1,2,3,4].x.chunkReduce()
    ).toEqual([1,2,3,4]);
  });
});

describe('chunkReduce() with only size parameter', () => {
  it('should return entire input array', () => {
    expect(
      [1,2,3,4].x.chunkReduce(2)
    ).toEqual([1,2,3,4]);
  });
});

describe('chunkReduce() with invalid size parameter', () => {
  it('should return entire input array if size equals 1', () => {
    expect(
      [1,2,3,4].x.chunkReduce(1, (a, b) => a + b)
    ).toEqual([1,2,3,4]);
  });
  it('should return entire input array if size equals 0', () => {
    expect(
      [1,2,3,4].x.chunkReduce(0, (a, b) => a + b)
    ).toEqual([1,2,3,4]);
  });
  it('should return entire input array if size is negative', () => {
    expect(
      [1,2,3,4].x.chunkReduce(-2, (a, b) => a + b)
    ).toEqual([1,2,3,4]);
  });
});

describe('chunkReduce() with reducer parameter', () => {
  it('should return array with sums of pairs', () => {
    expect(
      [1,2,3,4,5,6].x.chunkReduce(2, (a, b) => a + b)
    ).toEqual([3,7,11]);
  });
  it('should return array with sums of triplets', () => {
    expect(
      [1,2,3,4,5,6].x.chunkReduce(3, (a, b) => a + b)
    ).toEqual([6,15]);
  });
});

describe('chunkReduce() with init parameter', () => {
  it('as literal value, should use this value', () => {
    expect(
      [1,2,3,4,5,6].x.chunkReduce(2, (a, b) => a + b, 10)
    ).toEqual([13,17,21]);
  });
  it('as callback, should use chunk item to compute init value', () => {
    expect(
      [1,2,3,4,5,6].x.chunkReduce(
        2,
        (a, b) => a + b,
        (ch) => ch[0]
      )
    ).toEqual([4,10,16]);
  });
  it('as callback, should use chunk number to compute init value', () => {
    expect(
      [1,2,3,4,5,6].x.chunkReduce(
        2,
        (a, b) => a + b,
        (_, chNum) => chNum
      )
    ).toEqual([4,9,14]);
  });
});

describe('chunkReduce() with sticking input array', () => {
  it('should include sticking items by default', () => {
    expect(
      [1,2,3,4,5].x.chunkReduce(
        2, (a, b) => a + b
      )
    ).toEqual([3,7,5]);
  });
  it('should ignore sticking items if this parameter is true', () => {
    expect(
      [1,2,3,4,5].x.chunkReduce(
        2, (a, b) => a + b,
        null, true
      )
    ).toEqual([3,7]);
  });
});