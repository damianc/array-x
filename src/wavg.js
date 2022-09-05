import { reduce, val } from '@utils';

export default function wavg(weights = [], mapper = null) {
  const $ = val(mapper);

  if (this.length === 0) return null;

  function prepareWeights(valsNumber, weights) {
    if (valsNumber <= weights.length) return weights;

    const padded = (new Array(valsNumber)).fill(1);
    padded.splice(0, weights.length, ...weights);
    return padded;
  }

  const w = prepareWeights(this.length, weights);
  let d = 0;

  return reduce(
    this,
    (acc, curr, idx) => {
      const weight = w[idx];
      d += weight;
      return acc + ($(curr) * weight);
    },
    sum => sum / d,
    0
  );
}