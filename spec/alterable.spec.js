require('../prod/array-x');

describe('alterable()', () => {
  it('should return array free of frozen() effects', () => {
    const arr = [1,2,3,4];
    arr.x.frozen();
    const alt = arr.x.alterable();
    alt.pop();
    alt.push(5);
    alt[0] = 100;
    expect(alt).toEqual([100,2,3,5]);
  });

  it('should return array free of fixed() effects', () => {
    const arr = [1,2,3,4];
    arr.x.fixed();
    const alt = arr.x.alterable();
    alt.pop();
    alt.push(5);
    alt[0] = 100;
    expect(alt).toEqual([100,2,3,5]);
  });

  it('should return array free of dwarf() effects', () => {
    const arr = [1,2,3,4];
    arr.x.dwarf();
    const alt = arr.x.alterable();
    alt.pop();
    alt.push(5);
    alt[0] = 100;
    expect(alt).toEqual([100,2,3,5]);
  });
});