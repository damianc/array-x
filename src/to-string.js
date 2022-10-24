export default function toString(itemMapper = null, separator = null, emptyMsg = null) {
  if (itemMapper === null) itemMapper = x => x.toString();
  if (separator === null) separator = ',';

  const prevProto = Object.getPrototypeOf(this);
  const newProto = {
    toString: stringifier
  };

  Object.setPrototypeOf(newProto, prevProto);
  Object.setPrototypeOf(this, newProto);

  function stringifier() {
    if (this.length > 0) {
      return this.map(itemMapper).join(separator);
    } else {
      if (emptyMsg === null) return '';
      return emptyMsg;
    }
  }
}