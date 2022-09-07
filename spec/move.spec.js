require('../prod/array-x');

describe('move() with dirty input', () => {
  it('should do nothing when passed no parameter', () => {
    expect([1,2,3,4].x.move()).toEqual([1,2,3,4]);
  });
  it('should do nothing when only passed source index', () => {
    expect([1,2,3,4].x.move(2)).toEqual([1,2,3,4]);
  });
  it('should move to the beginning if target index is not passed', () => {
    expect([1,2,3,4].x.move(2, 2)).toEqual([3,4,1,2]);
  });
});

describe('move() with empty range', () => {
  it('should not alter array', () => {
    expect([1,2,3,4].x.move(2, 0, 0)).toEqual([1,2,3,4]);
  });
});

describe('move() with negative range', () => {
  it('should not alter array', () => {
    expect([1,2,3,4].x.move(2, -2, 4)).toEqual([1,2,3,4]);
  });
});

describe('move() with excessive indexes', () => {
  describe('should take too large negative index as 0', () => {
    it('when it comes to source range', () => {
      expect([1,2,3,4,5,6].x.move(-20, 2, 2)).toEqual([3,4,1,2,5,6]);
    });
    it('when it comes to target position', () => {
      expect([1,2,3,4,5,6].x.move(2, 2, -20)).toEqual([3,4,1,2,5,6]);
    });
  });
  describe('should take too large positive index as array size', () => {
    it('when it comes to source range', () => {
      expect([1,2,3,4,5,6].x.move(20, 2, 0)).toEqual([1,2,3,4,5,6]);
    });
    it('when it comes to target position', () => {
      expect([1,2,3,4,5,6].x.move(2, 2, 20)).toEqual([1,2,5,6,3,4]);
    });
  });
});

describe('move() with partially excessive indexes', () => {
  describe('for range', () => {
    it('should take half of tail for negative index', () => {
      expect([1,2,3,4,5,6].x.move(-1, 2, 2)).toEqual([1,2,6,3,4,5]);
    });
    it('should take half of requested tail', () => {
      expect([1,2,3,4,5,6].x.move(5, 2, 2)).toEqual([1,2,6,3,4,5]);
    });
  });
  describe('for target position', () => {
    it('should take sticking left side from the right to the left', () => {
      expect([1,2,3,4,5,6].x.move(2, 2, -1)).toEqual([1,2,5,6,3,4]);
    });
    it('should reduce right side to the end', () => {
      expect([1,2,3,4,5,6].x.move(2, 2, 6)).toEqual([1,2,5,6,3,4]);
    });
  });
});

describe('move() with 1-item range', () => {
  describe('defined with non-negative index', () => {
    it('should move first item to the end', () => {
      expect([1,2,3,4].x.move(0, 1, 3)).toEqual([2,3,4,1]);
    });
    it('should move last item to the beginning', () => {
      expect([1,2,3,4].x.move(3, 1, 0)).toEqual([4,1,2,3]);
    });
    it('should move second item by two items to the right', () => {
      expect([1,2,3,4,5,6].x.move(1, 1, 3)).toEqual([1,3,4,2,5,6]);
    });
    it('should move second to last item by two items to the left', () => {
      expect([1,2,3,4,5,6].x.move(4, 1, 2)).toEqual([1,2,5,3,4,6]);
    });
  });
  describe('defined with negative index', () => {
    it('should move first item to the end', () => {
      expect([1,2,3,4].x.move(0, 1, -1)).toEqual([2,3,4,1]);
    });
    it('should move last item to the beginning', () => {
      expect([1,2,3,4].x.move(-1, 1, 0)).toEqual([4,1,2,3]);
    });
    it('should move second to last item by two items to the left', () => {
      expect([1,2,3,4,5,6].x.move(-2, 1, -4)).toEqual([1,2,5,3,4,6]);
    });
    it('should move second to last item by two items to the right (what results in placing it on the end)', () => {
      expect([1,2,3,4,5,6].x.move(-2, 1, -1)).toEqual([1,2,3,4,6,5]);
    });
  });
});

describe('move() with existing range', () => {
  describe('defined with non-negative indexes', () => {
    it('should move 2 first items by 2 items to the right', () => {
      expect([1,2,3,4,5,6].x.move(0, 2, 2)).toEqual([3,4,1,2,5,6]);
    });
    it('should move 2 last items by 2 items to the left', () => {
      expect([1,2,3,4,5,6].x.move(4, 2, 2)).toEqual([1,2,5,6,3,4]);
    });
    it('should move 2 first items to the end', () => {
      expect([1,2,3,4,5,6].x.move(0, 2, 4)).toEqual([3,4,5,6,1,2]);
    });
    it('should move 2 last items to the beginning', () => {
      expect([1,2,3,4,5,6].x.move(4, 2, 0)).toEqual([5,6,1,2,3,4]);
    });
  });
});