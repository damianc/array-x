require('../prod/array-x');

describe('group()', () => {
  describe('with empty array', () => {
    it('should return empty object', () => {
      expect([].x.group(() => 'foo')).toEqual({});
    });
  });

  describe('with one-item array', () => {
    describe('containing matching item', () => {
      it('should return one-key object for full factory', () => {
        expect([1].x.group(x => x % 2 === 0 ? 'even' : 'odd')).toEqual({odd: [1]});
      });
      it('should return one-key object for half factory', () => {
        expect([1].x.group(x => x % 2 !== 0 ? 'odd' : null)).toEqual({odd: [1]});
      });
    });
    describe('containing non-matching item', () => {
      it('should return one-key object for full factory', () => {
        expect([1].x.group(x => x % 2 === 0 ? 'even' : 'odd')).toEqual({odd: [1]});
      });
      it('should return empty object for half factory', () => {
        expect([2].x.group(x => x % 2 !== 0 ? 'odd' : null)).toEqual({});
      });
    });
  });

  describe('with one label factory', () => {
    it('should return two-keys object for ever-producing factory', () => {
      expect(
        [1, 2, 3, 4, 5, 6].x.group(x => x % 2 === 0 ? 'even' : 'odd')
      ).toEqual({
        even: [2, 4, 6],
        odd: [1, 3, 5]
      });
    });
    it('should return one-key object for half-producing factory', () => {
      expect(
        [1, 2, 3, 4, 5, 6].x.group(x => x % 2 === 0 ? 'even' : null)
      ).toEqual({
        even: [2, 4, 6]
      });
    });
  });

  describe('with one label factory being property selector', () => {
    it('should return object having as many keys as there are different values for property', () => {
      expect(
        [{ name: 'Mark', city: 'LA' }, { name: 'John', city: 'NY' }, { name: 'Adam', city: 'LA' }].x.group(
          u => u.city
        )
      ).toEqual({
        LA: [{ name: 'Mark', city: 'LA' }, { name: 'Adam', city: 'LA' }],
        NY: [{ name: 'John', city: 'NY' }]
      });
    });
  });

  describe('with two label factories', () => {
    describe('of which both are ever-producing', () => {
      it('should return object with 4 keys', () => {
        expect(
          [1, 2, 30, 45, 6, 7, 89].x.group(
            x => x % 2 === 0 ? 'even' : 'odd',
            x => x > 9 ? 'multidigit' : 'digit'
          )
        ).toEqual({
          even: [2, 30, 6],
          odd: [1, 45, 7, 89],
          multidigit: [30, 45, 89],
          digit: [1, 2, 6, 7]
        });
      });
    });
    describe('of which both are half-producing', () => {
      it('should return object with 2 keys', () => {
        expect(
          [1, 2, 34, 35, 6, 7, 89, 90].x.group(
            x => x % 2 === 0 ? 'even' : null,
            x => x > 9 ? 'multidigit' : null
          )
        ).toEqual({
          even: [2, 34, 6, 90],
          multidigit: [34, 35, 89, 90]
        });
      });
    });
    describe('of different types', () => {
      it('should return object with 3 keys', () => {
        expect(
          [1, 2, 34, 35, 6, 7, 89, 90].x.group(
            x => x % 2 === 0 ? 'even' : 'odd',
            x => x > 9 ? 'multidigit' : null
          )
        ).toEqual({
          even: [2, 34, 6, 90],
          odd: [1, 35, 7, 89],
          multidigit: [34, 35, 89, 90]
        })
      });
    });
  });
});