require('../prod/array-x');

beforeEach(() => {
  this.numMatcher = x => x % 2 === 0;
  this.strMatcher = str => str.length >= 2;

  this.negNumMatcher = x => x > 100;
  this.negStrMatcher = str => str.length > 100;

  this.numArr = [1, 2, 3, 2, 1];
  this.strArr = ['x', 'xx', 'xxx', 'xx', 'x'];
});

describe('localize() with empty array', () => {
  it('should work without matcher', () => {
    expect([].x.localize(2)).toEqual(null);
  });
  it('should work with number matcher', () => {
    expect([].x.localize(this.numMatcher)).toEqual(null);
  });
  it('should work with string matcher', () => {
    expect([].x.localize(this.strMatcher)).toEqual(null);
  });
});

describe('localize() without matcher', () => {
  describe('should handle one-item array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 1);
      strArr = this.strArr.slice(0, 1);
    });

    it('and find item', () => {
      expect(numArr.x.localize(1)).toEqual([0, 1]);
      expect(strArr.x.localize('x')).toEqual([0, 'x']);
    });
    it('and not find item', () => {
      expect(numArr.x.localize(100)).toEqual(null);
      expect(strArr.x.localize('xxxx')).toEqual(null);
    });
  });

  describe('should handle two-items array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 2);
      strArr = this.strArr.slice(0, 2);
    });

    it('and find item', () => {
      expect(numArr.x.localize(2)).toEqual([1, 2]);
      expect(strArr.x.localize('xx')).toEqual([1, 'xx']);
    });
    it('and not find item', () => {
      expect(numArr.x.localize(100)).toEqual(null);
      expect(strArr.x.localize('xxxx')).toEqual(null);
    });
  });

  describe('should handle 3+ items array', () => {
    it('and find item', () => {
      expect(this.numArr.x.localize(3)).toEqual([2, 3]);
      expect(this.strArr.x.localize('xxx')).toEqual([2, 'xxx']);
    });
    it('and not find item', () => {
      expect(this.numArr.x.localize(100)).toEqual(null);
      expect(this.strArr.x.localize('xxxx')).toEqual(null);
    });
  });
});

describe('localize() with matcher', () => {
  describe('should handle one-item array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 1);
      strArr = this.strArr.slice(0, 1);
    });

    it('and find item', () => {
      expect(numArr.x.localize(x => x < 10)).toEqual([0, 1]);
      expect(strArr.x.localize(str => str.length === 1)).toEqual([0, 'x']);
    });
    it('and not find item', () => {
      expect(numArr.x.localize(this.negNumMatcher)).toEqual(null);
      expect(strArr.x.localize(this.negStrMatcher)).toEqual(null);
    });
  });

  describe('should handle two-items array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 2);
      strArr = this.strArr.slice(0, 2);
    });

    it('and find item', () => {
      expect(numArr.x.localize(this.numMatcher)).toEqual([1, 2]);
      expect(strArr.x.localize(this.strMatcher)).toEqual([1, 'xx']);
    });
    it('and not find item', () => {
      expect(numArr.x.localize(this.negNumMatcher)).toEqual(null);
      expect(strArr.x.localize(this.negStrMatcher)).toEqual(null);
    });
  });
  
  describe('should handle 3+ items array', () => {
    it('and find item', () => {
      expect(this.numArr.x.localize(this.numMatcher)).toEqual([1, 2]);
      expect(this.strArr.x.localize(this.strMatcher)).toEqual([1, 'xx']);
    });
    it('and not find item', () => {
      expect(this.numArr.x.localize(this.negNumMatcher)).toEqual(null);
      expect(this.strArr.x.localize(this.negStrMatcher)).toEqual(null);
    });
  });
});