require('../prod/array-x');

describe('skipUntilReduce() should handle', () => {
  beforeEach(() => {
    this.reducer = (a, b) => a + b;
    this.tester = sum => sum >= 10;
  });

  it('empty array', () => {
    expect([].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([]);
    expect([].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
  });

  describe('one-item array', () => {
    it('containing non-closing item', () => {
      expect([1].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([]);
      expect([1].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
    });
    it('containing closing item', () => {
      expect([10].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([10]);
      expect([10].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
    });
  });

  describe('two-items array', () => {
    it('containing non-closing items', () => {
      expect([1, 2].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([]);
      expect([1, 2].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
    });
    it('containing closing items', () => {
      expect([10, 20].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([10, 20]);
      expect([10, 20].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([20]);
    });
    describe('containing one closing item', () => {
      it('at index 0', () => {
        expect([10, 2].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([10, 2]);
        expect([10, 2].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([2]);
      });
      it('at index 1', () => {
        expect([2, 10].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([10]);
        expect([2, 10].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
      });
    });
  });

  describe('3+ items array', () => {
    it('containing non-closing items', () => {
      expect([1, 2, 3].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([]);
      expect([1, 2, 3].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
    });
    it('containing closing items', () => {
      expect([10, 20, 30].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([10, 20, 30]);
      expect([10, 20, 30].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([20, 30]);
    });
    describe('containing one closing item', () => {
      it('at index 0', () => {
        expect([10, 20, 30, 40].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([10, 20, 30, 40]);
        expect([10, 20, 30, 40].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([20, 30, 40]);
      });
      it('at index 1', () => {
        expect([2, 10, 12, 20].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([10, 12, 20]);
        expect([2, 10, 12, 20].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([12, 20]);
      });
      it('at index 2', () => {
        expect([2, 4, 6, 8, 10].x.skipUntilReduce(this.tester, this.reducer, 0)).toEqual([6, 8, 10]);
        expect([2, 4, 6, 8, 10].x.skipUntilReduce(this.tester, this.reducer, 0, false)).toEqual([8, 10]);
      });
    });
  });
});