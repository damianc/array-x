import { minDiffer } from '@utils';

export default function minDiffAhead(cb = null) {
  return minDiffer.globalAhead(this, cb);
}