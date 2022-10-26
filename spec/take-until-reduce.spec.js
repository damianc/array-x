require('../prod/array-x');

describe('takeUntilReduce() should handle', () => {
  beforeEach(() => {
    this.reducer = (a, b) => a + b;
    this.tester = sum => sum >= 10;
  });

  it('empty array', () => {
    expect([].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([]);
    expect([].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
  });

  describe('one-item array', () => {
    it('containing non-closing item', () => {
      expect([1].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([1]);
      expect([1].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([1]);
    });
    it('containing closing item', () => {
      expect([10].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([10]);
      expect([10].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
    });
  });

  describe('two-items array', () => {
    it('containing non-closing items', () => {
      expect([1, 2].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([1, 2]);
      expect([1, 2].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([1, 2]);
    });
    it('containing closing items', () => {
      expect([10, 20].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([10]);
      expect([10, 20].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
    });
    describe('containing one closing item', () => {
      it('at index 0', () => {
        expect([10, 2].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([10]);
        expect([10, 2].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
      });
      it('at index 1', () => {
        expect([2, 10].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([2, 10]);
        expect([2, 10].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([2]);
      });
    });
  });

  describe('3+ items array', () => {
    it('containing non-closing items', () => {
      expect([1, 2, 3].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([1, 2, 3]);
      expect([1, 2, 3].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([1, 2, 3]);
    });
    it('containing closing items', () => {
      expect([10, 20, 30].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([10]);
      expect([10, 20, 30].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
    });
    describe('containing one closing item', () => {
      it('at index 0', () => {
        expect([10, 20, 30, 40].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([10]);
        expect([10, 20, 30, 40].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([]);
      });
      it('at index 1', () => {
        expect([2, 10, 12, 20].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([2, 10]);
        expect([2, 10, 12, 20].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([2]);
      });
      it('at index 2', () => {
        expect([2, 4, 6, 8, 10].x.takeUntilReduce(this.tester, this.reducer, 0)).toEqual([2, 4, 6]);
        expect([2, 4, 6, 8, 10].x.takeUntilReduce(this.tester, this.reducer, 0, false)).toEqual([2, 4]);
      });
    });
  });
});