require('../prod/array-x');

describe('wavg() with empty array', () => {
  it('should work without weights', () => {
    expect([].x.wavg()).toEqual(null);
  });
  it('should work with empty weights', () => {
    expect([].x.wavg([])).toEqual(null);
    expect([].x.wavg([], str => str.length)).toEqual(null);
  });
  it('should work with weights', () => {
    expect([].x.wavg([1, 2, 3, 4])).toEqual(null);
    expect([].x.wavg([1, 2, 3, 4], str => str.length)).toEqual(null);
  });
});

describe('wavg() with weights', () => {
  it('should handle one-item array', () => {
    expect([4].x.wavg([2])).toEqual(4);
  });
  it('should handle two-items array', () => {
    expect([3, 3].x.wavg([3, 2])).toEqual(3);
  });
  it('should handle 3+ items array', () => {
    expect([1, 2, 3, 4].x.wavg([4, 3, 2, 1])).toEqual(2);
  });
});

describe('wavg() without weights', () => {
  it('should assume 1 as default weight', () => {
    expect([1, 2, 3, 4].x.wavg()).toEqual(2.5);
  });
});

describe('wavg() with 1 weights', () => {
  describe('should return average', () => {
    it('when number of weights equals to input array', () => {
      expect([1, 2, 3, 4].x.wavg([1, 1, 1, 1])).toEqual(2.5);
    });
    it('when number of weights is greater than input array', () => {
      expect([1, 2, 3, 4].x.wavg([1, 1, 1, 1, 1, 1])).toEqual(2.5);
    });
    it('when number of weights is less than input array', () => {
      expect([1, 2, 3, 4].x.wavg([1, 1])).toEqual(2.5);
    });
  });
});

describe('wavg() with all the same weights', () => {
  it('should equal to avg()', () => {
    const arr = [1, 2, 3, 4];
    expect(arr.x.wavg([4, 4, 4, 4])).toEqual(arr.x.avg());
  });
});

describe('wavg() with different number of weights', () => {
  it('should ignore extra weights', () => {
    expect([3, 3].x.wavg([3, 2, 3, 2])).toEqual(3);
  });
  it('should use 1 for lacking weights', () => {
    expect([3, 3].x.wavg([3])).toEqual(3);
  });
});

describe('wavg() with mapper', () => {
  describe('and without weights', () => {
    it('should return average length of strings in array', () => {
      expect(['xx', 'xxx', 'x'].x.wavg([], str => str.length)).toEqual(2);
    });
  });
  describe('and with weights', () => {
    it('should return weighted average length of strings in array', () => {
      expect(['xxx', 'xxx'].x.wavg([3, 2], str => str.length)).toEqual(3);
    });
  });
});

describe('wavg() with weights selector', () => {
  it('should get proper weight for each item', () => {
    const weightedAvg = [
      { examId: 120, examWeight: 1, mark: 5 },
      { examId: 121, examWeight: 1, mark: 4 },
      { examId: 122, examWeight: 3, mark: 4.5 },
      { examId: 123, examWeight: 2, mark: 5.5 },
      { examId: 124, examWeight: 4, mark: 5 }
    ].x.wavg(
      exam => exam.examWeight,
      exam => exam.mark
    );
    expect(+weightedAvg.toFixed(2)).toEqual(4.86);
  });
});