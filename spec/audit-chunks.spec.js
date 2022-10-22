require('../prod/array-x');

beforeEach(() => {
  this.isAscendingOrder = (l, r) => l <= r;
  this.isSumTriplet = (l, r, sum) => l + r === sum;
});

describe('auditChunks() on empty array', () => {
  it('should return false', () => {
    expect(
      [].x.auditChunks(this.isAscendingOrder)
    ).toEqual(false);
  });
});

describe('auditChunks() on short array', () => {
  it('should return false if array length is less than required frame length', () => {
    expect(
      [1,2].x.auditChunks((_, __, rd) => rd === undefined, 3)
    ).toEqual(false);
  });
  it('unless last parameter is false', () => {
    expect(
      [1,2].x.auditChunks((_, __, rd) => rd === undefined, 3, false)
    ).toEqual(true);
  });
});

describe('auditChunks() without chunkSize parameter', () => {
  it('should take 2 items by default', () => {
    expect(
      [1,2,3,4].x.auditChunks(this.isAscendingOrder)
    ).toEqual(true);
  });
});

describe('auditChunks() with chunkSize parameter', () => {
  it('should take N items', () => {
    expect(
      [1,2,3,5,8,13].x.auditChunks(this.isSumTriplet, 3)
    ).toEqual(true);
  });
});

describe('auditChunks() on array with sticking tail', () => {
  it('should ignore sticking tail by default', () => {
    expect(
      [1,2,3,5,20].x.auditChunks(this.isSumTriplet, 3)
    ).toEqual(true);
  });
  it('should include sticking tail if last parameter is false', () => {
    expect(
      [1,2,3,5,20].x.auditChunks(this.isSumTriplet, 3, false)
    ).toEqual(false);
  });
  it('each chunk should be of the same length by default', () => {
    expect(
      [1,2,3,4,5].x.auditChunks((...chunk) => chunk.length === 2)
    ).toEqual(true);
    expect(
      [1,2,3,4,5].x.auditChunks((...chunk) => chunk.length === 2)
    ).toEqual(true);
  });
  it('last chunk may be of different length if last parameter is false', () => {
    expect(
      [1,2,3,4,5].x.auditChunks((...chunk) => chunk.length === 2, 2, false)
    ).toEqual(false);
    expect(
      [1,2,3,4,5].x.auditChunks((...chunk) => chunk.length === 2 || chunk[1] === undefined, 2, false)
    ).toEqual(true);
  });
});