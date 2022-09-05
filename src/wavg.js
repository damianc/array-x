import { reduce, val } from '@utils';

export default function wavg(weightsOrSelector = [], selector = null) {
  const $ = val(selector);

  if (this.length === 0) return null;

  function prepareWeights(valsNumber, weights) {
    if (valsNumber <= weights.length) return weights;

    const padded = (new Array(valsNumber)).fill(1);
    padded.splice(0, weights.length, ...weights);
    return padded;
  }

  let w;
  if (Array.isArray(weightsOrSelector)) {
    w = prepareWeights(this.length, weightsOrSelector);
  }

  const $$ = function selectWeight(item, idx) {
    if (Array.isArray(w)) {
      return w[idx];
    } else if (typeof weightsOrSelector === 'function') {
      return weightsOrSelector(item);
    }
  };

  let d = 0;

  return reduce(
    this,
    (acc, curr, idx) => {
      const weight = $$(curr, idx);
      d += weight;
      return acc + ($(curr) * weight);
    },
    sum => sum / d,
    0
  );
}