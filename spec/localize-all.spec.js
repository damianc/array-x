require('../prod/array-x');

beforeEach(() => {
  this.numMatcher = x => x % 2 === 0;
  this.strMatcher = str => str.length >= 2;

  this.negNumMatcher = x => x > 100;
  this.negStrMatcher = str => str.length > 100;

  this.numArr = [1, 2, 3, 2, 1];
  this.strArr = ['x', 'xx', 'xxx', 'xx', 'x'];
});

describe('localizeAll() with empty array', () => {
  it('should work without matcher', () => {
    expect([].x.localizeAll(2)).toEqual([]);
  });
  it('should work with number matcher', () => {
    expect([].x.localizeAll(this.numMatcher)).toEqual([]);
  });
  it('should work with string matcher', () => {
    expect([].x.localizeAll(this.strMatcher)).toEqual([]);
  });
});

describe('localizeAll() without matcher', () => {
  describe('should handle one-item array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 1);
      strArr = this.strArr.slice(0, 1);
    });

    it('and find item', () => {
      expect(numArr.x.localizeAll(1)).toEqual([[0, 1]]);
      expect(strArr.x.localizeAll('x')).toEqual([[0, 'x']]);
    });
    it('and not find item', () => {
      expect(numArr.x.localizeAll(100)).toEqual([]);
      expect(strArr.x.localizeAll('xxxx')).toEqual([]);
    });
  });

  describe('should handle two-items array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 2);
      strArr = this.strArr.slice(0, 2);
    });

    it('and find item', () => {
      expect(numArr.x.localizeAll(2)).toEqual([[1, 2]]);
      expect(strArr.x.localizeAll('xx')).toEqual([[1, 'xx']]);
    });
    it('and not find item', () => {
      expect(numArr.x.localizeAll(100)).toEqual([]);
      expect(strArr.x.localizeAll('xxxx')).toEqual([]);
    });
  });

  describe('should handle 3+ items array', () => {
    it('and find item', () => {
      expect(this.numArr.x.localizeAll(2)).toEqual([[1, 2], [3, 2]]);
      expect(this.strArr.x.localizeAll('xx')).toEqual([[1, 'xx'], [3, 'xx']]);
    });
    it('and not find item', () => {
      expect(this.numArr.x.localizeAll(100)).toEqual([]);
      expect(this.strArr.x.localizeAll('xxxx')).toEqual([]);
    });
  });
});

describe('localizeAll() with matcher', () => {
  describe('should handle one-item array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 1);
      strArr = this.strArr.slice(0, 1);
    });

    it('and find item', () => {
      expect(numArr.x.localizeAll(x => x < 10)).toEqual([[0, 1]]);
      expect(strArr.x.localizeAll(str => str.length === 1)).toEqual([[0, 'x']]);
    });
    it('and not find item', () => {
      expect(numArr.x.localizeAll(this.negNumMatcher)).toEqual([]);
      expect(strArr.x.localizeAll(this.negStrMatcher)).toEqual([]);
    });
  });

  describe('should handle two-items array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 2);
      strArr = this.strArr.slice(0, 2);
    });

    it('and find item', () => {
      expect(numArr.x.localizeAll(this.numMatcher)).toEqual([[1, 2]]);
      expect(strArr.x.localizeAll(this.strMatcher)).toEqual([[1, 'xx']]);
    });
    it('and not find item', () => {
      expect(numArr.x.localizeAll(this.negNumMatcher)).toEqual([]);
      expect(strArr.x.localizeAll(this.negStrMatcher)).toEqual([]);
    });
  });
  
  describe('should handle 3+ items array', () => {
    it('and find item', () => {
      expect(this.numArr.x.localizeAll(this.numMatcher)).toEqual([[1, 2], [3, 2]]);
      expect(this.strArr.x.localizeAll(this.strMatcher)).toEqual([[1, 'xx'], [2, 'xxx'], [3, 'xx']]);
    });
    it('and not find item', () => {
      expect(this.numArr.x.localizeAll(this.negNumMatcher)).toEqual([]);
      expect(this.strArr.x.localizeAll(this.negStrMatcher)).toEqual([]);
    });
  });
});