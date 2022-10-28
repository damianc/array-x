require('../prod/array-x');

describe('chunkByReduce() without parameters', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.chunkByReduce()
    ).toEqual([1,2,3,4]);
  });
});

describe('chunkByReduce() with reducer parameter only', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.chunkByReduce((acc, curr) => acc + curr)
    ).toEqual([1,2,3,4]);
  });
});

describe('chunkByReduce() without tester parameter', () => {
  it('should return entire array', () => {
    expect(
      [1,2,3,4].x.chunkByReduce((acc, curr) => acc + curr, 0)
    ).toEqual([1,2,3,4]);
  });
});

describe('chunkByReduce() with all parameters', () => {
  it('should split array into chunks whose sum >= 8', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.chunkByReduce(
        (acc, curr) => acc + curr,
        null,
        sum => sum >= 8
      )
    ).toEqual([ [1,2,3,4],[5,6],[7,8] ]);
  });
  it('should split array into chunks of length 2', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.chunkByReduce(
        (acc, curr) => [...acc, curr],
        [],
        arr => arr.length === 2
      )
    ).toEqual([ [1,2],[3,4],[5,6],[7,8] ]);
  });
  it('should wrap entire array into one chunk if condition is never fulfilled', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.chunkByReduce(
        (acc, curr) => acc + curr,
        null,
        sum => sum >= 100
      )
    ).toEqual([ [1,2,3,4,5,6,7,8] ]);
  });
});