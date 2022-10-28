require('../prod/array-x');

beforeEach(() => {
  this.nestedArr = [1,2,[3,4,[5,6],7,8],9,10];
});

describe('flat() without parameter', () => {
  it('should leave shallow array unchanged', () => {
    expect(
      [1,2,3,4].x.flat()
    ).toEqual([1,2,3,4]);
  });
  it('should deep flat array', () => {
    expect(
      this.nestedArr.x.flat()
    ).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});

describe('flat() with parameter', () => {
  it('should leave array unchanged if parameter is negative and less than -1', () => {
    expect(
      this.nestedArr.x.flat(-4)
    ).toEqual(this.nestedArr);
  });
  it('should leave array unchanged if parameter equals 0', () => {
    expect(
      this.nestedArr.x.flat(0)
    ).toEqual(this.nestedArr);
  });
  it('should shallow flat array if parameter equals 1', () => {
    expect(
      this.nestedArr.x.flat(1)
    ).toEqual([1,2,3,4,[5,6],7,8,9,10]);
  });
  it('should flat array 3 levels deep if parameter equals 3', () => {
    expect(
      [1,[2,[3,[4,[5,[6,7],8],9],10],11],12].x.flat(3)
    ).toEqual([1,2,3,4,[5,[6,7],8],9,10,11,12]);
  });
});