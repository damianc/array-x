export default function observable() {
  const handlers = {
    onPush: [],
    onPop: [],
    // onUnshift: [],
    // onShift: [],
    // onSplice: [],
    // onReverse: [],
    // onSort: []
  };

  function getHandlersKey(type) {
    return 'on' + type[0].toUpperCase() + type.slice(1);
  }

  const api = {

    /* overrides */

    push(...items) {
      const res = Array.prototype.push.call(this, ...items);
      handlers.onPush.forEach(h => h(this, items, res));
      return res;
    },
    pop() {
      const res = Array.prototype.pop.call(this);
      handlers.onPop.forEach(h => h(this, res));
      return res;
    },

    /* listeners */

    on(type, handler) {
      const key = getHandlersKey(type);
      const _handlers = handlers[key];
      _handlers.push(handler);
    },
    off(type, handler) {
      const key = getHandlersKey(type);
      const _handlers = handlers[key];
      const handlerIdx = _handlers.indexOf(handler);
      if (handlerIdx !== -1) _handlers.splice(handlerIdx, 1);
    },
    cleanListeners(type) {
      const key = getHandlersKey(type);
      handlers[key] = [];
    },
    cleanAllListeners() {
      Object.keys(handlers).forEach(k => handlers[k] = []);
    },
    unobserve() {
      Object.setPrototypeOf(this, Array.prototype);
    }
  };

  Object.setPrototypeOf(api, Array.prototype);
  Object.setPrototypeOf(this, api);
}