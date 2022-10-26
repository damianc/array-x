require('../prod/array-x');

beforeEach(() => {
  this.even = x => x % 2 === 0;
  this.odd = x => x % 2 !== 0;
});

describe('extractSub() without parameters', () => {
  it('should return empty array', () => {
    expect(
      [1,2,3,4,5,6,7,8].x.extractSub()
    ).toEqual([]);
  });
});

describe('extractSub() with pattern parameter', () => {
  it('containing only literal values, should match sub-arrays', () => {
    expect(
      [1,2,3,4,1,2,3,4].x.extractSub([1,2])
    ).toEqual([
      [ 0, [1,2] ],
      [ 4, [1,2] ]
    ]);
  });
  it('containing only testers, should match sub-arrays', () => {
    expect(
      [1,2,3,4,1,2,3,4].x.extractSub([this.even,this.odd])
    ).toEqual([
      [ 1, [2,3] ],
      [ 3, [4,1] ],
      [ 5, [2,3] ]
    ]);
  });
  it('containing literal values and testers, should match sub-arrays', () => {
    expect(
      [1,2,3,4,1,2,3,4].x.extractSub([2,this.odd])
    ).toEqual([
      [ 1, [2,3] ],
      [ 5, [2,3] ]
    ]);
  });
});

describe('extractSub() with overlaying sub-arrays', () => {
  it('should match all by default', () => {
    expect(
      [1,2,4,6,3,5,8,10,12,15].x.extractSub([this.even,this.even])
    ).toEqual([
      [ 1, [2,4] ],
      [ 2, [4,6] ],
      [ 6, [8,10] ],
      [ 7, [10,12] ]
    ]);
  });
  it('should match every item only once', () => {
    expect(
      [1,2,4,6,3,5,8,10,12,15].x.extractSub([this.even,this.even], true, false)
    ).toEqual([
      [ 1, [2,4] ],
      [ 6, [8,10] ]
    ]);
  });
});

describe('extractSub() without multi mode', () => {
  it('should return only one tuple with matched sub-array', () => {
    expect(
      [1,2,3,4].x.extractSub([this.odd,this.even], false)
    ).toEqual([ 0, [1,2] ]);
  });
});

describe('extractSub() matching no sub-array', () => {
  it('should return empty array', () => {
    expect(
      [1,2,3,4].x.extractSub([x => x >= 100])
    ).toEqual([]);
  });
});