require('../prod/array-x');

beforeEach(() => {
  this.fa = [].x.fold(user => user.name);
  this.john = { name: 'John', city: 'NY' };
  this.mark = { name: 'Mark', city: 'LA' };
});

describe('fold() called on empty array', () => {
  describe('should mask items added with push()', () => {
    it('one after one', () => {
      this.fa.push(this.john);
      this.fa.push(this.mark);
      expect(this.fa).toEqual(['John', 'Mark']);
    });
    it('all at once', () => {
      this.fa.push(this.john, this.mark);
      expect(this.fa).toEqual(['John', 'Mark']);
    });
  });
  describe('should mask items added with unshift()', () => {
    it('one after one', () => {
      this.fa.unshift(this.john);
      this.fa.unshift(this.mark);
      expect(this.fa).toEqual(['Mark', 'John']);
    });
    it('all at once', () => {
      this.fa.unshift(this.john, this.mark);
      expect(this.fa).toEqual(['John', 'Mark']);
    });
  });
});

describe('fold() called on non-empty array', () => {
  beforeEach(() => {
    this.adam = { name: 'Adam', city: 'LA' };
    this.mike = { name: 'Mike', city: 'NY' };
    this.nfa = [this.john, this.mark].x.fold(
      user => user.name
    );
  });

  describe('should mask items added with push()', () => {
    it('one after one', () => {
      this.nfa.push(this.adam);
      this.nfa.push(this.mike);
      expect(this.nfa).toEqual(
        ['John', 'Mark', 'Adam', 'Mike']
      );
    });
    it('all at once', () => {
      this.nfa.push(this.adam, this.mike);
      expect(this.nfa).toEqual(
        ['John', 'Mark', 'Adam', 'Mike']
      );
    });
  });
  describe('should mask items added with unshift()', () => {
    it('one after one', () => {
      this.nfa.unshift(this.adam);
      this.nfa.unshift(this.mike);
      expect(this.nfa).toEqual(
        ['Mike', 'Adam', 'John', 'Mark']
      );
    });
    it('all at once', () => {
      this.nfa.unshift(this.adam, this.mike);
      expect(this.nfa).toEqual(
        ['Adam', 'Mike', 'John', 'Mark']
      );
    });
  });
});

describe('accesing items of array on which fold() was called', () => {
   it('should mask item when accessing with index', () => {
    this.fa.push(this.john, this.mark);
    expect(this.fa[0]).toEqual('John');
    expect(this.fa[1]).toEqual('Mark');
  });
  it('should expose original full item when accessing with unfold() method', () => {
    this.fa.push(this.john, this.mark);
    expect(this.fa.x.unfold(0)).toEqual(this.john);
    expect(this.fa.x.unfold(1)).toEqual(this.mark);
  });
  it('unfold() method should return `undefined` for excessive index', () => {
    this.fa.push(this.john, this.mark);
    expect(this.fa.x.unfold(2)).toEqual(undefined);
    expect(this.fa.x.unfold(-1)).toEqual(undefined);
  });
});

describe('splice() called on fold array', () => {
  beforeEach(() => {
    this.paul = { name: 'Paul', city: 'LA' };
  });
  describe('should add', () => {
    it('just one item', () => {
      this.fa.push(this.john);
      this.fa.splice(1, 0, this.mark);
      expect(this.fa).toEqual(['John', 'Mark']);
    });
    it('multiple items', () => {
      this.fa.push(this.john);
      this.fa.splice(1, 0, this.mark, this.paul);
      expect(this.fa).toEqual(['John', 'Mark', 'Paul']);
    });
  });
  describe('should delete', () => {
    xit('head items', () => {
      this.fa.push(this.john, this.mark, this.paul);
      this.fa.splice(0, 2);
      expect(this.fa).toEqual(['Paul']);
    });
    it('tail items', () => {
      this.fa.push(this.john, this.mark, this.paul);
      this.fa.splice(1, 2);
      expect(this.fa).toEqual(['John']);
    });
    xit('middle items', () => {
      this.fa.push(
        this.john,
        this.mark,
        { name: 'David', city: 'NY' },
        this.paul
      );
      this.fa.splice(1,2);
      expect(this.fa).toEqual(['John', 'Paul']);
    });
  });
});