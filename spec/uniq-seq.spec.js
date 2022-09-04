require('../prod/array-x');

describe('uniqSeq() should handle empty array', () => {
  it('without selector', () => {
    expect([].x.uniqSeq()).toEqual([]);
  });
  it('with selector', () => {
    expect([].x.uniqSeq(e => e.id)).toEqual([]);
  });
});

describe('uniqSeq() should handle one-item array', () => {
  it('without selector', () => {
    expect([10].x.uniqSeq()).toEqual([10]);
  });
  it('with selector', () => {
    expect([{id: 10}].x.uniqSeq(e => e.id)).toEqual([{id: 10}]);
  });
});

describe('uniqSeq() should handle two-items array', () => {
  describe('of same value', () => {
    it('without selector', () => {
      expect([10, 10].x.uniqSeq()).toEqual([10]);
    });
    it('with selector', () => {
      expect([{id: 10}, {id: 10}].x.uniqSeq(e => e.id)).toEqual([{id: 10}]);
    });
  });
  describe('of different values', () => {
    it('without selector', () => {
      expect([10, 20].x.uniqSeq()).toEqual([10, 20]);
    });
    it('with selector', () => {
      expect([{id: 10}, {id: 20}].x.uniqSeq(e => e.id)).toEqual([{id: 10}, {id: 20}]);
    });
  });
});

describe('uniqSeq() should handle 3+ items array', () => {
  describe('of same value', () => {
    it('without selector', () => {
      expect([10, 10, 10, 10].x.uniqSeq()).toEqual([10]);
    });
    it('with selector', () => {
      expect([
        {id: 10}, {id: 10}, {id: 10}, {id: 10}
      ].x.uniqSeq(e => e.id)).toEqual([
        {id: 10}
      ]);
    });
  });
  describe('of different values', () => {
    it('without selector', () => {
      expect([10, 20, 30, 40].x.uniqSeq()).toEqual([10, 20, 30, 40]);
    });
    it('with selector', () => {
      expect([
        {id: 10}, {id: 20}, {id: 30}, {id: 40}
      ].x.uniqSeq(e => e.id)).toEqual([
        {id: 10}, {id: 20}, {id: 30}, {id: 40}
      ]);
    });
  });
  describe('of different pairs', () => {
    it('without selector', () => {
      expect([10, 20, 10, 20, 30, 30].x.uniqSeq()).toEqual([10, 20, 10, 20, 30]);
    });
    it('with selector', () => {
      expect([
        {id: 10}, {id: 20}, {id: 10}, {id: 20}, {id: 30}, {id: 30}
      ].x.uniqSeq(e => e.id)).toEqual([
        {id: 10}, {id: 20}, {id: 10}, {id: 20}, {id: 30}
      ]);
    });
  });
  describe('of symmetric values', () => {
    it('without selector', () => {
      expect([
        1, 2, 3, 3, 2, 2, 1, 1
      ].x.uniqSeq()).toEqual([
        1, 2, 3, 2, 1
      ]);
    });
    it('with selector', () => {
      expect([
        { x: 1, id: 100 },
        { x: 2, id: 101 },
        { x: 3, id: 102 },
        { x: 3, id: 103 },
        { x: 2, id: 104 },
        { x: 2, id: 105 },
        { x: 1, id: 106 },
        { x: 1, id: 107 }
      ].x.uniqSeq(obj => obj.x)).toEqual([
        { x: 1, id: 100 },
        { x: 2, id: 101 },
        { x: 3, id: 102 },
        { x: 2, id: 104 },
        { x: 1, id: 106 }
      ]);
    });
  });
});

describe('uniqSeq() should keep', () => {
  it('first occurence of item', () => {
    expect([
      {x:10,y:10}, {x:10,y:20}, {x:20,y:20}, {x:20,y:10}
    ].x.uniqSeq(coords => coords.x)).toEqual([
      {x:10,y:10}, {x:20,y:20}
    ]);
  });
});