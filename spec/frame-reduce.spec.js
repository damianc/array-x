require('../prod/array-x');


describe('frameReduce() without parameters', () => {
  it('should return entire input array', () => {
    expect(
      [1,2,3,4].x.frameReduce()
    ).toEqual([1,2,3,4]);
  });
});

describe('frameReduce() with only size parameter', () => {
  it('should return entire input array', () => {
    expect(
      [1,2,3,4].x.frameReduce(2)
    ).toEqual([1,2,3,4]);
  });
});

describe('frameReduce() with invalid size parameter', () => {
  it('should return entire input array if size equals 1', () => {
    expect(
      [1,2,3,4].x.frameReduce(1, (a, b) => a + b)
    ).toEqual([1,2,3,4]);
  });
  it('should return entire input array if size equals 0', () => {
    expect(
      [1,2,3,4].x.frameReduce(0, (a, b) => a + b)
    ).toEqual([1,2,3,4]);
  });
  it('should return entire input array if size is negative', () => {
    expect(
      [1,2,3,4].x.frameReduce(-2, (a, b) => a + b)
    ).toEqual([1,2,3,4]);
  });
});

describe('frameReduce() with reducer parameter', () => {
  it('should return array with sums of pairs', () => {
    expect(
      [1,2,3,4,5,6].x.frameReduce(2, (a, b) => a + b)
    ).toEqual([3,5,7,9,11,6]);
  });
  it('should return array with sums of triplets', () => {
    expect(
      [1,2,3,4,5,6].x.frameReduce(3, (a, b) => a + b)
    ).toEqual([6,9,12,15,11,6]);
  });
});

describe('frameReduce() with init parameter', () => {
  it('as literal value, should use this value', () => {
    expect(
      [1,2,3,4,5,6].x.frameReduce(2, (a, b) => a + b, 10)
    ).toEqual([13,15,17,19,21,16]);
  });
  it('as callback, should use chunk item to compute init value', () => {
    expect(
      [1,2,3,4,5,6].x.frameReduce(
        2,
        (a, b) => a + b,
        (ch) => ch[0]
      )
    ).toEqual([4,7,10,13,16,12]);
  });
  it('as callback, should use chunk number to compute init value', () => {
    expect(
      [1,2,3,4,5,6].x.frameReduce(
        2,
        (a, b) => a + b,
        (_, chNum) => chNum
      )
    ).toEqual([4,7,10,13,16,12]);
  });
});

describe('frameReduce() with sticking input array', () => {
  it('should include sticking items of non-dividable array by default', () => {
    expect(
      [1,2,3,4,5].x.frameReduce(
        2, (a, b) => a + b
      )
    ).toEqual([3,5,7,9,5]);
  });
  it('should include sticking items of dividable array by default', () => {
    expect(
      [1,2,3,4,5,6].x.frameReduce(
        2, (a, b) => a + b
      )
    ).toEqual([3,5,7,9,11,6]);
  });
  it('should ignore sticking items of non-dividable array if this parameter is true', () => {
    expect(
      [1,2,3,4,5].x.frameReduce(
        2, (a, b) => a + b,
        null, true
      )
    ).toEqual([3,5,7,9]);
  });
  it('should ignore sticking items of dividable array if thid parameters is true', () => {
    expect(
      [1,2,3,4,5,6].x.frameReduce(
        2, (a, b) => a + b,
        null, true
      )
    ).toEqual([3,5,7,9,11]);
  });


  /*it('should return array with sums of pairs', () => {
    expect(
      [1,2,3,4,5,6].x.frameReduce(2, (a, b) => a + b,null,true)
    ).toEqual([3,5,7,9,11]);
  });
 it('should return array with sums of triplets', () => {
    expect(
      [1,2,3,4,5,6].x.frameReduce(3, (a, b) => a + b,null,true)
    ).toEqual([6,9,12,15]);
  });*/
});