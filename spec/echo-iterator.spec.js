require('../prod/array-x');

describe('echoIterator()', () => {
  it('should reverse sequence when current is done and repeat it on', () => {
    const ei = [1,2,3,4].x.echoIterator();
    const res = [];
    for (let i = 1; i <= 12; i++) {
      res.push(ei.current);
      ei.next();
    }
    expect(
      res.join('-')
    ).toEqual('1-2-3-4-3-2-1-2-3-4-3-2');
  });
  it('when sticky, should do as above but repeating boundaries', () => {
    const ei = [1,2,3,4].x.echoIterator(true);
    const res = [];
    for (let i = 1; i <= 12; i++) {
      res.push(ei.current);
      ei.next();
    }
    expect(
      res.join('-')
    ).toEqual('1-2-3-4-4-3-2-1-1-2-3-4');
  });
});