require('../prod/array-x');

describe('countAll() with empty array should return empty object', () => {
  it('if no label factory is given', () => {
    expect([].x.countAll()).toEqual({});
  });
  it('if one label factory is given', () => {
    expect([].x.countAll(str => str.length)).toEqual({});
  });
  it('if multiple label factories are given', () => {
    expect(
      [].x.countAll(
        x => x % 2 === 0 ? 'even' : 'odd',
        x => x > 9 ? 'multidigit' : 'digit'
      )
    ).toEqual({});
  });
});

describe('countAll() with not empty array', () => {
  it('should count exact values if no label factory is given', () => {
    expect(
      [1, 2, 3, 2, 1].x.countAll()
    ).toEqual({ 1: 2, 2: 2, 3: 1 });
  });
  it('should count values by label produced by given factory', () => {
    expect(
      [1, 2, 3, 4, 5].x.countAll(x => x % 2 === 0 ? 'even' : 'odd')
    ).toEqual({ even: 2, odd: 3 });
  });
  it('should count values with multiple factories and return object with 4 keys', () => {
    expect(
      [1, 23, 4, 56, 7, 89].x.countAll(
        x => x % 2 === 0 ? 'even' : 'odd',
        x => x > 9 ? 'multidigit' : 'digit'
      )
    ).toEqual({
      even: 2,
      odd: 4,
      multidigit: 3,
      digit: 3
    });
  });
  it('should count values with multiple factories and return object with 3 keys', () => {
    expect(
      [1, 23, 4, 56, 7, 89].x.countAll(
        x => x % 2 === 0 ? 'even' : 'odd',
        x => x > 9 ? 'multidigit' : null
      )
    ).toEqual({
      even: 2,
      odd: 4,
      multidigit: 3
    });
  });
  it('should count cities of users', () => {
    expect(
      [
        { name: 'Mark', city: 'LA' },
        { name: 'John', city: 'NY' },
        { name: 'Adam', city: 'LA' }
      ].x.countAll(u => u.city)
    ).toEqual({ LA: 2, NY: 1 });
  });
});