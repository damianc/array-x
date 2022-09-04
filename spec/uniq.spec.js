require('../prod/array-x');

describe('uniq() should handle empty array', () => {
  it('without selector', () => {
    expect([].x.uniq()).toEqual([]);
  });
  it('with selector', () => {
    expect([].x.uniq(e => e.id)).toEqual([]);
  });
});

describe('uniq() should handle one-item array', () => {
  it('without selector', () => {
    expect([10].x.uniq()).toEqual([10]);
  });
  it('with selector', () => {
    expect([{id: 10}].x.uniq(e => e.id)).toEqual([{id: 10}]);
  });
});

describe('uniq() should handle two-items array', () => {
  describe('of same value', () => {
    it('without selector', () => {
      expect([10, 10].x.uniq()).toEqual([10]);
    });
    it('with selector', () => {
      expect([{id: 10}, {id: 10}].x.uniq(e => e.id)).toEqual([{id: 10}]);
    });
  });
  describe('of different values', () => {
    it('without selector', () => {
      expect([10, 20].x.uniq()).toEqual([10, 20]);
    });
    it('with selector', () => {
      expect([{id: 10}, {id: 20}].x.uniq(e => e.id)).toEqual([{id: 10}, {id: 20}]);
    });
  });
});

describe('uniq() should handle 3+ items array', () => {
  describe('of same value', () => {
    it('without selector', () => {
      expect([10, 10, 10, 10].x.uniq()).toEqual([10]);
    });
    it('with selector', () => {
      expect([
        {id: 10}, {id: 10}, {id: 10}, {id: 10}
      ].x.uniq(e => e.id)).toEqual([
        {id: 10}
      ]);
    });
  });
  describe('of different values', () => {
    it('without selector', () => {
      expect([10, 20, 30, 40].x.uniq()).toEqual([10, 20, 30, 40]);
    });
    it('with selector', () => {
      expect([
        {id: 10}, {id: 20}, {id: 30}, {id: 40}
      ].x.uniq(e => e.id)).toEqual([
        {id: 10}, {id: 20}, {id: 30}, {id: 40}
      ]);
    });
  });
  describe('of different pairs', () => {
    it('without selector', () => {
      expect([10, 20, 10, 20, 30, 30].x.uniq()).toEqual([10, 20, 30]);
    });
    it('with selector', () => {
      expect([
        {id: 10}, {id: 20}, {id: 10}, {id: 20}, {id: 30}, {id: 30}
      ].x.uniq(e => e.id)).toEqual([
        {id: 10}, {id: 20}, {id: 30}
      ]);
    });
  });
});

describe('uniq() should keep', () => {
  it('first occurence of item', () => {
    expect([
      {x:10,y:10}, {x:10,y:20}, {x:20,y:20}, {x:20,y:10}
    ].x.uniq(coords => coords.x)).toEqual([
      {x:10,y:10}, {x:20,y:20}
    ]);
  });
});