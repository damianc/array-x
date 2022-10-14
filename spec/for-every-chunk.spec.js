require('../prod/array-x');

describe('forEveryChunk()', () => {
  describe('should iterate over chunks of N size', () => {
    it('for array of length dividable by N', () => {
      const chunkSizes = [];
      let chunkNumber = 0;
      [1,2,3,4,5,6,7,8,9].x.forEveryChunk(3, chunk => {
        chunkSizes.push(chunk.length);
        chunkNumber += 1;
      });
      expect(chunkSizes).toEqual([3,3,3]);
      expect(chunkNumber).toEqual(3);
    });
    it('for array of length not dividable by N', () => {
      const chunkSizes = [];
      let chunkNumber = 0;
      [1,2,3,4,5,6,7,8,9].x.forEveryChunk(2, chunk => {
        chunkSizes.push(chunk.length);
        chunkNumber += 1;
      });
      expect(chunkSizes).toEqual([2,2,2,2,1]);
      expect(chunkNumber).toEqual(5);
    });
  });

  describe('should handle chunks', () => {
    it('of length 1', () => {
      const chunkSizes = [];
      let chunkNumber = 0;
      [1,2,3,4].x.forEveryChunk(1, chunk => {
        chunkSizes.push(chunk.length);
        chunkNumber += 1;
      });
      expect(chunkSizes).toEqual([1,1,1,1]);
      expect(chunkNumber).toEqual(4);
    });
    it('of length 0 and perform no iteration', () => {
      const chunkSizes = [];
      let chunkNumber = 0;
      [1,2,3,4].x.forEveryChunk(0, chunk => {
        chunkSizes.push(chunk.length);
        chunkNumber += 1;
      });
      expect(chunkSizes).toEqual([]);
      expect(chunkNumber).toEqual(0);
    });
    it('of length -1 and perform no iteration', () => {
      const chunkSizes = [];
      let chunkNumber = 0;
      [1,2,3,4].x.forEveryChunk(-1, chunk => {
        chunkSizes.push(chunk.length);
        chunkNumber += 1;
      });
      expect(chunkSizes).toEqual([]);
      expect(chunkNumber).toEqual(0);
    });
  });

  it('should give access to chunk number', () => {
    const chunkNums = [];
    [1,2,3,4,5,6].x.forEveryChunk(2, (chunk, chunkNumber) => {
      chunkNums.push(chunkNumber);
    });
    expect(chunkNums).toEqual([1,2,3]);
  });
  it('should give access to original array', () => {
    const arr = [1,2,3,4];
    let ok = true;
    arr.x.forEveryChunk(2, (chunk, chunkNumber, array) => {
      ok = ok && (array === arr);
    });
    expect(ok).toEqual(true);
  });
});