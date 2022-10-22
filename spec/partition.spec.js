require('../prod/array-x');

describe('partition() without parameter', () => {
  it('should create one partition with entire input array', () => {
    expect(
      [1,2,3,4,5,6].x.partition()
    ).toEqual([ [1,2,3,4,5,6] ]);
  });
});

describe('partition() with binary partitioner', () => {
  it('should create two partitions if partitioner returns boolean', () => {
    expect(
      [1,2,3,4,5,6].x.partition(x => x % 2 === 0)
    ).toEqual([ [1,3,5], [2,4,6] ]);
  });
  it('should create two partitions if partitioner returns negated boolean', () => {
    expect(
      [1,2,3,4,5,6].x.partition(x => !(x % 2 === 0))
    ).toEqual([ [2,4,6], [1,3,5] ]);
  });
  it('should create two partitions if partitioner returns number', () => {
    expect(
      [1,2,3,4,5,6].x.partition(x => x % 2 === 0 ? 0 : 1)
    ).toEqual([ [2,4,6], [1,3,5] ]);
  });
});

describe('partition() with complex partitioner', () => {
  it('should create N partitions ordered ascending by partitioner result', () => {
    expect(
      [6,5,4,3,2,1].x.partition(x => {
        if (x <= 2) return 10;
        if (x <= 4) return 20;
        return 30;
      })
    ).toEqual([ [2,1], [4,3], [6,5] ]);
  });
  it('should create N partitions by first letter of string', () => {
    expect(
      ['Alabama', 'Idaho', 'Texas', 'Arizona', 'Illinois'].x.partition(str => {
        return str.charCodeAt(0);
      })
    ).toEqual([ ['Alabama','Arizona'], ['Idaho','Illinois'], ['Texas'] ]);
  });
});