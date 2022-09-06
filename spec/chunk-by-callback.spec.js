require('../prod/array-x');

describe('chunkByCallback() with empty input', () => {
  it('should return empty array if input array is empty', () => {
    expect(
      [].x.chunkByCallback(x => x % 2 === 0)
    ).toEqual([]);
    expect(
      [].x.chunkByCallback(x => x % 2 === 0, false)
    ).toEqual([]);
  });
  it('should return empty array if callback is not given', () => {
    expect(
      [1,2,3,4].x.chunkByCallback()
    ).toEqual([]);
  });
});

describe('chunkByCallback() with even number matcher', () => {
  describe('should open new chunk when meets even number', () => {
    it('for array of even size', () => {
      expect(
        [1,2,3,4,5,6].x.chunkByCallback(x => x % 2 === 0)
      ).toEqual(
        [ [1], [2,3], [4,5], [6] ]
      );
    });
    it('for array of odd size', () => {
      expect(
        [1,2,3,4,5].x.chunkByCallback(x => x % 2 === 0)
      ).toEqual(
        [ [1], [2,3], [4,5] ]
      );
    });
  });
  describe('should close current chunk when meets even number and when second parameter is false', () => {
    it('for array of even size', () => {
      expect(
        [1,2,3,4,5,6].x.chunkByCallback(x => x % 2 === 0, false)
      ).toEqual(
        [ [1,2], [3,4], [5,6] ]
      );
    });
    it('for array of odd size', () => {
      expect(
        [1,2,3,4,5].x.chunkByCallback(x => x % 2 === 0, false)
      ).toEqual(
        [ [1,2], [3,4], [5] ]
      );
    });
  });
});