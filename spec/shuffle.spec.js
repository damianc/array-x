require('../prod/array-x');

describe('shuffle()', () => {
  it('should re-order items of array', () => {
    const arr = [1,2,3,4];
    const shuffled = [
      arr.x.shuffle(),
      arr.x.shuffle(),
      arr.x.shuffle(),
      arr.x.shuffle()
    ];
    expect(shuffled + '').not.toEqual(
      '1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4'
    );
  });
});