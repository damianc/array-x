require('../prod/array-x');

beforeEach(() => {
  this.reducer = (acc, curr) => acc + curr;
  this.finalizer = (sum, arr) => sum / arr.length;
});

describe('reduce() with reducer parameter', () => {
  it('should return reduced value', () => {
    expect(
      [1,2,3,4].x.reduce(this.reducer)
    ).toEqual(10);
  });
});

describe('reduce() with reducer and finalizer parameters', () => {
  it('should return reduced value modified by finalizer', () => {
    expect(
      [1,2,3,4].x.reduce(this.reducer, this.finalizer)
    ).toEqual(2.5);
  });
});

describe('reduce() with all parameters', () => {
  it('should return reduced value increased by init value', () => {
    expect(
      [1,2,3,4].x.reduce(this.reducer, null, 10)
    ).toEqual(20);
  });
  it('should return reduced value increased by init value modified by finalizer', () => {
    expect(
      [1,2,3,4].x.reduce(this.reducer, this.finalizer, 10)
    ).toEqual(5);
  });
});