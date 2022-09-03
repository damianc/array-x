export default function val(cb) {
  return x => (cb && typeof cb === 'function') ? cb(x) : x;
}