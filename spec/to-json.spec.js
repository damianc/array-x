require('../prod/array-x');

describe('toJSON() without parameters', () => {
  it('should perform no action', () => {
    const arr = [1,2];
    arr.x.toJSON();
    expect(
      JSON.stringify({
        a: arr
      })
    ).toEqual('{"a":[1,2]}');
  });
  it('should remove applied stuff', () => {
    const arr = [1,2];
    arr.x.toJSON(nums => nums.map(n => n * 10));
    expect(
      JSON.stringify({
        a: arr
      })
    ).toEqual('{"a":[10,20]}');
    arr.x.toJSON();
    expect(
      JSON.stringify({
        a: arr
      })
    ).toEqual('{"a":[1,2]}');
  });
});

describe('toJSON() with parameters', () => {
  it('should process array before parsing to string', () => {
    const arr = [1,2,3,4];
    arr.x.toJSON(nums => {
      return nums.filter(n => n % 2 === 0).map(n => n * 10);
    });
    expect(
      JSON.stringify({
        a: arr
      })
    ).toEqual('{"a":[20,40]}');
  });
  it('should reduce array before parsing to string', () => {
    const arr = [1,2,3,4];
    arr.x.toJSON(nums => {
      return nums.reduce((acc, curr) => acc + curr);
    });
    expect(
      JSON.stringify({
        a: arr
      })
    ).toEqual('{"a":10}');
  });
});