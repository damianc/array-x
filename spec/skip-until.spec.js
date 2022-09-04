require('../prod/array-x');

describe('skipUntil() should handle', () => {
  beforeEach(() => {
    this.tester = x => x >= 10;
  });

  describe('empty array', () => {
    it('with item given', () => {
      expect([].x.skipUntil(10)).toEqual([]);
      expect([].x.skipUntil(10, false)).toEqual([]);
    });
    it('with tester given', () => {
      expect([].x.skipUntil(this.tester)).toEqual([]);
      expect([].x.skipUntil(this.tester, false)).toEqual([]);
    });
  });

  describe('one-item array', () => {
    describe('containing non-matching item', () => {
      it('with item given', () => {
        expect([1].x.skipUntil(10)).toEqual([]);
        expect([1].x.skipUntil(10, false)).toEqual([]);
      });
      it('with tester given', () => {
        expect([1].x.skipUntil(this.tester)).toEqual([]);
        expect([1].x.skipUntil(this.tester, false)).toEqual([]);
      });
    });
    describe('containing matching item', () => {
      it('with item given', () => {
        expect([10].x.skipUntil(10)).toEqual([10]);
        expect([10].x.skipUntil(10, false)).toEqual([]);
      });
      it('with tester given', () => {
        expect([10].x.skipUntil(this.tester)).toEqual([10]);
        expect([10].x.skipUntil(this.tester, false)).toEqual([]);
      });
    });
  });

  describe('two-items array', () => {
    describe('containing no matching item', () => {
      it('with item given', () => {
        expect([1, 2].x.skipUntil(10)).toEqual([]);
        expect([1, 2].x.skipUntil(10, false)).toEqual([]);
      });
      it('with tester given', () => {
        expect([1, 2].x.skipUntil(this.tester)).toEqual([]);
        expect([1, 2].x.skipUntil(this.tester, false)).toEqual([]);
      });
    });
    describe('containing all matching items', () => {
      it('with item given', () => {
        expect([10, 10].x.skipUntil(10)).toEqual([10, 10]);
        expect([10, 10].x.skipUntil(10, false)).toEqual([10]);
      });
      it('with tester given', () => {
        expect([10, 20].x.skipUntil(this.tester)).toEqual([10, 20]);
        expect([10, 20].x.skipUntil(this.tester, false)).toEqual([20]);
      });
    });
  });

  describe('3+ items array', () => {
    describe('containing no matching item', () => {
      it('with item given', () => {
        expect([1, 2, 3, 4].x.skipUntil(10)).toEqual([]);
        expect([1, 2, 3, 4].x.skipUntil(10, false)).toEqual([]);
      });
      it('with tester given', () => {
        expect([1, 2, 3, 4].x.skipUntil(this.tester)).toEqual([]);
        expect([1, 2, 3, 4].x.skipUntil(this.tester, false)).toEqual([]);
      });
    });
    describe('containing all matching items', () => {
      it('with item given', () => {
        expect([10, 10, 10, 10].x.skipUntil(10)).toEqual([10, 10, 10, 10]);
        expect([10, 10, 10, 10].x.skipUntil(10, false)).toEqual([10, 10, 10]);
      });
      it('with tester given', () => {
        expect([10, 20, 30, 40].x.skipUntil(this.tester)).toEqual([10, 20, 30, 40]);
        expect([10, 20, 30, 40].x.skipUntil(this.tester, false)).toEqual([20, 30, 40]);
      });
    });
    describe('containing matching item at index 2', () => {
      it('with item given', () => {
        expect([1, 2, 10, 20].x.skipUntil(10)).toEqual([10, 20]);
        expect([1, 2, 10, 20].x.skipUntil(10, false)).toEqual([20]);
      });
      it('with tester given', () => {
        expect([1, 2, 10, 20].x.skipUntil(this.tester)).toEqual([10, 20]);
        expect([1, 2, 10, 20].x.skipUntil(this.tester, false)).toEqual([20]);
      });
    });
  });
});