require('../prod/array-x');

describe('toString() without parameters', () => {
  it('should perform no action', () => {
    const arr = [1,2];
    arr.x.toString();
    expect(arr + '').toEqual('1,2');
    arr.splice(0,2);
    expect(arr + '').toEqual('');
  });
  it('should remove applied stuff', () => {
    const arr = [1,2,3,4];
    arr.x.toString(x => x * 10, ';', 'no items');
    expect(arr+'').toEqual('10;20;30;40');
    arr.splice(0,4);
    expect(arr+'').toEqual('no items');
    arr.push(1,2);
    arr.x.toString();
    arr.push(3,4);
    expect(arr+'').toEqual('1,2,3,4');
    arr.splice(0,4);
    expect(arr+'').toEqual('');
  });
});

describe('toString() with only one parameter', () => {
  it('should only map items if only parameter is itemMapper', () => {
    const arr = [1,2,3,4];
    arr.x.toString(x => x * 2);
    expect(arr + '').toEqual('2,4,6,8');
    arr.splice(0,4);
    expect(arr + '').toEqual('');
  });
  it('should only change separator if only parameter is separator', () => {
    const arr = [1,2,3,4];
    arr.x.toString(null, '; ');
    expect(arr + '').toEqual('1; 2; 3; 4');
    arr.splice(0,4);
    expect(arr + '').toEqual('');
  });
  it('should only change empty array string if only parameter is emptyMsg', () => {
    const arr = [1,2,3,4];
    arr.x.toString(null, null, 'no items');
    expect(arr + '').toEqual('1,2,3,4');
    arr.splice(0,4);
    expect(arr + '').toEqual('no items');
  });
});

describe('toString() without one parameter', () => {
  it('(mapper, separator) should map and join items with defined stuff', () => {
    const arr = [1,2,3,4];
    arr.x.toString(x => x * 2, '; ');
    expect(arr + '').toEqual('2; 4; 6; 8');
    arr.splice(0,4);
    expect(arr + '').toEqual('');
  });
  it('(mapper, null, msg) should map items and show alternative message for empty array', () => {
    const arr = [1,2,3,4];
    arr.x.toString(x => x * 2, null, 'no items');
    expect(arr + '').toEqual('2,4,6,8');
    arr.splice(0,4);
    expect(arr + '').toEqual('no items');
  });
  it('(null, separator, msg) should join items with given separator and show alternative message for empty array', () => {
    const arr = [1,2,3,4];
    arr.x.toString(null, '; ', 'no items');
    expect(arr + '').toEqual('1; 2; 3; 4');
    arr.splice(0,4);
    expect(arr + '').toEqual('no items');
  });
});

describe('toString() with all parameters', () => {
  it('should use custom stuff', () => {
    const arr = [
      { id: 1, name: 'John', city: 'LA' },
      { id: 2, name: 'Mark', city: 'NY' }
    ];
    arr.x.toString(
      u => u.name + ', ' + u.city,
      '; ',
      'no users'
    );
    expect(arr+'').toEqual(
      'John, LA; Mark, NY'
    );
    arr.splice(0,2);
    expect(arr+'').toEqual('no users');
    arr.push({ id: 3, name: 'Adam', city: 'LA' });
    arr.push({ id: 4, name: 'Bob', city: 'NY' });
    expect(arr+'').toEqual('Adam, LA; Bob, NY');
  });
  it('should handle any number of items', () => {
    const arr = [1,2];
    arr.x.toString(x => x * 10, ';', 'no items');
    expect(arr + '').toEqual('10;20');
    arr.pop();
    expect(arr+'').toEqual('10');
    arr.pop();
    expect(arr+'').toEqual('no items');
  });
});