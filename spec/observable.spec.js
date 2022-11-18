require('../prod/array-x');

beforeEach(() => {
  this.pushHandler = (array, itemsAdded, callRes) => {};
  this.popHandler = (array, itemRemoved) => {};
});

describe('observable() / prototype', () => {
  it('should change prototype', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    const proto = Object.getPrototypeOf(arr);
    expect(
      [ 'on' in proto, 'off' in proto ]
    ).toEqual([ true, true ]);
  });
  it('should restore prototype after calling unobserve()', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    arr.unobserve();
    const proto = Object.getPrototypeOf(arr);
    expect(
      [ 'on' in proto, 'off' in proto ]
    ).toEqual([ false, false ]);
  });
});

describe('observable() / native methods', () => {
  it('should push single item to array', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    arr.push(5);
    expect(arr).toEqual([1,2,3,4,5]);
  });
  it('should push multiple items to array', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    arr.push(5,6,7,8);
    expect(arr).toEqual([1,2,3,4,5,6,7,8]);
  });
  it('should pop item from array', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    arr.pop();
    expect(arr).toEqual([1,2,3]);
  });
});

describe('observable() / push handlers', () => {
  it('should call push handler when adding single item', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    const _handler = spyOn(this, 'pushHandler');
    arr.on('push', this.pushHandler);
    arr.push(5);
    expect(_handler).toHaveBeenCalledWith([1,2,3,4,5], [5], 5);
  });
  it('should call push handler when adding multiple items', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    const _handler = spyOn(this, 'pushHandler');
    arr.on('push', this.pushHandler);
    arr.push(5,6,7,8);
    expect(_handler).toHaveBeenCalledWith([1,2,3,4,5,6,7,8], [5,6,7,8], 8);
  });
  it('should call push handler everytime stuff is added to array', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    const _handler = spyOn(this, 'pushHandler');
    arr.on('push', this.pushHandler);
    arr.push(5);
    arr.push(6);
    expect(_handler).toHaveBeenCalledTimes(2);
  });
});

describe('observable() / pop handlers', () => {
  it('should call pop handler when removing item', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    const _handler = spyOn(this, 'popHandler');
    arr.on('pop', this.popHandler);
    arr.pop();
    expect(_handler).toHaveBeenCalledWith([1,2,3], 4);
  });
  it('should call push handler everytime stuff is removed from array', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    const _handler = spyOn(this, 'popHandler');
    arr.on('pop', this.popHandler);
    arr.pop();
    arr.pop();
    expect(_handler).toHaveBeenCalledTimes(2);
  });
});

describe('observable() / removing handlers', () => {
  it('should remove specific handler with off() method', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    let i = 1;
    const inc = () => i += 1;
    arr.on('pop', inc);
    arr.pop();
    arr.off('pop', inc);
    arr.pop();
    expect(i).toEqual(2);
    // const _handler = spyOn(this, 'popHandler');
    // arr.on('pop', this.popHandler);
    // arr.pop();
    // arr.off('pop', this.popHandler);
    // arr.pop();
    // expect(_handler).toHaveBeenCalledOnceWith([1,2,3], 4);
  });
  it('should remove all handlers for given action', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    let r1 = 1, r2 = 1, a = 1;
    const incR1 = () => r1 += 1;
    const incR2 = () => r2 += 1;
    const incA = () => a += 1;
    arr.on('pop', incR1);
    arr.on('pop', incR2);
    arr.on('push', incA);
    arr.push(5); // a -> 2
    arr.pop(); // r1 -> 2, r2 -> 2
    arr.cleanListeners('pop');
    arr.push(6); // a -> 3
    arr.pop();
    expect([r1, r2, a]).toEqual([2,2,3])
  });
  it('should remove all handlers for all actions', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    let r1 = 1, r2 = 1, a = 1;
    const incR1 = () => r1 += 1;
    const incR2 = () => r2 += 1;
    const incA = () => a += 1;
    arr.on('pop', incR1);
    arr.on('pop', incR2);
    arr.on('push', incA);
    arr.push(5); // a -> 2
    arr.pop(); // r1 -> 2, r2 -> 2
    arr.cleanAllListeners();
    arr.push(6);
    arr.pop();
    expect([r1, r2, a]).toEqual([2,2,2])
  });
});

describe('observable() / unsupported types of action and handlers', () => {
  it('should throw error when passing to on()', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    expect(() => {
      arr.on('xd', console.log);
    }).toThrow();
  });
  it('should throw error when passing to off()', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    expect(() => {
      arr.off('xd', console.log);
    }).toThrow();
  });
  it('should throw error when passing to cleanListeners()', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    expect(() => {
      arr.cleanListeners('xd');
    }).toThrow();
  });
  it('should throw error when passing handler being not a function', () => {
    const arr = [1,2,3,4];
    arr.x.observable();
    expect(() => {
      arr.on('push', 1234);
    }).toThrow();
  });
});