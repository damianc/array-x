require('../prod/array-x');

beforeEach(() => {
  this.isAscendingOrder = (l, r) => l <= r;
  this.isSumTriplet = (l, r, sum) => l + r === sum;
});

describe('audit() on empty array', () => {
  it('should return false', () => {
    expect(
      [].x.audit(this.isAscendingOrder)
    ).toEqual(false);
  });
});

describe('audit() on short array', () => {
  it('should return false if array length is less than required frame length', () => {
    expect(
      [1,2].x.audit(this.isSumTriplet, 3)
    ).toEqual(false);
  });
});

describe('audit() without frameSize parameter', () => {
  it('should take 2 items by default', () => {
    expect(
      [1,2,3,4].x.audit(this.isAscendingOrder)
    ).toEqual(true);
  });
});

describe('audit() with frameSize parameter', () => {
  it('should take N items', () => {
    expect(
      [1,2,3,5,8,13].x.audit(this.isSumTriplet, 3)
    ).toEqual(true);
  });
});
