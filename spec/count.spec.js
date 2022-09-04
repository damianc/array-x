require('../prod/array-x');

beforeEach(() => {
  this.numMatcher = x => x % 2 === 0;
  this.strMatcher = str => str.length >= 2;

  this.negNumMatcher = x => x > 100;
  this.negStrMatcher = str => str.length > 100;

  this.numArr = [1, 2, 3, 2, 1];
  this.strArr = ['x', 'xx', 'xxx', 'xx', 'x'];
});

describe('count() with empty array', () => {
  it('should work without matcher', () => {
    expect([].x.count(2)).toEqual(0);
  });
  it('should work with number matcher', () => {
    expect([].x.count(this.numMatcher)).toEqual(0);
  });
  it('should work with string matcher', () => {
    expect([].x.count(this.strMatcher)).toEqual(0);
  });
});

describe('count() without matcher', () => {
  describe('should handle one-item array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 1);
      strArr = this.strArr.slice(0, 1);
    });

    it('and find item', () => {
      expect(numArr.x.count(1)).toEqual(1);
      expect(strArr.x.count('x')).toEqual(1);
    });
    it('and not find item', () => {
      expect(numArr.x.count(100)).toEqual(0);
      expect(strArr.x.count('xxxx')).toEqual(0);
    });
  });

  describe('should handle two-items array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 2);
      strArr = this.strArr.slice(0, 2);
    });

    it('and find item', () => {
      expect(numArr.x.count(2)).toEqual(1);
      expect(strArr.x.count('xx')).toEqual(1);
    });
    it('and not find item', () => {
      expect(numArr.x.count(100)).toEqual(0);
      expect(strArr.x.count('xxxx')).toEqual(0);
    });
  });

  describe('should handle 3+ items array', () => {
    it('and find item', () => {
      expect(this.numArr.x.count(2)).toEqual(2);
      expect(this.strArr.x.count('xx')).toEqual(2);
    });
    it('and not find item', () => {
      expect(this.numArr.x.count(100)).toEqual(0);
      expect(this.strArr.x.count('xxxx')).toEqual(0);
    });
  });
});

describe('count() with matcher', () => {
  describe('should handle one-item array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 1);
      strArr = this.strArr.slice(0, 1);
    });

    it('and find item', () => {
      expect(numArr.x.count(x => x < 10)).toEqual(1);
      expect(strArr.x.count(str => str.length === 1)).toEqual(1);
    });
    it('and not find item', () => {
      expect(numArr.x.count(this.negNumMatcher)).toEqual(0);
      expect(strArr.x.count(this.negStrMatcher)).toEqual(0);
    });
  });

  describe('should handle two-items array', () => {
    let numArr, strArr;
    beforeEach(() => {
      numArr = this.numArr.slice(0, 2);
      strArr = this.strArr.slice(0, 2);
    });

    it('and find item', () => {
      expect(numArr.x.count(this.numMatcher)).toEqual(1);
      expect(strArr.x.count(this.strMatcher)).toEqual(1);
    });
    it('and not find item', () => {
      expect(numArr.x.count(this.negNumMatcher)).toEqual(0);
      expect(strArr.x.count(this.negStrMatcher)).toEqual(0);
    });
  });
  
  describe('should handle 3+ items array', () => {
    it('and find item', () => {
      expect(this.numArr.x.count(this.numMatcher)).toEqual(2);
      expect(this.strArr.x.count(this.strMatcher)).toEqual(3);
    });
    it('and not find item', () => {
      expect(this.numArr.x.count(this.negNumMatcher)).toEqual(0);
      expect(this.strArr.x.count(this.negStrMatcher)).toEqual(0);
    });
  });
});