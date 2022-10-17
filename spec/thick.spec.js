require('../prod/array-x');

describe('thick()', () => {
  it('should leave array untouched if it has no empty slots', () => {
    expect(
      [1,2,3,4].x.thick()
    ).toEqual([1,2,3,4]);
  });
  it('should remove empty slots', () => {
    expect(
      [,0,1,,null,undefined,,false,true].x.thick()
    ).toEqual([0,1,null,undefined,false,true]);
  });
});