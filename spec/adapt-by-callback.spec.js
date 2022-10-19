require('../prod/array-x');

describe('adaptByCallback() with only other array', () => {
  it('should adapt only first other value', () => {
    expect(
      [1,2,1,2].x.adaptByCallback([1,20,1,20])
    ).toEqual([1,20,1,2]);
  });
});

describe('adaptByCallback() with callback', () => {
  it('should adapt only first other value for which callback returns true', () => {
    expect(
      [1,2,3,4,5,6].x.adaptByCallback(
        [1,2,30,40,50,60],
        (a, b) => (a % 2 === 0) && (b % 2 === 0)
      )
    ).toEqual([1,2,3,40,5,6]);
  });
  it('should adapt only first two other values for which callback returns true if adapts equals 2', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.adaptByCallback(
        [1,2,30,40,50,60,70,80],
        a => a % 2 === 0,
        2
      )
    ).toEqual([1,2,3,40,5,60,7,8]);
  });
  it('should adapt all other values for which callback returns true if adapts equals -1', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.adaptByCallback(
        [1,2,30,40,50,60,70,80],
        a => a % 2 === 0,
        -1
      )
    ).toEqual([1,2,3,40,5,60,7,80]);
  });
});

describe('adaptByCallback() in lazy mode', () => {
  it('should count values that differ rather than those changed', () => {
    expect(
      [1,2,3,4,5,6].x.adaptByCallback(
        [1,2,30,40,50,60],
        a => a % 2 === 0,
        2,
        true
      )
    ).toEqual([1,2,3,40,5,6]);
  });
});