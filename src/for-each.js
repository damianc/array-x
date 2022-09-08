export default function forEach(cb) {
  const _break = Symbol('forEach: break');
  const _continue = Symbol('forEach: continue');
  
  const api = {
    break: _break,
    continue: _continue
  };

  for (let i = 0; i < this.length; i++) {
    const cbRes = cb(this[i], i, { array: this, api });

    if (cbRes === _break) break;
    if (cbRes === _continue) continue;
  }
}