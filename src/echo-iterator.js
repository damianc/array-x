export default function echoIterator(sticky = false) {
  const copy = [...this];
  const lastIdx = copy.length - 1;

  let idx = 0;
  let ahead = 1;
  let run = false;

  function stickyTurn() {
    idx += ahead;
    if (idx < 0 || idx > lastIdx) {
      idx -= ahead;
      ahead *= -1;
    }
  }
  function nonStickyTurn() {
    if (run && (idx === lastIdx || idx === 0)) {
      ahead *= -1;
    }
    idx += ahead;
    run = true;
  }

  return {
    next() {
      if (sticky) stickyTurn();
      else nonStickyTurn();
    },
    get current() {
      return copy[idx];
    }
  };
}