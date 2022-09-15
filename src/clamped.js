export default function clamped(min, max) {
  if (this.length > 0) {
    this.forEach((item, idx) => {
      this[idx] = clamp(item);
    });
  }

  return new Proxy(this, {
    set(t, k, v) {
      return Reflect.set(
        t,
        k,
        k == +k ? clamp(v) : v
      );
    }
  });

  function clamp(val) {
    return Math.min(Math.max(val, min), max);
  }
}