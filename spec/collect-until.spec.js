require('../prod/array-x');

describe('collectUntil() should handle', () => {
  beforeEach(() => {
    this.tester = x => x >= 10;
  });

  describe('empty array', () => {
    it('with item given', () => {
      expect([].x.collectUntil(10)).toEqual([]);
      expect([].x.collectUntil(10, false)).toEqual([]);
    });
    it('with tester given', () => {
      expect([].x.collectUntil(this.tester)).toEqual([]);
      expect([].x.collectUntil(this.tester, false)).toEqual([]);
    });
  });

  describe('one-item array', () => {
    describe('containing non-matching item', () => {
      it('with item given', () => {
        expect([1].x.collectUntil(10)).toEqual([1]);
        expect([1].x.collectUntil(10, false)).toEqual([1]);
      });
      it('with tester given', () => {
        expect([1].x.collectUntil(this.tester)).toEqual([1]);
        expect([1].x.collectUntil(this.tester, false)).toEqual([1]);
      });
    });
    describe('containing matching item', () => {
      it('with item given', () => {
        expect([10].x.collectUntil(10)).toEqual([10]);
        expect([10].x.collectUntil(10, false)).toEqual([]);
      });
      it('with tester given', () => {
        expect([10].x.collectUntil(this.tester)).toEqual([10]);
        expect([10].x.collectUntil(this.tester, false)).toEqual([]);
      });
    });
  });

  describe('two-items array', () => {
    describe('containing no matching item', () => {
      it('with item given', () => {
        expect([1, 2].x.collectUntil(10)).toEqual([1, 2]);
        expect([1, 2].x.collectUntil(10, false)).toEqual([1, 2]);
      });
      it('with tester given', () => {
        expect([1, 2].x.collectUntil(this.tester)).toEqual([1, 2]);
        expect([1, 2].x.collectUntil(this.tester, false)).toEqual([1, 2]);
      });
    });
    describe('containing all matching items', () => {
      it('with item given', () => {
        expect([10, 10].x.collectUntil(10)).toEqual([10]);
        expect([10, 10].x.collectUntil(10, false)).toEqual([]);
      });
      it('with tester given', () => {
        expect([10, 20].x.collectUntil(this.tester)).toEqual([10]);
        expect([10, 20].x.collectUntil(this.tester, false)).toEqual([]);
      });
    });
  });

  describe('3+ items array', () => {
    describe('containing no matching item', () => {
      it('with item given', () => {
        expect([1, 2, 3, 4].x.collectUntil(10)).toEqual([1, 2, 3, 4]);
        expect([1, 2, 3, 4].x.collectUntil(10, false)).toEqual([1, 2, 3, 4]);
      });
      it('with tester given', () => {
        expect([1, 2, 3, 4].x.collectUntil(this.tester)).toEqual([1, 2, 3, 4]);
        expect([1, 2, 3, 4].x.collectUntil(this.tester, false)).toEqual([1, 2, 3, 4]);
      });
    });
    describe('containing all matching items', () => {
      it('with item given', () => {
        expect([10, 10, 10, 10].x.collectUntil(10)).toEqual([10]);
        expect([10, 10, 10, 10].x.collectUntil(10, false)).toEqual([]);
      });
      it('with tester given', () => {
        expect([10, 20, 30, 40].x.collectUntil(this.tester)).toEqual([10]);
        expect([10, 20, 30, 40].x.collectUntil(this.tester, false)).toEqual([]);
      });
    });
    describe('containing matching item at index 2', () => {
      it('with item given', () => {
        expect([1, 2, 10, 20].x.collectUntil(10)).toEqual([1, 2, 10]);
        expect([1, 2, 10, 20].x.collectUntil(10, false)).toEqual([1, 2]);
      });
      it('with tester given', () => {
        expect([1, 2, 10, 20].x.collectUntil(this.tester)).toEqual([1, 2, 10]);
        expect([1, 2, 10, 20].x.collectUntil(this.tester, false)).toEqual([1, 2]);
      });
    });
  });
});