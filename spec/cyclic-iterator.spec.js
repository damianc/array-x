require('../prod/array-x');

describe('cyclicIterator()', () => {
  it('should replay sequence when current is done', () => {
    const ci = [1,2,3,4].x.cyclicIterator();
    const res = [];
    for (let i = 1; i <= 10; i++) {
      res.push(ci.current);
      ci.next();
    }
    expect(
      res.join('-')
    ).toEqual('1-2-3-4-1-2-3-4-1-2');
  });
});