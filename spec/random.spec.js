require('../prod/array-x');

describe('random() without parameter', () => {
  it('should return one random value from array', () => {
    const arr = [1,2,3,4,5,6];
    const rand = arr.x.random();
    expect(arr).toContain(rand);
  });
  it('should return one random value that differs between most calls', () => {
    const arr = [1,2,3,4,5,6];
    const rands = [
      arr.x.random(), arr.x.random(), arr.x.random(), arr.x.random()
    ];
    const uniq = new Set(rands);
    expect(uniq.size).toBeGreaterThan(1);
  });
});

describe('random() with non-positive parameter', () => {
  it('should return undefined for count = 0', () => {
    expect([1,2,3,4].x.random(0)).toEqual(undefined);
  });
  it('should return undefined for count < 0', () => {
    expect([1,2,3,4].x.random(-1)).toEqual(undefined);
  });
});

describe('random() with parameter = 1', () => {
  it('should return one random value from array', () => {
    const arr = [1,2,3,4,5,6];
    const rand = arr.x.random(1);
    expect(arr).toContain(rand);
  });
});

describe('random() with parameter = 2', () => {
  it('should return array of 2 random values from array', () => {
    const arr = [1,2,3,4,5,6];
    const rands = arr.x.random(2);
    expect(rands.length).toEqual(2);
    expect(arr).toContain(rands[0]);
    expect(arr).toContain(rands[1]);
  });
});

describe('random() with parameter > array length', () => {
  it('should return all items in random order', () => {
    const arr = [1,2,3,4,5,6];
    const rands = arr.x.random(10);
    expect(rands.length).toEqual(6);
    expect(rands).not.toEqual(arr);
    expect(rands.sort()).toEqual(arr);
  });
});