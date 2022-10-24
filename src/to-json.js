export default function toJSON(mapper = null) {
  const prevProto = Object.getPrototypeOf(this);
  const newProto = {
    toJSON: jsoner
  };

  Object.setPrototypeOf(newProto, prevProto);
  Object.setPrototypeOf(this, newProto);

  return JSON.stringify(this);

  function jsoner() {
    if (mapper === null) mapper = x => x;
    return mapper(this);
  }
}