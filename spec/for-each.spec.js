require('../prod/array-x');

describe('forEach() in standard use', () => {
  it('should work like native forEach() method', () => {
    const items = [];
    const indexes = [];
    [1,2,3,4].x.forEach((item, idx) => {
      items.push(item);
      indexes.push(idx);
    });
    expect(items).toEqual([1,2,3,4]);
    expect(indexes).toEqual([0,1,2,3]);
  });
});

describe('forEach() with 3rd and 4th callback parameters', () => {
  it('should give access to array', () => {
    const arr = [1,2];
    let ok = true;
    arr.x.forEach((item, idx, _, array) => {
      ok = ok && (array === arr);
    });
    expect(ok).toEqual(true);
  });
  describe('being break/continue API', () => {
    it('should allow breaking loop', () => {
      const res = [];
      [1,2,3,4,5,6].x.forEach((item, idx, api) => {
        if (item === 4) return api.break;
        res.push(item);
      });
      expect(res).toEqual([1,2,3]);
    });
    it('should allow breaking loop (at the end)', () => {
      const res = [];
      [1,2,3,4,5,6].x.forEach((item, idx, api) => {
        res.push(item);
        if (item === 4) return api.break;
      });
      expect(res).toEqual([1,2,3,4]);
    });
    it('should allow skipping loop', () => {
      const res = [];
      [1,2,3,4,5,6].x.forEach((item, idx, api) => {
        if (item % 2 !== 0) return api.continue;
        res.push(item);
      });
      expect(res).toEqual([2,4,6]);
    });
    it('should allow skipping loop at the end, but without effect', () => {
      const res = [];
      [1,2,3,4,5,6].x.forEach((item, idx, api) => {
        res.push(item);
        if (item % 2 !== 0) return api.continue;
      });
      expect(res).toEqual([1,2,3,4,5,6]);
    });
  });
  it('should allow breaking and skipping', () => {
    const res = [];
    [1,2,3,4,5,6].x.forEach((item, idx, { break: b, continue: c }) => {
      if (item % 2 !== 0) return c;
      res.push(item);
      if (item === 4) return b;
    });
    expect(res).toEqual([2,4]);
  });
});

describe('forEach() method', () => {
  it('should be accessible as each()', () => {
    const res = [];
    [1,2,3,4,5,6].x.each((item, idx, api) => {
      if (item === 4) return api.break;
      res.push(item);
    });
    expect(res).toEqual([1,2,3]);
  });
});