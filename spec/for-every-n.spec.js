require('../prod/array-x');

describe('forEveryN()', () => {
  describe('should iterate over blocks of N size', () => {
    it('with smaller blocks at the end by default', () => {
      const blocks = [];
      [1,2,3,4,5].x.forEveryN(3, block => {
        blocks.push(String(block));
      });
      expect(blocks).toEqual(['1,2,3','2,3,4','3,4,5','4,5','5']);
    });
    it('without smaller blocks at the end if third parameter is `true`', () => {
      const blocks = [];
      [1,2,3,4,5].x.forEveryN(3, block => {
        blocks.push(String(block));
      }, true);
      expect(blocks).toEqual(['1,2,3','2,3,4','3,4,5']);
    });
  });
});

describe('forEveryN() with block', () => {
  it('of size 1 should iterate over every single item wrapped in array', () => {
    const res = [];
    [1,2,3,4].x.forEveryN(1, blockItem => {
      res.push(blockItem);
    });
    expect(res).toEqual([ [1],[2],[3],[4] ]);
  });
  it('of size 0 should perform no iteration', () => {
    const blocks = [];
    [1,2,3,4].x.forEveryN(0, block => {
      blocks.push(block);
    });
    expect(blocks).toEqual([]);
  });
  it('of size -1 should perform no iteration', () => {
    const blocks = [];
    [1,2,3,4].x.forEveryN(-1, block => {
      blocks.push(block);
    });
    expect(blocks).toEqual([]);
  });
});

describe('forEveryN() should give access', () => {
  describe('to index', () => {
    it('when all blocks are allowed', () => {
      const indexes = [];
      [1,2,3,4,5].x.forEveryN(3, (block, idx) => {
        indexes.push(idx);
      });
      expect(indexes).toEqual([0,1,2,3,4]);
    });
    it('when only full blocks are allowed', () => {
      const indexes = [];
      [1,2,3,4,5].x.forEveryN(3, (block, idx) => {
        indexes.push(idx);
      }, true);
      expect(indexes).toEqual([0,1,2]);
    });
  });
  it('to original array', () => {
    const arr = [1,2,3,4];
    let ok = true;
    arr.x.forEveryN(2, (chunk, chunkNumber, array) => {
      ok &&= array === arr;
    });
    expect(ok).toEqual(true);
  });
});